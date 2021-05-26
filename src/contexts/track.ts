/* eslint-disable @typescript-eslint/restrict-template-expressions */
import React from 'react'
import { createContext } from 'react'

export interface ITrack {
	title: string
	artist: string
	collection: string
	apiKey: string
}

export interface ITrackState {
	tracklist: ITrack[]
	current: ITrack
	trackIndex: number
	isPlaying: boolean
	error?: string
}

export interface ITrackActions {
	type: 'PLAY' | 'SKIP' | 'QUEUE' | 'REMOVE' | 'REPLACE'
	payload: boolean | number | [ITrack, number] | ITrack[]
}

const isTracklist = (tbd: any): tbd is ITrack[] => {
	if (Array.isArray(tbd)) {
		if (tbd[1] && typeof tbd[1] != 'number') {
			return true
		}
	}
}

export const trackReducer = (
	state: ITrackState,
	action: ITrackActions
): ITrackState => {
	const payload = action.payload
	const tracklist = [...state.tracklist]
	switch (action.type) {
		case 'PLAY':
			if (typeof payload === 'boolean') {
				return { ...state, isPlaying: payload }
			}
			return state

		case 'SKIP':
			if (
				typeof payload === 'number' &&
				payload < tracklist.length &&
				payload >= 0
			) {
				return {
					...state,
					trackIndex: payload,
					current: tracklist[payload]
				}
			}
			return state

		case 'QUEUE':
			// payload[0] = track; payload[1] = index
			if (!tracklist.includes(payload[0])) {
				tracklist.splice(payload[1], 0, payload[0])
				return {
					...state,
					tracklist: tracklist
				}
			}
			return state

		case 'REMOVE':
			if (
				typeof payload === 'number' &&
				tracklist.length > 0 &&
				payload < tracklist.length
			) {
				tracklist.splice(payload, 1)
				return {
					...state,
					tracklist: tracklist
				}
			}

			return state

		case 'REPLACE':
			if (isTracklist(payload)) {
				return { ...state, tracklist: payload }
			} else {
				return state
			}

		default:
			return state
	}
}

export interface ITrackContextProps {
	trackState: ITrackState
	trackDispatch: React.Dispatch<ITrackActions>
}

export const initialTrackState: ITrackState = {
	tracklist: [
		{
			title: 'Untitled',
			artist: 'aphyyd',
			collection: 'hello',
			apiKey: 'tracks/aphyyd/hello/Untitled.wav'
		}
	],
	current: {
		title: 'Untitled',
		artist: 'aphyyd',
		collection: 'hello',
		apiKey: 'tracks/aphyyd/hello/Untitled.wav'
	},
	trackIndex: 0,
	isPlaying: false
}

const TrackContext = createContext<ITrackContextProps>({
	trackState: initialTrackState,
	trackDispatch: () => {}
})

export const TrackContextConsumer = TrackContext.Consumer
export const TrackCotextProvider = TrackContext.Provider
export default TrackContext
