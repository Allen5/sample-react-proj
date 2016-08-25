//react actions

import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

//选中subreddit
export function selectSubreddit(subreddit) {
  return {
	type: SELECT_SUBREDDIT,
	subreddit
  };
};


//刷新subreddit
export function invalidateSubreddit(subreddit) {
  return {
	type: INVALIDATE_SUBREDDIT,
	subreddit
  };
};

//发起请求 subreddit
export function requestPosts(subreddit) {
  return {
	type: REQUEST_POSTS,
	subreddit
  };
};

//接受 subreddit 数据
export function receivePosts(subreddit, json) {
  return {
	type: RECEIVE_POSTS,
	subreddit,
	posts: json.data.children.map(child => child.data),
	receivedAt: Date.now()
  };
};

//获取subreddit 数据
export function fetchPosts(subreddit) {
  return dispatch => {
	dispatch(requestPosts(subreddit));
	return fetch(`http://www.subreddit.com/r/${subreddit}.json`)
	  .then(response => response.json)
	  .then(json => dispatch(receivePosts(subreddit, json)));
  };
};

function shouldFetchPosts(state, subreddit) {
  const posts = state.postBySubreddit[subreddit];
  if ( !posts ) {
	return true;
  } else if ( posts.isFetching ) {
	return false;
  } else {
	return false;
  }
};

//仅当需要的时候才获取subreddit数据
export function fetchPostsIfNeeded(subreddit) {
  return (dispatch, getState) => {
	if ( shouldFetchPosts(getState(), subreddit)) {
	  return dispatch(fetchPosts(subreddit));
	}
	return null;
  };
};

