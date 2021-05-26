import React from 'react'
import { css, Global } from '@emotion/react'

export const globalStyles = (
	<Global
		styles={css`
			* {
				-ms-user-select: none;
				-moz-user-select: none;
				-webkit-user-select: none;
				-webkit-touch-callout: none;
				-khtml-user-select: none;
				user-select: none;
				box-sizing: border-box;
			}
			html,
			body,
			#__next {
				padding: 0;
				margin: 0;
				background: #fff;
				min-height: 100vh;
				min-width: 100vw;
				height: 100vh;
				width: 100vw;
				font-family: Hack, monospace;
				font-size: 12px;
			}
			#__next {
				display: flex;
				align-content: center;
				justify-content: center;
				display: -webkit-flex;
			}
			ul,
			ol {
				padding: 0;
			}
			h1 {
				font-size: 2em;
				letter-spacing: 0.3em;
			}
			a {
				color: inherit;
				font-weight: 600;
				font-style: italic;
				text-decoration: none;
			}
			button,
			input[type='submit'],
			input[type='reset'] {
				background: none;
				color: inherit;
				border: none;
				padding: 0;
				font: inherit;
				cursor: pointer;
				outline: inherit;
			}
		`}
	/>
)
