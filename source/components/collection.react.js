//tweet 消息集合组件

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './collection.controls.react';
import TweetList from './tweet.list.react';
import Header from './header.react';

let collection = React.createClass({

  //创建导出的html标签
  createHtmlMarkupStringOfTweetList: () => {
	let htmlstring = ReactDOMServer.renderToStaticMarkup(
		<TweetList tweets={this.props.tweets} />
	);

	let htmlMarkup = {
	  html: htmlstring
	};
	return JSON.sringify(htmlMarkup);
  },

  getListOfTweetsId: () => {
	return Object.keys(this.props.tweets);
  },

  //获取推文个数
  getNumberOfTweetsInCollection: () => {
	return this.getListOfTweetsId().length;
  },

  render: () => {

	let numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

	if ( numberOfTweetsInCollection > 0 ) {

	  let htmlMarkup = this.createHtmlMarkupStringOfTweetList();
	  return (
		<div>
			<CollectionControls
				numberOfTweetsInCollection={numberOfTweetsInCollection}
				htmlMarkup={htmlMarkup}
				onRemoveAllTweetsFromCollection={this.props.removeAllTweetsFromCollection } />

			<TweetList 
				tweets={this.props.tweets}
				removeTweetFromCollection={this.props.removeTweetFromCollection}
				/>				
		</div>
	  );
	}

	return <Header text="Your collection is empty!" />;
  }

});

module.exports = collection;
