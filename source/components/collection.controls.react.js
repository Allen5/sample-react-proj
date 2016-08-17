// collection control 组件

import React from 'react';
import Button from './button.react';
import Header from './header.react';
import CollectionRenameForm from './collection.rename.form.react';
import CollectionExportForm from './collection.export.form.react';

let collectionControls = React.createClass({

  getInitialState: () => {
	return {
	  isEdittingName: false,
	  name: "Default Collection"
	};
  },

  //获取header的文本显示
  getHeaderText: () => {
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
  },

  changeCollectionName: (name) => {
	this.setState({
	  name: name,
	  isEdittingName: false
	});
  },

  toggleEditCollectionName: () => {
	this.setState({
	  isEdittingName: !this.state.isEdittingName
	});
  },

  render: () => {

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

});

module.exports = collectionControls;
