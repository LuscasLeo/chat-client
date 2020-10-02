import React from 'react';
import { Container, GlobalStyle } from './styles';

import { hot } from 'react-hot-loader';
import './fonts.css';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import store from '../store';
import ChatContainer from './ChatContainer';

const App: React.FC = () => {

	const FullScreenButton = styled.button`
		padding: 1em;
		font-family: Arvo;
		font-size: 2rem;
		position: absolute;
		right: 0;
		opacity: .3;
	`;

	const toggleFullScreen = () => {
		document.documentElement.requestFullscreen();
	};

	return (
		<Provider store={store} >
			<Container>
				<FullScreenButton onClick={toggleFullScreen}>
					fullScreen
				</FullScreenButton>
				<GlobalStyle />
				<ChatContainer/>
				{/* <Login /> */}
			</Container>
		</Provider>
	);
};

export default hot(module)(App);

