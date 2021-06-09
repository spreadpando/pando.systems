import { GetServerSideProps } from 'next'
import { GraphQLClient, gql } from 'graphql-request'
import Nav from '../components/nav/'
import Repolist from '../components/repolist'

export interface IRepoListProps {
	repos: []
}

const Code = ({ repos }: IRepoListProps) => {
	return (
		<>
			<Nav />
			<Repolist repos={repos} />
		</>
	)
}

export const getServerSideProps: GetServerSideProps = async () => {
	const endpoint = 'https://api.github.com/graphql'

	const graphQLClient = new GraphQLClient(endpoint, {
		headers: {
			authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`
		}
	})

	const query = gql`
		{
			user(login: "spreadpando") {
				pinnedItems(first: 12, types: [REPOSITORY, GIST]) {
					totalCount
					edges {
						node {
							... on Repository {
								name
								url
								description
								homepageUrl
							}
						}
					}
				}
			}
		}
	`

	const data = await graphQLClient.request(query)
	const items = data.user.pinnedItems.edges.map(node => node.node)
	return {
		props: {
			repos: items
		}
	}
}

export default Code
