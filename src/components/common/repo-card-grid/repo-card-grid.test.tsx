import React from 'react';
import { render } from '@testing-library/react';
import RepositoryCardGrid from './repo-card-grid';

const REPO_MASTER_DATA: any = [{
  repos_url: "https://api.github.com/users/sahat/repos",
  html_url: "https://github.com/sahat/satellizer",
  name: "satellizer",
  id: 21486287,
  language: "TypeScript",
  description: "Token-based AngularJS Authentication",
  stargazers_count: 8001,
  owner: { login: "sahat", html_url: "https://github.com/sahat" }
}];

describe('testing <RepositoryCardGrid>', () => {
  test('renders correctly', () => {
    const repoGridComponent = render(<RepositoryCardGrid resultItemsList={REPO_MASTER_DATA} />);
    expect(repoGridComponent).toMatchSnapshot();
  });

  test('renders props data in component', () => {
    const { getByText, getByAltText } = render(<RepositoryCardGrid resultItemsList={REPO_MASTER_DATA} />);
    const languageLabel = getByText('TypeScript');
    expect(getByAltText('rating_image')).toBeDefined();
    expect(languageLabel).toBeInTheDocument();
  });
});
