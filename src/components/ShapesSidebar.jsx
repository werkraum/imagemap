import NewElements from './Menu/LeftSideBar/NewElements.jsx';
import CurrentElements from './Menu/LeftSideBar/CurrentElements.jsx';
import TabHeader from './Menu/Tab/TabHeader.jsx';
import TabHeaderItem from './Menu/Tab/TabHeaderItem.jsx';
import TabContainer from './Menu/Tab/TabContainer.jsx';


var ShapesSidebar = React.createClass({
    getInitialState: function(){
      return {mode: 0}
    },
    switchToNewTab: function(){
        this.setState({mode: 1});
    },
    switchToCurrentTab: function(){
        this.setState({mode: 0});
    },
    render: function () {
        var list = <NewElements />;
        if(this.state.mode == 0){
            list = <CurrentElements />;
        }
        return (
            <div className="left-sidebar">
                <TabHeader>
                    <TabHeaderItem active={this.state.mode == 1 ? 'active': ''} iconClass="plus" handleClick={this.switchToNewTab}/>
                    <TabHeaderItem active={this.state.mode == 0 ? 'active': ''} iconClass="list-ul" handleClick={this.switchToCurrentTab}/>
                </TabHeader>
                <TabContainer>
                    {list}
                </TabContainer>
            </div>
        )
    }
});

module.exports = ShapesSidebar;