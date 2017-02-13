import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import ShapesSidebar from './components/ShapesSidebar.jsx';
import ConfigSidebar from './components/ConfigSidebar.jsx';
import Canvas from './components/Canvas/Canvas.jsx';

import ShapeStore from "./components/Canvas/ShapeStore.jsx";

import DevTools from 'mobx-react-devtools';

class App extends React.Component{

    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <ShapesSidebar />
                <Canvas source={this.props.source}/>
                <ConfigSidebar />

                <DevTools position={{right: 285, top: 0}}/>
            </div>
        )
    }
}

require('./Sass/main.scss');

const stores = { ShapeStore };

ReactDOM.render(
    <Provider {...stores}>
        <App source="http://imagemap.werkraum.lan/"/>
    </Provider>,
    document.getElementById('app')
);