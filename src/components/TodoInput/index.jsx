import React, { useState } from 'react';
// import {sendTodo } from ../api.js;
const TodoInput = () => {
	const submitHandler = e => {
		const todoInput = e.target.closest('input').value;
		sendTodo(todoInput);
	};
	const keyDownHandler = e => {
		e.key === 'Enter'
			? submitHandler()
			: function () {
					return;
			  };
	};
	return (
		<div className='TodoInput'>
			<input type='text' onKeyDown={keyDownHandler} />
			<button onClick={submitHandler}>추가</button>
		</div>
	);
};

export default TodoInput;
