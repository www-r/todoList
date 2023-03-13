import styled from 'styled-components';

export const TodoInput = styled.div`
	box-sizing: border-box;
	margin: 0 50px;
	border: 5px solid ${({ theme }) => theme.palette.darkblue};
	border-radius: 20px;
	background-color: #fff;
	form {
		display: flex;
		margin: 10px 30px;
	}
	input {
		outline: none;
		border: none;
		display: inline-block;
		border-bottom: 3px solid ${({ theme }) => theme.palette.darkblue};
		width: 80%;
		font-size: ${({ theme }) => theme.fontSizes.large};
		color: ${({ theme }) => theme.palette.darkblue};
	}
	button {
		outline: none;
		border-radius: 20px;
		border: 5px solid ${({ theme }) => theme.palette.darkblue};
		margin: 0 0 0 15px;
		padding: 0 10px;
		width: 80px;
		background-color: #8dcdd3;
		font-family: 'SF_HambakSnow';
		font-weight: 900;
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.palette.darkblue};
	}
`;
