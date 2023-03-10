import React, { useState, useEffect } from 'react';
import TodoList from '@/components/TodoList';
import { getTodos } from '@/components/api.js';
import '@/styles/Container.scss';

const Container = ({ todos, setTodos }) => {
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
						updatedAt={todo.updatedAt}
						todos={todos}
						setTodos={setTodos}
					/>
				))}
			</div>
		</div>
	);
};

export default Container;
