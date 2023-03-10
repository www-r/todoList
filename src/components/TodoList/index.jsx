import React, { useEffect, useState, useRef } from 'react';
import { editTodo, deleteTodo, getTodos } from '@/components/api.js';

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
	console.log(todos);

	const editTodoHandler = async e => {
		console.log(newTodo);
		if (e.target.closest('.list--text').hasAttribute('contenteditable')) {
			e.target.closest('list--text').remove('contenteditable');
			//edit API 사용
			await editTodo(id, newTodo, done);
			alert('수정되었습니다!');
		} else {
			e.target.closest('.list-text').setAttribute('contenteditable');
		}
	};

	const deleteTodoHandler = async id => {
		// await deleteTodo(id);
		const newTodos = todos.filter(todo => todo.id !== id);
		setTodos(newTodos);
	};

	const renderTodoHandler = async () => {
		const todoArr = await getTodos();
		todoArr.map(todo => <todoList />);
	};

	return (
		<div className='todoList'>
			<li className='todolistList'>
				<div className='list--item'>
					<span className='material-symbols-outlined icon--checkbox true'>
						check_box_outline_blank
					</span>
				</div>
				<div
					className='list--item list--text'
					contentEditable
					suppressContentEditableWarning
				>
					{title}
				</div>
				<div className='list--item list--dates-container'>
					<p className='list--date'>작성:{createdAt.slice(0, 10)}</p>
					<p className='list--date'>수정:{updatedAt.slice(0, 10)}</p>
				</div>
				<button className='edit-btn'>
					<img
						className='list--item icon icon--edit'
						src='@/assets/pencil.png'
						alt='edit button'
						onChange={editTodoHandler}
					/>
				</button>
				<button className='delete-btn'>
					<img
						className='list--item icon icon--delete'
						src='@/assets/garbage.png'
						alt='delete button'
						onClick={() => deleteTodoHandler(id)}
					/>
				</button>
			</li>
		</div>
	);
};

export default TodoList;
