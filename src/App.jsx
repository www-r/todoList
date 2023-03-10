import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme.js';
import { HeaderDate, Header, Container } from '@/components/index.js';
import { useState, useEffect } from 'react';
import { getTodos } from '@/components/api.js';
function App() {
	const [todos, setTodos] = useState([]);
	const getTodo = async () => {
		const newtodos = await getTodos();
		setTodos(newtodos);
		// setTodos는 초기상태인[]을 newtodos 로 바꿔주기 위해 사용
	};
	// 처음 로딩됐을 떄
	useEffect(() => {
		getTodo();
	}, []);

	return (
		// <ThemeProvider theme={theme}>
		<div className='App'>
			<HeaderDate />
			<Header todos={todos} setTodos={setTodos} />
			<Container todos={todos} setTodos={setTodos} />
			<div>
				<p>Icons made by Freepik from www.flaticon.com'</p>
			</div>
		</div>
		// </ThemeProvider>
	);
}

export default App;
