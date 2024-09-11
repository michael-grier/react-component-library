import React from 'react';
import { Container } from './styled';
import { PageProps } from './types';

const Page: React.FC<PageProps> = ({ title, children }) => {
	return (
		<Container data-testid='page-container'>
			<h1>{title}</h1>
			{children}
		</Container>
	);
};

export default Page;
