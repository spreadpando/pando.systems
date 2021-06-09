import { useReducer, useState } from 'react'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {
	TrackCotextProvider,
	trackReducer,
	initialTrackState
} from '../contexts/track'
import { globalStyles } from '../styles/'

const Player = dynamic(() => import('../components/player'), {
	ssr: false
})
const Scene = dynamic(() => import('../components/dice/scene'), { ssr: false })

const App = ({ Component, pageProps }: AppProps) => {
	const [entered, setEntered] = useState(false)

	const [trackState, trackDispatch] = useReducer(
		trackReducer,
		initialTrackState
	)

	const trackContextValues = {
		trackState,
		trackDispatch
	}

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link
					rel="stylesheet"
					href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css"
				/>
			</Head>
			<TrackCotextProvider value={trackContextValues}>
				{entered ? <Component {...pageProps} /> : null}
				<Scene/>
				<Player visible={entered} setEntered={setEntered} />
			</TrackCotextProvider>
			{globalStyles}
		</>
	)
}

export default App
