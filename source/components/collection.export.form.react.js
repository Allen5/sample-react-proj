//collection export form 组件

import React from 'react';

let formStyle = {
  display:"inline-block"
};

class CollectionExportForm extends React.Component {

  constructor(props) {
	super(props);
  }

  render() {
	return (
		<form action="http://codepen.io/pen/define" method="POST" target="_blank" style="formStyle">
			<input type="hidden" name="data" value={this.props.htmlMarkup} />
			<button type="submit" className="btn btn-default">Export as HTML</button>
		</form>
	);
  }
  
};

export default CollectionExportForm;
