import React from 'react';
import { render } from '@testing-library/react';
import UserCardGrid from './user-card-grid';

const USERS_MASTER_DATA: any = [{
  repos_url: "https://api.github.com/users/sahat/repos",
  html_url: "https://github.com/sahat/satellizer",
  avatar_url: "https://avatars2.githubusercontent.com/u/1174278?v=4",
  name: "Sathish",
  id: 2345678,
  organizations_url: "https://api.github.com/users/satya164/orgs"
}];

describe('testing <UserCardGrid>', () => {
  test('renders correctly', () => {
    const usersGridComponent = render(<UserCardGrid resultItemsList={USERS_MASTER_DATA} />);
    expect(usersGridComponent).toMatchSnapshot();
  });

  test('checking profile pic in component', () => {
    const { getByAltText } = render(<UserCardGrid resultItemsList={USERS_MASTER_DATA} />);
    expect(getByAltText('profle_pic')).toBeDefined();
  });

  test('checking props data in component', () => {
    const { getByText } = render(<UserCardGrid resultItemsList={USERS_MASTER_DATA} />);
    expect(getByText('More info')).toBeInTheDocument();
  });
});
