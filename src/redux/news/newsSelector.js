import {createSelector} from '@reduxjs/toolkit';
const getNews = state => state.news.fetchNews

const getVisibleNews = createSelector(
    [getNews],
    (items)=>{
        return items
});

export default {
    getNews,
    getVisibleNews
}