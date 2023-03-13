import styled from 'styled-components';

export const Container = styled.div`
	margin: auto;
	width: 600px;
	min-height: 400px;
	.Category {
		display: grid;
		grid-template-columns: 1fr 7fr 2.5fr 1fr 1fr;
		grid-template-rows: 40px;
		align-items: center;
		border: 4px solid ${({ theme }) => theme.palette.darkblue};
		padding-left: 10px;
		height: 40px;
		li {
			font-family: 'SF_HambakSnow';
			color: ${({ theme }) => theme.palette.darkblue};
		}
	}
	.TodoListsWrapper {
		border: 4px solid ${({ theme }) => theme.palette.darkblue};
		border-top: none;
	}
`;
