//collection rename表单组件
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.react';
import Button from './Button.react';

let inputStyle = {
  marginRight: "5px"
};

class CollectionRenameForm extends React.Component {

  constructor(props) {
	super(props);

	this.state = {
	  inputValue: this.props.name
	};

	this.handleFormSubmit = this.handleFormSubmit.bind(this);
	this.handleFormCancel = this.handleFormCancel.bind(this);
	this.setInputValue = this.setInputValue.bind(this);
	this.handleInputValueChange = this.handleInputValueChange.bind(this);
  }

  handleFormSubmit(event) {
	event.preventDefault();
	
	let collectionName = this.state.inputValue;
	this.props.onChangeCollectionName(collectionName);
  }

  handleFormCancel(event) {
	event.preventDefault();

	let collectionName = this.props.name;
	this.setInputValue(collectionName);

	this.props.onCancelChangeCollectionName();
  }

  setInputValue(inputValue) {
	this.setState({
	  inputValue: inputValue
	});
  }

  handleInputValueChange(event) {
	let collectionName = event.target.value;
	this.setInputValue(collectionName);
  }

  componetDidMount() {
	this.refs.collectionName.focus();
  }

  render() {
	return (
		<form className="form-inline" onSubmit={this.handleFormSubmit}>
		
			<Header text="collection name: " />

			<div className="form-group">
				<input 
					className="form-control"
					style="inputStyle"
					onChange={this.handleInputValueChange}
					value={this.state.inputValue}
					ref="collectionName"
					 />
			</div>

			<Button label="Change" handleClick={this.handleFormSubmit} />
			<Button label="Cancel" handleClick={this.handleFormCancel} />

		</form>
	);
  }
};

export default CollectionRenameForm;
