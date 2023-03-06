import { getTodos, addTodo, deleteTodo, editTodo } from './api';

const todaysDateEl = document.querySelector('.todays-date');
const today = new Date();
const todaysDate = today.toISOString().slice(0, 10);

const formEl = document.querySelector('.todo-input form');
const containerEl = document.querySelector('.container');
const todoLiInputEl = document.querySelector('.input-text');

interface Todo {
	id: string;
	order: number;
	title: string;
	done: boolean;
	createdAt: string;
	updatedAt: string;
}

//--------------------------------------------  --------------------------
let todosArr: Todo[] = [];
let todoLiElArr: string[] = [];
//할 일 목록 렌더링 함수
const renderTodos = async function (): Promise<void> {
	todosArr = await getTodos();
	todoLiElArr = todosArr.map((todo: Todo): string => {
		const todoLiEl = `<li class="todolist_list" id="${todo.id}" data-done="${
			todo.done
		}" data-order="${todo.order}">
    <div>
      <span class="material-symbols-outlined icon--checkbox ${
				todo.done
			}">check_box</span>
    </div>
    <div class="list--item list--text" contenteditable="true">${
			todo.title
		}</div>
    <div class="list-item list--dates-container">
      <p class="list--date">작성: ${todo.createdAt.slice(0, 10)}</p>
      <p class="list--date">수정: ${todo.updatedAt.slice(0, 10)}</p>
    </div>
    <button class="edit-btn">
      <img
        class="list--item icon icon--edit"
        src="./images/pencil.png"
        alt="edit-icon"
      />
    </button>
    <button class="delete-btn">
      <img
        class="list--item icon icon--delete"
        src="./images/garbage.png"
        alt="delete-icon"/>
      </li>
    </button>`;
		return todoLiEl;
	});
	console.log(todoLiElArr);
	(containerEl as HTMLUListElement).innerHTML = `${todoLiElArr.join('')}`;
};

//페이지 처음 로드 시
window.addEventListener('load', renderTodos);
//할일목록 날짜 자동 렌더링
function bringTodaysDate(): void {
	(todaysDateEl as HTMLSpanElement).innerText = `${todaysDate}`;
}
setInterval(bringTodaysDate, 60000);
(todaysDateEl as HTMLSpanElement).innerText = `${todaysDate}`;

//새로운 할 일 추가할 때
(formEl as HTMLFormElement).addEventListener(
	'submit',
	async (e: SubmitEvent) => {
		e.preventDefault();
		if ((todoLiInputEl as HTMLInputElement).value === '') {
			alert('할 일이 없습니다!!');
			return;
		}
		await addTodo((todoLiInputEl as HTMLInputElement).value);
		await renderTodos();
		(todoLiInputEl as HTMLInputElement).value = '';
	}
);

//수정 , 삭제 버튼 ,체크박스 눌렀을 때
(containerEl as HTMLUListElement).addEventListener(
	'click',
	async (e: MouseEvent) => {
		const todoEl = (e.target as HTMLElement).closest('li') as HTMLLIElement;
		const todoElText = (todoEl as HTMLElement).querySelector(
			'.list--text'
		) as HTMLDivElement;
		const todoId = todoEl.id;
		if ((e.target as HTMLButtonElement).classList.contains('icon--edit')) {
			await editTodo(
				todoEl.id as string,
				todoElText.textContent as string,
				todoEl.dataset.done as boolean
			);
			alert('수정되었습니다!');
			return;
		} else if (
			(e.target as HTMLButtonElement).classList.contains('icon--delete')
		) {
			await deleteTodo(todoId);
			renderTodos();
			return;
		} else if (
			(e.target as HTMLSpanElement).classList.contains('icon--checkbox')
		) {
			if ((e.target as HTMLSpanElement).innerHTML === 'check_box') {
				(e.target as HTMLSpanElement).innerHTML = 'check_box_outline_blank';
				(e.target as HTMLSpanElement).closest('li').dataset.done = false;
				await editTodo(
					todoEl.id,
					todoElText.textContent as string,
					todoEl.dataset.done as boolean
				);
			} else {
				(e.target as HTMLSpanElement).innerHTML = 'check_box';
				(e.target as HTMLSpanElement).closest('li').dataset.done = true;
				await editTodo(
					todoEl.id,
					todoElText.textContent as string,
					todoEl.dataset.done as boolean
				);
			}
		}
	}
);
