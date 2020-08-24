export interface IResultComponentState {
    selectedEntityType?: string;
    searchQuery?: string;
    showResultsComponent?: boolean;
    resultItemsList?: []
}

export interface ISearchResultPayLoad {
    html_url: string;
    avatar_url: string;
    repos_url: string;
    organizations_url: string;
    login: string;
    id: string;
    stargazers_count: string;
    name: string;
    description: string;
    language: string;
    owner: {
        login: string;
        html_url: string
    }
}

export interface ISearchResultGridGridProps {
    selectedEntityType?: string;
    resultItemsList?: ISearchResultPayLoad[]
}