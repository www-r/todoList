import styled from 'styled-components';

export const Header = styled.div`
	box-sizing: border-box;
	border: 4px solid ${({ theme }) => theme.palette.darkblue};
	border-bottom: none;
	margin: auto;
	width: 600px;
	height: 250px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	background-color: ${({ theme }) => theme.palette.lightblue};

	.Title {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}
	.Title h1 {
		box-sizing: border-box;
		border: 5px solid ${({ theme }) => theme.palette.darkblue};
		border-radius: 20px;
		margin: 20px 0;
		width: 350px;
		text-align: center;
		font-size: ${({ theme }) => theme.fontSizes.large};
		background-color: #fff;
		font-family: 'SF_HambakSnow';
		color: ${({ theme }) => theme.palette.darkblue};
	}
`;
