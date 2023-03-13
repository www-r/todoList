import React, { useEffect, useState, useRef } from 'react';
import { editTodo, deleteTodo, getTodos } from '@/components/api.js';
import * as S from './style.js';

const TodoList = ({
	id,
	order,
	title,
	done,
	createdAt,
	updatedAt,
	todos,
	setTodos
}) => {
	// [done, setDone] = useState(false);
	const [show, setShow] = useState(true);
	const [inputValue, setInputValue] = useState(title);

	const editTodoHandler = async (id, done) => {
		setShow(!show);
		console.log(inputValue);
		// title = editTodo(id, title, done);
		editTodo(id, inputValue, done);

		// todos.map((todo)=> ?:)
		const newTodos = todos.map(todo =>
			todo.id === id
				? { id, title: inputValue, done, createdAt, updatedAt }
				: todo
		);

		setTodos(newTodos);
	};

	const deleteTodoHandler = async id => {
		await deleteTodo(id);
		const newTodos = todos.filter(todo => todo.id !== id);
		setTodos(newTodos);
	};

	const renderTodoHandler = async () => {
		const todoArr = await getTodos();
		todoArr.map(todo => <todoList />);
	};

	const todoDoneHandler = (id, title, done) => {
		editTodo(id, title, done);
		const newTodos = todos.map(todo =>
			todo.id === id ? { id, title, done: !done, createdAt, updatedAt } : todo
		);
		setTodos(newTodos);

		// setArticles(
		// 	articles.map(article => (article.id === id ? newArticle : article))
		// );
	};

	const onChangeHandler = e => {
		setInputValue(e.target.value);
	};

	return (
		<S.TodoList className='TodoList'>
			<li className='todolistList'>
				<div className='list--item'>
					<div className='checkbox'>
						{!done ? (
							<img
								className='checkboxImage empty'
								src='./src/assets/checkbox-empty.png'
								alt='checkbox empty'
								onClick={() => {
									todoDoneHandler(id, title, done);
								}}
							/>
						) : (
							<img
								className='checkboxImage checked'
								src='./src/assets/checkbox-checked.png'
								alt='checkbox checked'
								onClick={() => {
									todoDoneHandler(id, title, done);
								}}
							/>
						)}
					</div>
				</div>
				{show && (
					<div className='list--item list--text' suppressContentEditableWarning>
						{title}
					</div>
				)}
				{!show && (
					<input type='text' value={inputValue} onChange={onChangeHandler} />
				)}
				<div className='list--item list--dates-container'>
					<p className='list--date'>작성:{createdAt.slice(0, 10)}</p>
					<p className='list--date'>수정:{updatedAt.slice(0, 10)}</p>
				</div>
				<button className='edit-btn'>
					<img
						className='list--item icon icon--edit'
						src='./src/assets/pencil.png'
						alt='edit button'
						onClick={e => editTodoHandler(id, done)}
					/>
				</button>
				<button className='delete-btn'>
					<img
						className='list--item icon icon--delete'
						src='./src/assets/garbage.png'
						alt='delete button'
						onClick={() => deleteTodoHandler(id)}
					/>
				</button>
			</li>
		</S.TodoList>
	);
};

export default TodoList;
