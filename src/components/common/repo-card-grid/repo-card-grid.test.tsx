import React from 'react';
import { render } from '@testing-library/react';
import RepositoryCardGrid from './repo-card-grid';

test('renders learn react link', () => {
  const repoData: any = [{
    repos_url: "https://api.github.com/users/sahat/repos",
    html_url: "https://github.com/sahat/satellizer",
    name: "satellizer",
    id: 21486287,
    language: "TypeScript",
    description: "Token-based AngularJS Authentication",
    stargazers_count: 8001,
    owner: { login: "sahat", html_url: "https://github.com/sahat" }
  }]
  const { getByText } = render(<RepositoryCardGrid resultItemsList={repoData} />);
  const linkElement = getByText('TypeScript');
  expect(linkElement).toBeInTheDocument();
});
