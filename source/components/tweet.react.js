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

let tweet = React.createClass({

  //验证必须传入props的参数
  propTypes: {

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
	
  },

  //处理图片点击事件
  handleImageClick: () => {
	let tweet = this.props.tweet;
	let onImageClick = this.props.onImageClick;
	if ( onImageClick ) {
	  onImageClick(tweet);
	}
  },

  //渲染
  render: () => {
	
	let tweet = this.props.tweet;
	let tweetMediaUrl = tweet.media[0].url;

	return (
		<div style={ tweetStyle }>
			<img src={tweetMediaUrl} onClick={ this.handleImageClick } style={ imageStyle } />
		</div>
	);
  }
  
});

module.exports = tweet;
