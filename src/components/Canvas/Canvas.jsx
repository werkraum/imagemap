import React from "react";
import ReactKonva from "react-konva";
import { createKonvaShape } from "./Factory.jsx";


export default class Canvas extends React.Component{
    render() {
        let image = new Image();
        image.src = "http://imagemap.werkraum.lan/react.png";
        let shapes = this.props.elements.shapes;
        if(shapes != undefined) {
            shapes = shapes.map((element, key) => {
                return createKonvaShape({element: element, key: key});
            });
        }
        return (
            <div className="canvas">
                <ReactKonva.Stage width={600} height={300}>
                    <ReactKonva.Layer>
                        <ReactKonva.Image x={0} y={0} width={600} height={300} image={image} />
                    </ReactKonva.Layer>
                    {(shapes != undefined) ? shapes : <ReactKonva.Layer/>}
                </ReactKonva.Stage>
            </div>
        )
    }
}