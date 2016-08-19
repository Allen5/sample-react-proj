// 推文消息展示组件

import React from 'react';
import Header from './Header.react';
import StreamTweet from './Stream.Tweet.react';
import SnapkiteStreamClient from 'snapkite-stream-client';

class Stream extends React.Component {

  constructor(props) {
	super(props);

	this.state = {
	  tweet: null
	};

	//绑定事件
	this.handleNewTweet = this.handleNewTweet.bind(this);
  }

  componentDidMout() {
	SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  }

  componentWillUnmount() {
	SnapkiteStreamClient.destroyStream();
  }

  handleNewTweet(tweet) {
	this.setState({
	  tweet: tweet
	});
  }

  render() {
	
	let tweet = this.state.tweet;

	if ( tweet ) {
	  return (
		  <StreamTweet
			tweet={ tweet }
			onAddTweetToCollection={ this.props.onAddTweetToCollection }
		  	/>
	  );
	}

	return <Header text="Waiting for public photos from Twitter..." />;
  }
  
};

export default Stream;
