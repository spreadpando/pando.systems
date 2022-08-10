import Nav from '../components/nav/'
import Link from 'next/link'
import styled from '@emotion/styled'

const Blurb = styled('div')`
	position: absolute;
	height: 90%;
	width: 100%
	display: flex;
	display: -webkit-flex;
	justify-content: center;
	align-content: center;
	line-height: 1.5;
	flex-wrap: wrap;
	margin: 0 15vw;
	p {
		position: relative;
		width: 100%;
		justify-content: center;
		margin-bottom: 0;
		z-index: 2;
	}
`
// deploy
const Catalog = () => {
	return (
		<>
			<Nav />
			<Blurb>
				<p>
					This webapp is built with<strong> Next.js</strong> and
					<strong> Typescript</strong>. The api talks to 
					<strong> Github&apos;s GraphQL api</strong> and
					<strong> Digital Ocean&apos;s S3 api</strong> to list my{' '}
					<Link href="/code">code repositories</Link> and to stream some <Link href="/music"> music</Link>.
				</p>
			</Blurb>
		</>
	)
}

export default Catalog
