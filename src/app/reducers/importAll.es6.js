import { models } from '@r/api-client';
import session from './session';
import { apiResponseReducerMaker } from './apiResponseReducer';
import commentsPagesReducer from './commentsPagesReducer';
import postsListsReducer from './postsListsReducer';
import subscribedSubredditsReducer from './subscribedSubredditsReducer';
import themeReducer from './themeReducer';
import collapsedCommentsReducer from './collapsedCommentsReducer';

const { ModelTypes } = models;

// todo, handle the plurarlity in api-client maybe?
const COMMENTS = `${ModelTypes.COMMENT}s`;
const POSTS = `${ModelTypes.POST}s`;
const SUBREDDITS = `${ModelTypes.SUBREDDIT}s`;

export default {
  session,
  commentsPages: commentsPagesReducer,
  postsLists: postsListsReducer,
  [COMMENTS]: apiResponseReducerMaker(COMMENTS),
  [POSTS]: apiResponseReducerMaker(POSTS),
  [SUBREDDITS]: apiResponseReducerMaker(SUBREDDITS),
  subscribedSubreddits: subscribedSubredditsReducer,
  theme: themeReducer,
  collapsedComments: collapsedCommentsReducer,
};
