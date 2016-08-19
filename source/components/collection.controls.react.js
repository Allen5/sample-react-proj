// collection control 组件

import React from 'react';
import Button from './button.react';
import Header from './Header.react';
import CollectionRenameForm from './Collection.Rename.Form.react';
import CollectionExportForm from './Collection.Export.Form.react';

class CollectionControls extends React.Component {

  constructor(props) {
	super(props);
	//绑定事件

	this.state = {
	  isEdittingName: false,
	  name: "Default Collection"
	};

	this.getHeaderText = this.getHeaderText.bind(this);
	this.changeCollectionName = this.changeCollectionName.bind(this);
	this.toggleEditCollectorName = this.toggleEditCollectorName.bind(this);
  }

  getHeaderText() {
	let numberOfTweetsInCollection = this.props.numberOfTweetsInCollection;
	let text = numberOfTweetsInCollection;
	if ( numberOfTweetsInCollection == 1 ) {
	  text = text + ' tweet in your';
	} else {
	  text = text + ' tweets in your';
	}

	return (
		<span>
		{text} <strong>{this.state.name}</strong> collection
		</span>
	);
  }

  changeCollectionName(name) {
	this.setState({
	  name: name,
	  isEdittingName: false
	});
  }

  toggleEditCollectorName() {
	this.setState({
	  isEdittingName: !this.state.isEdittingName
	});
  }

  render() {
	  	//编辑视图
  	if ( this.state.isEdittingName ) {
	  return (
		  <CollectionExportForm 
			name={this.state.name}
			onChangeCollectionName={this.changeCollectionName}
			onCancelChangeCollectionName={this.toggleEditCollectionName}
		  />
	  );
  	}

  	//初始视图
  	return (
  		<div>
	  	  <Header text={this.getHeaderText()} />

	  	  <Button
	  	  	label="Rename Collection"
		  	handleClick={this.toggleEditCollectionName}
	  	  />

	  	  <Button
	  	  	label="Empty Collection"
		  	handleClick={this.props.onRemoveAllTweetsFromCollection}
	  	  />
	  	  
	  	  <CollectionExportForm 
	  	  	htmlMarkup={this.props.htmlMarkup}
	  	  	/>

  		</div>
  	);
  }
};

export default CollectionControls;
