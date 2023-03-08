import React from 'react';
import {
	editTodoHandler,
	deleteTodoHandler
} from '@/assets/components/Container';

const TodoList = todo => {
	return (
		<div className='todoList'>
			<div
				className='todolistList'
				id={todo.id}
				dataDone={todo.done}
				dataOrder={todo.order}
			>
				<div className='list--item'>
					<span className='material-symbols-outlined icon--checkbox true'>
						check_box_outline_blank
					</span>
				</div>
				<div className='list--item list--text' contentEditable='true'>
					{todo.title}
				</div>
				<div className='list--item list--dates-container'>
					<p className='list--date'>
						작성:{todo.createdAt.toISOString.slice(0, 10)}
					</p>
					<p className='list--date'>
						수정:{todo.updatedAt.toISOString.slice(0, 10)}
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
						onClick={deleteTodoHandler}
					/>
				</button>
			</div>
		</div>
	);
};

export default TodoList;
