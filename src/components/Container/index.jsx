import React, { useState, useEffect } from 'react';
import TodoList from '@/components/TodoList';
import { editTodo, deleteTodo, getTodos } from '@/components/api.js';

export const editTodoHandler = event => {
	console.log(event.target);
};
export const deleteTodoHandler = e => {
	deleteTodo(e.target.closest('li').id);
	// renderTodo();
};

const Container = () => {
	const [todos, setTodos] = useState([]);

	const getTodo = async () => {
		const newtodos = await getTodos();
		setTodos(newtodos);
	};
	// 처음 로딩됐을 떄
	useEffect(() => {
		getTodo();
	}, []);

	console.log('e', todos);

	return (
		<div className='Container'>
			<div className='Category'>
				<div>완료</div>
				<div>오늘 해야할 일</div>
				<div>날짜</div>
				<div>수정</div>
				<div>삭제</div>
			</div>

			<div className='TodoListsWrapper'>
				{todos.map(todo => (
					<TodoList
						key={todo.id}
						id={todo.id}
						order={todo.order}
						title={todo.title}
						done={todo.done}
						createdAt={todo.createdAt}
						updatedAt={todo.upDatedAt}
					/>
				))}
			</div>
		</div>
	);
};

export default Container;
