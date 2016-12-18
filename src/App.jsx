import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

import ShapesSidebar from './components/ShapesSidebar.jsx';
import ConfigSidebar from './components/ConfigSidebar.jsx';
import Canvas from './components/Canvas/Canvas.jsx';

class App extends React.Component{

    constructor(){
        super();
        this.state = {elements : {}, currentElement: 0};
    }

    handleElementChange(e) {
        this.setState({currentElement:1});
    }

    componentDidMount() {
        this.serverRequest = $.getJSON(this.props.source, function (result) {
            console.log(result);
            this.setState({
                elements: result
            });
        }.bind(this));
    }

    componentWillUnmount() {
        this.serverRequest.abort();
    }

    render() {
        return (
            <div>
                <ShapesSidebar elements={this.state.elements} onChangeHandler={this.handleElementChange.bind(this)}/>
                <Canvas elements={this.state.elements}/>
                <ConfigSidebar elements={this.state.elements}/>
            </div>
        )
    }
}

require('./Sass/main.scss');

ReactDOM.render(
    <App source="http://imagemap.werkraum.lan/"/>,
    document.getElementById('app')
);
