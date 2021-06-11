import styled from '@emotion/styled'
import { ITrack } from '../../contexts/track'
import Track from './track'

const PlaylistFrame = styled('div')`
	position: relative;
	width: 100%;
	padding: 16px;
	height: fit-content;
	border-radius: 2px;
	background-color: #fff;
	hr {
		margin: 0;
	}
`
interface IPlaylistProps {
	tracklist: ITrack[]
}

const Playlist = ({ tracklist }: IPlaylistProps) => {
	return (
		<PlaylistFrame>
			{tracklist.map((track, i: number) => {
				return (
					<div key={`track-${i}`}>
						<Track track={track} />
						<hr />
					</div>
				)
			})}
		</PlaylistFrame>
	)
}

export default Playlist
