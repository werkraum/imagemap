import React from "react";
export default class MenuElementList extends React.Component{
    propTypes = {
        children: React.PropTypes.arrayOf(React.PropTypes.element),
        className: React.PropTypes.string.isRequired
    };
    render() {
        return (
            <ul className={this.props.className}>
                {this.props.children}
            </ul>
        )
    }
}