//collection rename表单组件
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header.react';
import Button from './button.react';

let collectionRenameForm = React.createClass({

  render: ()=> {
	return (
			<form className="form-inline" onSubmit={this.handleFormSubmit}>

				<Header text="collection name: " />

				<div className="form-group">
					<input 
						className="form-control"
						style="inputStyle"
						onChange={this.handleInputValueChange}
						value={this.state.name}
						ref="collectionName"
						 />
				</div>

				<Button label="Change" handleClick={this.handleFormSubmit} />
				<Button label="Cancel" handleClick={this.handleFormCancel} />

			</form>
		);
  }
  
});

module.exports = collectionRenameForm;


