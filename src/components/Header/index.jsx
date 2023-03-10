import React from 'react';
import '@/styles/Header.scss';
import { TodoInput } from '../index';

const Header = ({ todos, setTodos }) => {
	console.log(todos);
	return (
		<div className='Header'>
			<div className='Title'>
				<h1>할 일 목록</h1>
			</div>
			<TodoInput todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default Header;
