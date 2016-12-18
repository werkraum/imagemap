import React from "react";
import ReactKonva from "react-konva";

const createKonvaShape = ({element, key}) => {
    let shape = null;
    switch(element.type) {
        case 'circle':
            shape = (
                <ReactKonva.Layer key={key}>
                    <ReactKonva.Circle
                        x={element.data.x1} y={element.data.y1} radius={element.data.radius}
                        fill="#FFFFFF"
                        stroke="#000000"
                        strokeWidth={2}
                        draggable="true"
                    />
                </ReactKonva.Layer>
            );
            break;
        case 'rectangle':
            shape = (
                <ReactKonva.Layer key={key}>
                    <ReactKonva.Rect
                        x={element.data.x1} y={element.data.y2} width={element.data.x2 - element.data.x1} height={element.data.y2 - element.data.y1}
                        fill="#FF0000"
                        draggable="true"
                    />
                </ReactKonva.Layer>
            );
            break;
        default:
            shape = (
                <ReactKonva.Layer key={key}>
                    <ReactKonva.Circle
                        x={50} y={50} radius={10}
                        fill="#FFFFFF"
                        stroke="#000000"
                        strokeWidth={2}
                        draggable="true"
                    />
                </ReactKonva.Layer>
            );
    }
    return shape;
};

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