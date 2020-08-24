import React from 'react';

import './user-card-grid.scss';

import { ISearchResultGridGridProps } from '../../../types/types';


class UserCardGrid extends React.Component<ISearchResultGridGridProps> {
  render() {
    return (
      <div className="user-card-grid-component">
        {this.props.resultItemsList?.map((item) =>
          <div key={item['id']} className="user-card-grid-component__wrapper">
            <div className="user-card-grid-component__wrapper__title-section">
              <div className="user-card-grid-component__wrapper__title-section__title">
                <span> User Name</span>
                <a target="_blank" href={item.html_url} rel="noopener noreferrer">
                  {item.login}<span className="user-id">({item.id})</span>
                </a>
              </div>
              <div className="user-card-grid-component__wrapper__title-section__image">
                <img src={item['avatar_url']} alt="profle_pic" />
              </div>
            </div>
            <div className="user-card-grid-component__wrapper__more-info">
              <span>More info </span>
              <div className="link-text">
                <a target="_blank" href={item.repos_url} rel="noopener noreferrer">  Click here </a> for repositories
              </div>
              <div className="link-text">
                <a target="_blank" href={item.organizations_url} rel="noopener noreferrer"> Click here </a>for organizations
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default UserCardGrid;
