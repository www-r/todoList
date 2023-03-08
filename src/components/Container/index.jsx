import React, { useState } from 'react';
import TodoList from '../TodoList';

export const editTodoHandler = () => {};
export const deleteTodoHandler = () => {};

const Container = () => {
	return (
		<div className='Container'>
			<div className='Category'>
				<div>완료</div>
				<div>오늘 해야할 일</div>
				<div>날짜</div>
				<div>수정</div>
				<div>삭제</div>
			</div>
			<div className='TodoListWrapper'>{...todoElsArr.map(<TodoList />)}</div>
		</div>
	);
};

export default Container;
