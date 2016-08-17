//显示实时推文的组件

import React from 'react';
import Header from './header.react';
import Tweet from './tweet.react';

let component = React.createClass({

  getInitialState: () => {
	return {
	  headerText: "",
	  numberOfCharactersIsIncreasing: false
	};
  },

  componentWillMount: () => {
	this.setState({
	  numberOfCharactersIsIncreasing: true,
	  headerText: "Last tweet photos"
	});
  },

  render: () => {

	return (
		<section>
			<Header text={ this.state.headerText } />
			<Tweet
				tweet={ this.props.tweet }
				onImageClick={ this.props.addTweetToCollection }
				/>
		</section>
	);
	
  }
  
});

module.exports = component;
