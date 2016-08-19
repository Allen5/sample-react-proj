// header 组件

import React from 'react';

let headerStyle = {
  fontSize: '16px',
  fontWeight: '300',
  display: 'inline-block',
  margin: '20px 10px'
};

class Header extends React.Component {

  constructor(props) {
	super(props);
  }

  render() {
	return <h2 style={headerStyle}>{ this.props.text } </h2>;
  }
  
};

Header.defaultProps = {
  text: 'Default Header'
};

export default Header;
