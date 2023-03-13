import React from 'react';
import moment from 'moment';
import * as S from './style.js';
const HeaderDate = () => {
	let date = new Date().toISOString().slice(0, 10);
	// setInterval(() => {
	// 	date = new Date().toISOString().slice(0, 10);
	// }, 60000);
	return (
		<S.DateContainer className='DateContainer'>
			<span className='DateTag'>날짜</span>
			<span className='TodayDate'>{date}</span>
		</S.DateContainer>
	);
};

export default HeaderDate;
