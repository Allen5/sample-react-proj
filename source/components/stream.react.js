// 推文消息展示组件

import React from 'react';
import Header from './header.react';
import StreamTweet from './streamtweet.react';
import SnapkiteStreamClient from 'snapkit-stream-client';

let stream = React.createClass({

  getInitialState: () => {
	return {
	  tweet: null
	};
  },

  componentDidMount: () => {
	SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  },

  componentWillUnmount: () => {
	SnapkiteStreamClient.destroyStream();
  },

  handleNewTweet: (tweet) => {
	this.setState({
	  tweet: tweet
	});
  },

  render: () => {

	let tweet = this.state.tweet;

	if ( tweet ) {
	  return (
		  <StreamTweet
			tweet={ tweet }
			onAddTweetToCollection={ this.props.addTweetToCollection }
		  	/>
	  );
	}

	return <Header text="Waiting for public photos from Twitter..." />;
  }
  
});

module.exports = stream;
