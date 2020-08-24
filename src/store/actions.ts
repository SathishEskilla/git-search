import { ISearchResultPayLoad } from "../types/types";

export type Action = { type: 'CACHE_RESULTS', payLoad: ISearchResultPayLoad, mappingKey: string };

export const saveSearchResult = (cacheKey: string, resultPayLoad: ISearchResultPayLoad): Action => ({
    type: 'CACHE_RESULTS',
    payLoad: resultPayLoad,
    mappingKey: cacheKey
});