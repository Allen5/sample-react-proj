// snap tweet Application 组件

import React from 'react';
import Stream from './Stream.react';
import Collection from './collection.react';

class Application extends React.Component {

  constructor(props) {
	super(props);

	//必须有this.state
	this.state = {
	  collectionTweets: {}
	};

	//设置事件绑定
	this.addTweetToCollection = this.addTweetToCollection.bind(this);
	this.removeTweetFromCollection = this.removeTweetFromCollection.bind(this);
	this.removeAllTweetsFromCollection = this.removeAllTweetsFromCollection.bind(this);
  }

  addTweetToCollection(tweet) {
	let collectionTweets = this.state.collectionTweets;
	collectionTweets[tweet.id] = tweet;
	this.setState({
	  collectionTweets: collectionTweets
	});
  }

  removeTweetFromCollection(tweet) {
	let collectionTweets = this.state.collectionTweets;
	delete collectionTweets[tweet.id];
	this.setState({
	  collectionTweets: collectionTweets
	});
  }

  removeAllTweetsFromCollection() {
	this.setState({
	  collectionTweets: {}
	});
  }

  render() {
	return (
		<div className="container-fluid">
	  		<div className="row">
	  			<div className="col-md-4 text-center">
	  				<Stream
						onAddTweetToCollection={ this.addTweetToCollection }
	  				/>
	  			</div>
				<div className="col-md-8">
					<Collection
						tweets={ this.state.tweets }
						onRemoveTweetFromCollection={ this.removeTweetFromCollection }
						onRemoveAllTweetsFromCollection={ this.removeAllTweetsFromCollection }
					/>
				</div>
	  		</div>
		</div>
	);
  }
  
};

export default Application;
