import { configureStore } from '@reduxjs/toolkit'
import hackerNewsReducer from './reducers/hackerNewsReducer.js'
import mediumReducer from './reducers/mediumReducer.js'
import redditReducer from './reducers/redditReducer.js'

// this function creates the store and we pass our root reducer to it
export default configureStore({
  reducer: {
    hackerNews: hackerNewsReducer,
    medium: mediumReducer,
    reddit: redditReducer
  }
})