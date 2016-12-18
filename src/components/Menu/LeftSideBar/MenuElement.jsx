import React from "react";
import Icon from '../Icon.jsx'
export default class MenuElement extends React.Component{
    propTypes = {
        title: React.PropTypes.string.isRequired,
        description: React.PropTypes.string,
        iconClass: React.PropTypes.string,
        link: React.PropTypes.string
    };
    constructor(){
        super();
        this.state = {isOpen: false};

        this.toggle = this.toggle.bind(this);
    }
    toggle(){
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {
        let toggleArea = '';
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
}