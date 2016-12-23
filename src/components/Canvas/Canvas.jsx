import React from "react";
import ReactKonva from "react-konva";
import Factory from "./Factory.jsx";
import {observer, inject} from "mobx-react";

@inject('ShapeStore')@observer
export default class Canvas extends React.Component {

    componentDidMount() {
        if(this.props.store.isLoading)
            this.props.store.loadShapes(this.props.source);
    }
    render() {
        let image = new Image();
        image.src = "http://imagemap.werkraum.lan/react.png";
        let elements = this.props.store.shapes;

        let shapes = this.props.store.isLoading === true
                            ? <ReactKonva.Layer/>
                            : elements.map(function (element, key){return Factory.createKonvaShape({element: element, key: key})} );
        return (
            <div className="canvas">
                <ReactKonva.Stage width={600} height={300}>
                    <ReactKonva.Layer>
                        <ReactKonva.Image x={0} y={0} width={600} height={300} image={image}/>
                    </ReactKonva.Layer>
                    { shapes }
                </ReactKonva.Stage>
                {this.props.store.isLoading ? <div>... loading Shapes</div> : ''}
                <div>Anzahl Shapes: {this.props.store.counter} </div>
            </div>
        )
    }
}