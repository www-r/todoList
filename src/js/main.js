import { getTodos } from './api.js';
import { addTodo } from './api.js';
import { deleteTodo } from './api.js';
import { editTodo } from './api.js';
const URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos';
const HEADERS = {
  'content-type': 'application/json',
  'apikey': 'FcKdtJs202301',
  'username': 'KDT4_KimYoungEn'
};

const todaysDateEl = document.querySelector('.todays-date');
const today = new Date();
const todaysDate = today.toISOString().slice(0, 10);

const formEl = document.querySelector('.todo-input form');
const containerEl = document.querySelector('.container');
const todoLiInputEl = document.querySelector('.input-text');

//--------------------------------------------  --------------------------
let todosArr = [];
let todoLiElArr = [];
//할 일 목록 렌더링 함수
const renderTodos = async function () {
  todosArr = await getTodos();
  todoLiElArr = todosArr.map(todo => {
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
  containerEl.innerHTML = `${todoLiElArr.join('')}`;
};

//페이지 처음 로드 시
window.addEventListener('load', renderTodos);
//할일목록 날짜 자동 렌더링
function bringTodaysDate() {
  todaysDateEl.innerText = `${todaysDate}`;
}
setInterval(bringTodaysDate, 60000);
todaysDateEl.innerText = `${todaysDate}`;

//새로운 할 일 추가할 때
formEl.addEventListener('submit', async e => {
  e.preventDefault();
  if (todoLiInputEl.value === '') {
    alert('할 일이 없습니다!!');
    return;
  }
  await addTodo(todoLiInputEl.value);
  await renderTodos();
  todoLiInputEl.value = '';
});

//수정 , 삭제 버튼 ,체크박스 눌렀을 때
containerEl.addEventListener('click', async e => {
  const todoEl = e.target.closest('li');
  const todoElText = todoEl.querySelector('.list--text');
  const todoId = e.target.closest('li').id;
  if (e.target.classList.contains('icon--edit')) {
    await editTodo(todoEl.id, todoElText.textContent, todoEl.dataset.done);
    alert('수정되었습니다!');
    return;
  } else if (e.target.classList.contains('icon--delete')) {
    await deleteTodo(todoId);
    await renderTodos();
    return;
  } else if (e.target.classList.contains('icon--checkbox')) {
    if (e.target.innerHTML === 'check_box') {
      e.target.innerHTML = 'check_box_outline_blank';
      e.target.closest('li').dataset.done = false;
      await editTodo(todoEl.id, todoElText.textContent, todoEl.dataset.done);
    } else {
      e.target.innerHTML = 'check_box';
      e.target.closest('li').dataset.done = true;
      await editTodo(todoEl.id, todoElText.textContent, todoEl.dataset.done);
    }
  }
});
