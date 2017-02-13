import React from "react";

export default class Icon extends React.Component{
    render() {
        return (
            <i className={'fa fa-' + this.props.iconClass} onClick={this.props.handleClick}/>
        )
    }
}
Icon.PropTypes = {
    iconClass: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func
};