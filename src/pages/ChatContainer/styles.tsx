import styled from 'styled-components';


export const Container = styled.div`
	max-width: 900px;
	min-height: 100vh;
	margin: 0 auto;
	background: #8FB3B1;

	display: grid;
	grid-template-areas:
		"history history history"
		"history history history"
		"input input input"
	;
	grid-template-rows: 1fr 1fr 4.5em;
	grid-template-columns: 1fr 1fr 1fr;
	box-shadow: 0px 0px 10px 1px hsl(177, 1%, 30%);
`;

export const Wrapper = styled.div`
	padding: 1rem;
	height: 100%;
`;