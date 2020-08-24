import React from 'react';

import './repo-card-grid.scss';
import starImage from '../../../images/star.svg';

import { ISearchResultGridGridProps } from '../../../types/types';

class RepositoryCardGrid extends React.Component<ISearchResultGridGridProps> {
  render() {
    return (
      <div className="card-grid-component">
        {this.props.resultItemsList?.map((item) =>
          <div key={item.id} className="card-grid-component__wrapper">
            <div className="card-grid-component__wrapper__title-section">
              <div className="card-grid-component__wrapper__title-section__title">
                <span> Repository Name</span>
                <a target="_blank" href={item.html_url} rel="noopener noreferrer">  {item.name}</a>
              </div>
              <span className="card-grid-component__wrapper__title-section__image">
                <img src={starImage} alt="rating_image" /> {item.stargazers_count}
              </span>
            </div>
            <div className="card-grid-component__wrapper__description">
              <span>Description</span>
              <div>{item.description ? item.description : '-'}</div>
            </div>
            <div className="card-grid-component__wrapper__bottom">
              <div className="author">
                <span>Author</span>
                <a href={item.owner['html_url']} target="_blank" rel="noopener noreferrer">{item.owner['login']}</a>
              </div>
              <div className="language">
                <span>Language</span>
                <div>{item.language}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default RepositoryCardGrid;

