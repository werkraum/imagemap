var createKonvaShape = function(element, key) {
    var shape;
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

var Canvas = React.createClass({
    render: function () {
        var image = new Image();
        image.src = "API_SRC/react.png";
        var shapes = this.props.elements.shapes;
        if(shapes != undefined) {
            var shapes = shapes.map(function(element, key) {
                return createKonvaShape(element, key);
            });
        }
        return (
            <div className="canvas-wrapper">
                <ReactKonva.Stage width={600} height={300}>
                    <ReactKonva.Layer>
                        <ReactKonva.Image x={0} y={0} width={600} height={300} image={image} />
                    </ReactKonva.Layer>
                    {(shapes != undefined) ? shapes : <ReactKonva.Layer></ReactKonva.Layer>}
                </ReactKonva.Stage>
            </div>
        )
    }
});

module.exports = Canvas;
