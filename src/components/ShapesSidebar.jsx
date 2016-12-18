import React from "react";
import NewElements from './Menu/LeftSideBar/NewElements.jsx';
import CurrentElements from './Menu/LeftSideBar/CurrentElements.jsx';
import TabHeader from './Menu/Tab/TabHeader.jsx';
import TabHeaderItem from './Menu/Tab/TabHeaderItem.jsx';
import TabContainer from './Menu/Tab/TabContainer.jsx';
import TabToggle from './Menu/Tab/TabToggle.jsx';
import Sidebar from './Menu/Sidebar.jsx';

export default class ShapesSidebar extends Sidebar{
    constructor(){
        super();
        this.state.mode = 0;
    }
    switchToNewTab(){
        this.setState({mode: 1});
    }
    switchToCurrentTab(){
        this.setState({mode: 0});
    }
    render(){

        var container = <NewElements />;
        var tabNew = <TabHeaderItem active={this.state.mode == 1 ? 'active': ''} iconClass="plus" handleClick={this.switchToNewTab.bind(this)}/>;
        var tabCurrent = <TabHeaderItem active={this.state.mode == 0 ? 'active': ''} iconClass="list-ul" handleClick={this.switchToCurrentTab.bind(this)}/>;

        if(this.state.mode == 0){
            container = <CurrentElements />;
        }
        if(this.state.opened === false){
            container = "";
            tabCurrent = "";
            tabNew = "";
        }

        return (
            <div className="left-sidebar">
                <TabHeader>
                    {tabNew}
                    {tabCurrent}
                    <TabToggle direction="right" handleClick={this.closeSidebar.bind(this)}/>
                </TabHeader>
                {(() =>{
                    if(this.state.opened){
                        return (
                            <TabContainer>
                                {container}
                            </TabContainer>
                        )
                    }
                })()}
            </div>
        )
    }
}