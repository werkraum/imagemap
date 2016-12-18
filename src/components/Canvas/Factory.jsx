import React from "react";
import ReactKonva from "react-konva";

class Factory {
    static createKonvaShape( { element , key } ){
        let shape = (
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
        }
        console.log(shape);
        return shape;
    }
}

export default Factory