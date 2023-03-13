const URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos';
const headers = {
	'content-type': 'application/json',
	'apikey': 'FcKdtJs202301',
	'username': 'KDT4_KimYoungEn'
};

// 조회 api
export async function getTodos() {
	const res = await fetch(URL, {
		'method': 'GET',
		headers
	});
	const json = await res.json();
	return json;
}

//추가 api
export async function addTodo(newTodo) {
	const res = await fetch(
		'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
		{
			'method': 'POST',
			headers,
			'body': JSON.stringify({
				title: `${newTodo}`
			})
		}
	);
	const json = await res.json();
	return json;
}

//삭제 api
export async function deleteTodo(todoid) {
	const res = await fetch(
		`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${todoid}`,
		{
			method: 'DELETE',
			headers
		}
	);
	const json = await res.json();
	return json;
}

//수정 api
export async function editTodo(id, title, done) {
	console.log(title);
	const res = await fetch(
		`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/${id}`,
		{
			method: 'PUT',
			headers,
			body: JSON.stringify({ title, 'done': done })
		}
	);
}
