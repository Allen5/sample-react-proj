//tweet 消息集合组件

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './Collection.Controls.react';
import TweetList from './Tweet.List.react';
import Header from './Header.react';

class Collection extends React.Component {

  constructor(props) {
	super(props);

	//绑定事件
	this.createHtmlMarkupStringOfTweetList = this.createHtmlMarkupStringOfTweetList.bind(this);
	this.getListOfTweetsId = this.getListOfTweetsId.bind(this);
	this.getNumberOfTweetsInCollection = this.getNumberOfTweetsInCollection.bind(this);
  }

  createHtmlMarkupStringOfTweetList() {
	
	let htmlstring = ReactDOMServer.renderToStaticMarkup(
		<TweetList tweets={this.props.tweets} />
	);
	
	let htmlMarkup = {
	  html: htmlstring
	};
	
	return JSON.stringify(htmlMarkup);
	
  }

  getListOfTweetsId() {
	if ( !this.props.tweets ) return [];
	return Object.keys(this.props.tweets);
  }

  getNumberOfTweetsInCollection() {
	return this.getListOfTweetsId().length;
  }

  render() {
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
  
};

export default Collection;
