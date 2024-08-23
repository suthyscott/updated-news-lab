import axios from 'axios';

const initialState = {
  loading: false,
  articles: []
};

const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
const PENDING = 'PENDING'

export const requestArticles = async (dispatch) => {
  dispatch({type: PENDING})
  let articles = await axios.get('/api/hacker-news').then(res => res.data);
  dispatch({ type: REQUEST_ARTICLES, payload: articles })
}

export default function hackerNewsReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING:
      return { ...state, loading: true };
    case REQUEST_ARTICLES:
      return { loading: false, articles: action.payload }
    default:
      return state;
  }
}