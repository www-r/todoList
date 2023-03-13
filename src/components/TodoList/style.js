import styled from 'styled-components';

export const TodoList = styled.div`
	.todolistList {
		display: grid;
		grid-template-columns: 1fr 7fr 2.5fr 1fr 1fr;
		grid-template-rows: 50px;
		align-items: center;
		width: 600px;
		font-size: 30px;
		border-bottom: 4px solid ${({ theme }) => theme.palette.darkblue};
		color: ${({ theme }) => theme.palette.darkblue};
		.checkbox {
			img {
				width: 30px;
				height: 30px;
				text-align: center;
				&:hover {
					cursor: pointer;
				}
			}
		}
		.list--text {
			font-size: 30px;
		}
		.list--date {
			font-size: 15px;
			margin: 7px 0;
		}
		.edit-btn,
		.delete-btn {
			border: none;
			outline: none;
			background-color: transparent;
			margin-right: 7px;
			img {
				height: 40px;
				&:hover {
					cursor: pointer;
				}
			}
		}
	}
	.nodisplay {
		display: none;
	}
`;
