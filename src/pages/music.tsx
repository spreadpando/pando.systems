import { GetServerSideProps } from 'next'
import s3ListObjects from '../util/s3listObjects'
import S3 from '../util/s3Connect'
import Playlist from '../components/playlist'
import Nav from '../components/nav/'
import { ITrack } from '../contexts/track'
import styled from '@emotion/styled'

interface ICatalogProps {
	tracklists: ITrack[][]
}

const Frame = styled('div')`
	position: absolute;
	top: 100px;
	width: 100%;
	height: 100%;
	max-height: calc(100vh - 100px);
	padding-bottom: 100px;
	overflow-y: scroll;
	vertical-align: top;
	::-webkit-scrollbar {
		display: none;
	}
`

const Catalog = ({ tracklists }: ICatalogProps) => {
	return (
		<>
			<Nav />
			<Frame>
				{tracklists.map((tracklist, i) => (
					<Playlist tracklist={tracklist} key={i} />
				))}
			</Frame>
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const lists = []
	const album = await s3ListObjects(S3, 'tracks/pando/meditations/')
	const album1 = await s3ListObjects(S3, 'tracks/pando/Live Crawdads/')
	lists.push(album, album1)
	return {
		props: {
			tracklists: lists
		}
	}
}

export default Catalog
