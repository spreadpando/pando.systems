import React from 'react'
import styled from '@emotion/styled'
import { IRepository } from '.'

const Row = styled('div')`
	width: 100%;
	display: grid;
	grid-template-columns: 30% 15% 45% 10%;
	text-align: center;
	hr {
		margin: 0;
		width: 100%;
	}
	span {
		position: relative;
		z-index: 2;
	}
`

export interface IRepoListProps {
	repo: IRepository
}

const Repo = ({ repo }: IRepoListProps) => {
	return (
		<Row>
			<span style={{ textAlign: 'left' }}>{repo.name}</span>
			<span>
				<a href={repo.url}>readme</a>
			</span>
			<span>{repo.description}</span>
			{repo.homepageUrl ? (
				<span>
					<a href={repo.homepageUrl}>link</a>
				</span>
			) : null}
		</Row>
	)
}

export default Repo
