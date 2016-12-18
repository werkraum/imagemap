import React from "react";

export default class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            opened : true

        };
        this.closeSidebar = this.closeSidebar.bind(this);
    }
    closeSidebar(){
        this.setState({opened: !this.state.opened});
    }
}