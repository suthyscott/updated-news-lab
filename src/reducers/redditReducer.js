import axios from 'axios';

const initialState = {
  loading: false,
  articles: []
};

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const PENDING = 'PENDING';

export const requestArticles = async (dispatch) => {
  console.log('hit requestArticles')
  dispatch({type: PENDING})
  console.log('fired')
  let articles = await axios.get('/api/reddit').then(res => {
    console.log('res')
    return res.data
  });
  console.log(articles)
  dispatch({ type: REQUEST_ARTICLES, payload: articles })
}

export default function redditReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true };
    case REQUEST_ARTICLES:
      return { loading: false, articles: action.payload }
    default:
      return state;
  }
}