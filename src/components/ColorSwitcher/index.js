import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ColorSwitcher extends Component {
	constructor(props) {
		super();

		this.toggle = this.toggle.bind(this);
		this.changeThemeColor = this.changeThemeColor.bind(this);
		this.addEvents = this.addEvents.bind(this);
		this.removeEvents = this.removeEvents.bind(this);
		this.handleDocumentClick = this.handleDocumentClick.bind(this);
		this.getContainer = this.getContainer.bind(this);

		this.state = {
			isOpen: false,
			selectedColor:localStorage.getItem('themeColor')
		};
	}

	getContainer() {
		return ReactDOM.findDOMNode(this);
	}

	toggle(e) {
		e.preventDefault();
		const isOpen = this.state.isOpen;
		if (!isOpen) {
			this.addEvents();
		} else {
			this.removeEvents();
		}
		this.setState({
			isOpen: !isOpen
		})
	}
	changeThemeColor(e, color) {
		e.preventDefault();
		localStorage.setItem('themeColor', color)
		this.toggle(e);
		setTimeout(()=>{
			window.location.reload();
		},500)
	}

	componentWillMount() {
		this.removeEvents();
	}


	addEvents() {
		['click', 'touchstart'].forEach(event =>
			document.addEventListener(event, this.handleDocumentClick, true)
		);
	}
	removeEvents() {
		['click', 'touchstart'].forEach(event =>
			document.removeEventListener(event, this.handleDocumentClick, true)
		);
	}

	handleDocumentClick(e) {
		const container = this.getContainer();
		if ((container.contains(e.target) || container === e.target)) {
			return;
		}
		this.toggle(e);
	}

	render() {
		const selectedColor = this.state.selectedColor
		return (
			<div></div>
		);
	}
}

export default ColorSwitcher;
