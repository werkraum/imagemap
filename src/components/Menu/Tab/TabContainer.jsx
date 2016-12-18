import React from "react";
export default class TabContainer extends React.Component{
    render() {
        return (
            <div className="tab-container">
                {this.props.children}
            </div>
        )
    }
}