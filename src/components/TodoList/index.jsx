import React from 'react';

import { editTodoHandler, deleteTodoHandler } from '@/components/Container';

const TodoList = ({ id, order, title, done, createdAt, updatedAt }) => {
	console.log(id, order, title, done, createdAt, updatedAt);
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
					<p className='list--date'>
						{/* 작성:{createdAt.toISOString.slice(0, 10)} */}
					</p>
					<p className='list--date'>
						{/* 수정:{updatedAt.toISOString.slice(0, 10)} */}
					</p>
				</div>
				<button className='edit-btn'>
					<img
						className='list--item icon icon--edit'
						src='@/assets/pencil'
						alt='edit button'
						onClick={editTodoHandler}
					/>
				</button>
				<button className='delete-btn'>
					<img
						className='list--item icon icon--delete'
						src='@/assets/garbage'
						alt='delete button'
						// onClick={deleteTodoHandler}
					/>
				</button>
			</li>
		</div>
	);
};

export default TodoList;
