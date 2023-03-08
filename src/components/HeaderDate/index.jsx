import React from 'react';
import moment from 'moment';

const HeaderDate = () => {
	let date = new Date().toISOString().slice(0, 10);
	// setInterval(() => {
	// 	date = new Date().toISOString().slice(0, 10);
	// }, 60000);
	return (
		<div className='DateContainer'>
			<span className='DateTag'>날짜</span>
			<span className='TodayDate'>{date}</span>
		</div>
	);
};

export default HeaderDate;
