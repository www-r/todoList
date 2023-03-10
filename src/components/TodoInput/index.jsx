import React, { useRef, useEffect, useState } from 'react';
import { addTodo } from '@/components/api.js';

const TodoInput = ({ todos, setTodos }) => {
	const inputRef = useRef();
	const [newtext, setNewtext] = useState('');
	// const newTodo = setNewtext(newtext);
	const updateTodo = async () => {
		await addTodo(newTodo);
	};
	const submitHandler = async () => {
		setNewtext(inputRef?.current.value);
		// out API 함수 사용
		const newInputTodo = await addTodo(newtext);

		console.log('new', newInputTodo);
		console.log('after set: ', newtext);
	};
	const keyDownHandler = e => {
		e.key === 'Enter'
			? async () => {
					await submitHandler();
					renderTodoHandler();
			  }
			: function () {
					return;
			  };
	};
	useEffect(() => {
		if (!newtext) return;
		console.log('after useEffect', newtext);
		submitHandler();
	}, [newtext]);

	return (
		<div className='TodoInput'>
			<input ref={inputRef} type='text' onKeyDown={keyDownHandler} />
			<button onClick={submitHandler}>추가</button>
		</div>
	);
};

export default TodoInput;
