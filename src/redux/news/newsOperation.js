import axios from 'axios';
import newsAction  from './newsAction';


const fetchNewsArr = () => dispatch => {
dispatch(newsAction.newsFetchRequest());

axios
    .get('http://newsapi.org/v2/top-headlines?country=us&apiKey=bcaafe07bfdc4ea5885fe47775020d18')
            .then(response => dispatch(newsAction.newsFetchSuccess(response.data.articles)))
            .catch(error => dispatch(newsAction.fetchItemError(error)))
}

export default {
    fetchNewsArr,
}