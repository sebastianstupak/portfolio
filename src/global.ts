import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;

		font-family: "neue-haas-grotesk-display", sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	body {
		height: 100vh;
		background-color: black;
	}

	#root {
		margin: 0 auto;
		height: 100%;
	}

	.fade {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
	}

	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		opacity: 1;
		transition: opacity 200ms;
	}

	.fade-exit {
		opacity: 1;
	}

	.fade-exit-active {
		opacity: 0;
		transition: opacity 200ms;
	}
`;

export default GlobalStyles;
