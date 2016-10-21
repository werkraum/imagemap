import ShapesSidebar from './components/ShapesSidebar.jsx';
import ConfigSidebar from './components/ConfigSidebar.jsx';
import Canvas from './components/Canvas.jsx';

var App = React.createClass({
    getInitialState: function() {
        return {
            elements: {}
        };
    },
    componentDidMount: function() {
        this.serverRequest = $.getJSON(this.props.source, function (result) {
            console.log(result);
            this.setState({
                elements: result
            });
        }.bind(this));
    },
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    render: function() {
        return (
            <div>
                <ShapesSidebar elements={this.state.elements}></ShapesSidebar>
                <Canvas elements={this.state.elements}></Canvas>
                <ConfigSidebar elements={this.state.elements}></ConfigSidebar>
            </div>
        )
    }
});

ReactDOM.render(
    <App source="API_SRC" />,
    document.getElementById('app')
);
