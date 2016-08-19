// Tweet 组件

import React from 'react';

let tweetStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '300px',
  height: '400px',
  margin: '10px'
};

let imageStyle = {
  maxHeight: '400px',
  boxShadow: '0px 1px 1px 1px #aaa',
  border: '1px solid #fff'
};

class Tweet extends React.Component {

  constructor(props) {
	super(props);

	//绑定事件
	this.handlerImageClick = this.handleImageClick.bind(this);
  }

  handlerImageClick() {
	let tweet = this.props.tweet;
	let onImageClick = this.props.onImageClick;
	if ( onImageClick ) {
	  onImageClick(tweet);
	}
  }

  render() {
	
	let tweet = this.props.tweet;
	let tweetMediaUrl = tweet.media[0].url;

	return (
		<div style={ tweetStyle }>
			<img src={tweetMediaUrl} onClick={ this.handleImageClick } style={ imageStyle } />
		</div>
	);
  }
  
};

Tweet.propTypes = {

  tweet: ( properties, propertyName, componentName ) => {

	let tweet = properties[propertyName];
	
	if ( !tweet ) {
	  return new Error("Tweet must be set. ");
	}
	
	if ( !tweet.media ) {
	  return new Error("Tweet must have an image");
	}
	
  },
  onImageClick: React.PropTypes.func
};

export default Tweet;
