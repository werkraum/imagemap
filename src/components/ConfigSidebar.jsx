import React from "react";
import TabHeader from './Menu/Tab/TabHeader.jsx';
import TabHeaderItem from './Menu/Tab/TabHeaderItem.jsx';
import TabContainer from './Menu/Tab/TabContainer.jsx';
import TabToggle from './Menu/Tab/TabToggle.jsx';
import Edit from './Menu/RightSideBar/Edit.jsx';
import List from './Menu/RightSideBar/List.jsx';
import Settings from './Menu/RightSideBar/Settings.jsx';
import Help from './Menu/RightSideBar/Help.jsx';
import Sidebar from './Menu/Sidebar.jsx';

export default class ConfigSidebar extends Sidebar{
    constructor(){
        super();
        this.state.mode = 0;
    }
    switchToEdit(){
        this.setState({mode: 0});
    }
    switchToList(){
        this.setState({mode: 1});
    }
    switchToSettings(){
        this.setState({mode: 2});
    }
    switchToHelp(){
        this.setState({mode: 3});
    }

    render() {
        var container = <Edit />;
        var tabEdit = <TabHeaderItem active={this.state.mode == 0 ? 'active': ''} iconClass="pencil" handleClick={this.switchToEdit.bind(this)}/>;
        var tabList = <TabHeaderItem active={this.state.mode == 1 ? 'active': ''} iconClass="list" handleClick={this.switchToList.bind(this)}/>;
        var tabSettings = <TabHeaderItem active={this.state.mode == 2 ? 'active': ''} iconClass="cog" handleClick={this.switchToSettings.bind(this)}/>;
        var tabQuestion = <TabHeaderItem active={this.state.mode == 3 ? 'active': ''} iconClass="question" handleClick={this.switchToHelp.bind(this)}/>;
        switch (this.state.mode){
            case 1:
                container = <List />;
                break;
            case 2:
                container = <Settings />;
                break;
            case 3:
                container = <Help />;
                break;
            case -1:
                container = "";
                break;
            default:
                container = <Edit />;
        }
        if(this.state.opened === false){
            container = "";
            tabEdit = "";
            tabList = "";
            tabSettings = "";
            tabQuestion = "";
        }
        return (
            <div className="right-sidebar">
                <TabHeader>
                    {tabEdit}
                    {tabList}
                    {tabSettings}
                    {tabQuestion}
                    <TabToggle direction="left" handleClick={this.closeSidebar}/>
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