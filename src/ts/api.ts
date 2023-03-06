import { Interface } from 'readline';

interface Todo {
	id: string;
	order: number;
	title: string;
	done: boolean;
	createdAt: string;
	updatedAt: string;
}

const URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos';
const HEADERS: {
	'content-type': string;
	'apikey': string;
	'username': string;
} = {
	'content-type': 'application/json',
	'apikey': 'FcKdtJs202301',
	'username': 'KDT4_KimYoungEn'
};

// 조회 api
export async function getTodos(): Promise<Todo[]> {
	const res = await fetch(URL, {
		'method': 'GET',
		'headers': HEADERS
	});
	const json = await res.json();
	return json as Todo[];
}

//추가 api
export async function addTodo(newTodo: string): Promise<Todo> {
	const res = await fetch(
		'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
		{
			'method': 'POST',
			'headers': HEADERS,
			'body': JSON.stringify({
				title: `${newTodo}`
			})
		}
	);
	const json = await res.json();
	return json as Todo;
}

//삭제 api
export async function deleteTodo(todoid: string): Promise<boolean> {
	const res = await fetch(
		`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoid}`,
		{
			method: 'DELETE',
			headers: HEADERS
		}
	);
	const json = await res.json();
	return json as boolean;
}

//수정 api
export async function editTodo(
	todoid: string,
	todotitle: string,
	tododone: boolean
): Promise<Todo> {
	const res = await fetch(
		`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoid}`,
		{
			method: 'PUT',
			headers: HEADERS,
			body: JSON.stringify({ 'title': `${todotitle}`, 'done': `${tododone}` })
		}
	);
	const json = await res.json();
	return json as Todo;
}
