import React from 'react';
import { TodoInput } from '../index';

const Header = () => {
	return (
		<div className='Header'>
			<div className='Title'>
				<span>할 일 목록</span>
			</div>
			<TodoInput />
		</div>
	);
};

export default Header;
