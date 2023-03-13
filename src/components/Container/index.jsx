import React, { useState, useEffect } from 'react';
import TodoList from '@/components/TodoList';
import * as S from './style.js';

const Container = ({ todos, setTodos }) => {
	return (
		<S.Container className='Container'>
			<ul className='Category'>
				<li>완료</li>
				<li>오늘 해야할 일</li>
				<li>날짜</li>
				<li>수정</li>
				<li>삭제</li>
			</ul>
			<div className='TodoListsWrapper'>
				{todos.map(todo => (
					<TodoList
						key={todo.id}
						id={todo.id}
						order={todo.order}
						title={todo.title}
						done={todo.done}
						// setDone={setDone}
						createdAt={todo.createdAt}
						updatedAt={todo.updatedAt}
						todos={todos}
						setTodos={setTodos}
					/>
				))}
			</div>
		</S.Container>
	);
};

export default Container;
