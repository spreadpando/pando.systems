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
					<strong> Typescript</strong>. There is a custom-built api made up of
					serverless functions which fetch data from
					<strong> Github&apos;s GraphQL API</strong> and
					<strong> Digital Ocean&apos;s S3 API</strong> to display a list of{' '}
					<Link href="/code">my code repositories</Link> and securely stream a
					collection of <Link href="/music">my audio / visual work</Link>,
					respectively.
				</p>
			</Blurb>
		</>
	)
}

export default Catalog
