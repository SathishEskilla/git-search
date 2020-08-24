import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

// import assets here
import gitHubLogo from '../../images/github.svg';
import './app.scss';

// import custom components here
import RepositoryCardGrid from '../common/repo-card-grid/repo-card-grid';
import UserCardGrid from '../common/user-card-grid/user-card-grid';

// import models/interfaces here
import { saveSearchResult } from '../../store/actions';
import { IResultComponentState } from '../../types/types';

export class App extends React.Component<any, IResultComponentState> {
  constructor(props: any) {
    super(props);
    this.state = { selectedEntityType: '', searchQuery: '', showResultsComponent: false };
    this.handleChange = this.handleChange.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);

    // call the getSearchResults() with specified time delay
    this.getSearchResults = debounce(this.getSearchResults, 1000)
  }

  /**
   * @methodName handleChange
   * @description It'll update the state with input controls latest value
   * @param event<ChangeEvent>
   * @return none
   */
  async handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    await this.setState({ [event.target.name]: event.target.value, showResultsComponent: false, resultItemsList: [] });
    if (this.state.selectedEntityType && this.state.searchQuery && this.state.searchQuery.length > 2) {
      this.getSearchResults();
    }
  }

  /**
   * @methodName getSearchResults
   * @description if the query is already cached data will load from 
   * sessionStorage else it'll call fetchResultsFromServer method
   * @param none
   * @return none
   */
  async getSearchResults() {
    const DOMAIN = 'https://api.github.com';
    const SEARCH_URL = `${DOMAIN}/search/${this.state.selectedEntityType}?q=${this.state.searchQuery}`;
    let sessionStorageObj: any = sessionStorage.getItem('persist:searchResults');
    sessionStorageObj = JSON.parse(sessionStorageObj);
    if (sessionStorageObj && sessionStorageObj[SEARCH_URL]) {
      await this.setState({ showResultsComponent: true, resultItemsList: JSON.parse(sessionStorageObj[SEARCH_URL]) });
    } else {
      this.fetchResultsFromServer(SEARCH_URL);
    }
  }

  /**
   * @methodName fetchResultsFromServer
   * @description used to fetch search query results from sever
   * @param searchURL<string>
   * @return none
   */
  fetchResultsFromServer(searchURL: string): void {
    fetch(searchURL)
      .then(res => res.json())
      .then(
        async (result) => {
          await this.setState({ showResultsComponent: true, resultItemsList: result.items });
          this.props.disptchAction(searchURL, result.items);
        })
  }

  render() {
    return (
      <div className={"search-component " + (this.state.showResultsComponent ? 'show-card-grid-component' : '')}>
        <div className="search-component__title-wrapper">
          <img src={gitHubLogo} alt="git_image" />
          <div className="search-component__title-wrapper__text-wrapper">
            <h1>GitHub Searcher</h1>
            <span>Search Users or repositories below</span>
          </div>
        </div>

        {/* input controls code starts here */}
        <form className="search-component__input-wrapper">
          <input value={this.state.searchQuery} type="text" name="searchQuery" placeholder="Start typing to search .." onChange={this.handleChange} autoComplete="off" />
          <select value={this.state.selectedEntityType} name="selectedEntityType" onChange={this.handleChange}>
            <option value="">Select</option>
            <option value="repositories">Repositories</option>
            <option value="users">Users</option>
          </select>
        </form>

        {/* repository results grid */}
        {this.state.showResultsComponent && this.state.resultItemsList?.length && this.state.selectedEntityType === 'repositories' && (
          <RepositoryCardGrid resultItemsList={this.state.resultItemsList} />
        )}
        {/* users results grid */}
        {this.state.showResultsComponent && this.state.resultItemsList?.length && this.state.selectedEntityType === 'users' && (
          <UserCardGrid resultItemsList={this.state.resultItemsList} />
        )}
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch: any) => {
  return {
    disptchAction: (cacheKey: string, payLoad: any) => dispatch(saveSearchResult(cacheKey, payLoad))
  };
};

export default connect(null, mapDispatchToProps)(App);
