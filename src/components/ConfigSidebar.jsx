import TabHeader from './Menu/Tab/TabHeader.jsx';
import TabHeaderItem from './Menu/Tab/TabHeaderItem.jsx';
import TabContainer from './Menu/Tab/TabContainer.jsx';
import Edit from './Menu/RightSideBar/Edit.jsx';
import List from './Menu/RightSideBar/List.jsx';
import Settings from './Menu/RightSideBar/Settings.jsx';
import Help from './Menu/RightSideBar/Help.jsx';

var ConfigSidebar = React.createClass({
    getInitialState: function(){
        return {mode: 0}
    },
    switchToEdit: function(){
        this.setState({mode: 0});
    },
    switchToList: function(){
        this.setState({mode: 1});
    },
    switchToSettings: function(){
        this.setState({mode: 2});
    },
    switchToHelp: function(){
        this.setState({mode: 3});
    },
    render: function () {
        var container = <Edit />;
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
            default:
                container = <Edit />;
        }
        return (
            <div className="right-sidebar">
                <TabHeader>
                    <TabHeaderItem active={this.state.mode == 0 ? 'active': ''} iconClass="pencil" handleClick={this.switchToEdit}/>
                    <TabHeaderItem active={this.state.mode == 1 ? 'active': ''} iconClass="list" handleClick={this.switchToList}/>
                    <TabHeaderItem active={this.state.mode == 2 ? 'active': ''} iconClass="cog" handleClick={this.switchToSettings}/>
                    <TabHeaderItem active={this.state.mode == 3 ? 'active': ''} iconClass="question" handleClick={this.switchToHelp}/>
                </TabHeader>
                <TabContainer>
                    {container}
                </TabContainer>
            </div>
        )
    }
});

module.exports = ConfigSidebar;