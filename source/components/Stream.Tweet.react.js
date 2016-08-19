//显示实时推文的组件

import React from 'react';
import Header from './header.react';
import Tweet from './tweet.react';

class StreamTweet extends React.Component {

  constructor(props) {
	super(props);

	this.state = {
	  headerText: "",
	  numberOfCharactersIsIncreasing: false
	};
  }

  componentWillMount() {
	this.setState({
	  headerText: "Last Tweet Photos",
	  numberOfCharactersIsIncreasing: true	  
	});
  }

  render() {
	return (
		<section>
			<Header text={ this.state.headerText } />
			<Tweet
				tweet={ this.props.tweet }
				onImageClick={ this.props.onAddTweetToCollection }
				/>
		</section>);
  }
  
};

export default StreamTweet;
