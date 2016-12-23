import React from "react";
import TabHeaderItem from './TabHeaderItem.jsx';

export default class TabToggle extends React.Component{
    state = {
        active: false,
    };
    handleClick(){
        this.setState({active: !this.state.active});
        this.props.handleClick();
    }
    render() {
        const direction = this.props.direction;
        const opened = direction == "left" ? 'left' : 'right';
        const closed = direction == "left" ? 'right' : 'left';
        return (
            <TabHeaderItem active={this.state.active ? 'active': ''} iconClass={this.state.active ? "chevron-"+opened : "chevron-"+closed} handleClick={this.handleClick.bind(this)}/>
        )
    }
}
TabToggle.propTypes = {
    direction: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func.isRequired
};