import React from 'react'
import styled from '@emotion/styled'
import Repo from './repo'

const ReposContainer = styled('div')`
	position: absolute;
	top: 100px;
	width: 100%;
	overflow-y: scroll;
	padding: 25px;
	max-height: 70vh;
	span {
		margin: 0.5rem 0;
	}
`
export interface IRepository {
	name: string
	url: string
	description: string
	homepageUrl: string
}
export interface IRepoListProps {
	repos: IRepository[]
}

const Repolist = ({ repos }: IRepoListProps) => {
	return (
		<ReposContainer>
			{repos.map((repo, i) => (
				<div key={i}>
					<Repo repo={repo}></Repo>
					<hr />
				</div>
			))}
		</ReposContainer>
	)
}
export default Repolist
