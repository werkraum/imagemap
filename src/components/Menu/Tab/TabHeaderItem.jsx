import React from "react";
import Icon from '../Icon.jsx';

export default class TabHeaderItem extends React.Component{
    render() {
        return (
            <div className={"tab-header-item "+ this.props.active} onClick={this.props.handleClick}>
                <Icon iconClass={this.props.iconClass}/>
            </div>
        )
    }
}
TabHeaderItem.propTypes = {
    iconClass: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func.isRequired,
    active: React.PropTypes.string.isRequired
};