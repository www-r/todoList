import React, { useRef, useEffect, useState } from 'react';
import { addTodo } from '@/components/api.js';
import * as S from './style.js';
const TodoInput = ({ todos, setTodos }) => {
	console.log('todos', todos);
	const inputRef = useRef();
	const [newText, setNewText] = useState('');

	const updateTodo = async () => {
		await addTodo(newTodo);
	};
	const submitHandler = async e => {
		e.preventDefault();
		// setNewtext(inputRef?.current.value);
		console.log('newText', newText);
		// put API 함수 사용
		const newInputTodo = await addTodo(newText);
		console.log('newInputTodo', newInputTodo);
		setTodos(todos => [newInputTodo, ...todos]);
	};

	const onChangeHandler = e => {
		setNewText(e.target.value);
	};
	const keyDownHandler = e => {
		e.key === 'Enter'
			? async () => {
					await submitHandler();
			  }
			: function () {
					return;
			  };
	};

	return (
		<S.TodoInput className='TodoInput'>
			<form onSubmit={submitHandler}>
				<input onChange={onChangeHandler} type='text' />
				<button type='submit'>추가</button>
			</form>
		</S.TodoInput>
	);
};

export default TodoInput;
