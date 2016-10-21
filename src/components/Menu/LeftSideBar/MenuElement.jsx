import Icon from '../Icon.jsx'
var MenuElement = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string,
        iconClass: React.PropTypes.string,
        link: React.PropTypes.string
    },
    getInitialState: function(){
      return {isOpen: false}
    },
    toggle: function(){
        this.setState({isOpen: !this.state.isOpen});
    },
    render: function () {
        var toggleArea = '';
        if(this.state.isOpen){
            toggleArea = <div className="menu-element-desc"><p>{this.props.description}</p></div>;
        }
        return (
            <div className="menu-element">
                <div className="menu-element-short">
                    <div className="menu-element-icon">
                        <Icon iconClass={this.props.iconClass}/>
                    </div>
                    <div className="menu-element-title">
                        <h4>{this.props.title}</h4>
                        <p>{this.props.link}</p>
                        <Icon iconClass={this.state.isOpen ? 'angle-down':'angle-up'} handleClick={this.toggle}/>
                    </div>
                </div>
                {toggleArea}
            </div>
        )
    }
});
module.exports = MenuElement;