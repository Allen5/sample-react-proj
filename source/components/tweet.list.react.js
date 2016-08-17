// tweetlist 组件
import React from 'react';
import Tweet from './tweet.react';

let listItemStyle = {
  display: 'inline-block',
  listStyle: 'none'
};

let listStyle = {
  padding: '0'
};

let tweetList = React.createClass({

  getListOfTweetIds: () => {
	return Object.keys(this.props.tweets);
  },

  getTweetElement: (tweetId) => {

	let tweet = this.props.tweets[tweetId];

	let element;
	if ( this.props.onRemoveTweetFromCollection ) {
	  element = (
		  <Tweet
		  	tweet={ tweet }
		  	onImageClick={this.props.onRemoveTweetFromCollection}
		  	/>
	  );
	} else {
	  element = (
		<Tweet 
			tweet={ tweet } />
	  );
	}

	return <li style="listItemStyle" key={tweet.id}>{element}</li>;
  },

  render: ()=> {
  	let tweetsElements = this.getListOfTweetIds().map(this.getTweetElement);
	return (
	  <ul style={listStyle}>
	  	{tweetsElements}
	  </ul>
	);
  }

});

module.eports = tweetList;
