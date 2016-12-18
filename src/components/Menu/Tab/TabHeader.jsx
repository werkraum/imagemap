import React from "react";
export default class TabHeader extends React.Component{
    render() {
        return (
            <div className="tab-header">
                {this.props.children}
            </div>
        )
    }
}