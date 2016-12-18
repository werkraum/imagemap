import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import ShapesSidebar from './components/ShapesSidebar.jsx';
import ConfigSidebar from './components/ConfigSidebar.jsx';
import Canvas from './components/Canvas/Canvas.jsx';

import ShapeStore from "./components/Canvas/ShapeStore.jsx";

class App extends React.Component{

    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <ShapesSidebar />

                <Canvas store={ShapeStore} source={this.props.source}/>

                <ConfigSidebar />
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