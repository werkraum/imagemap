import React from "react";
export default class Edit extends React.Component{
    render(){
        return (
            <div>
                <p>Rectangle <i>ID</i></p>
                <label> width: </label>
                <div className="input-group">
                    <input type="text" className="form-control"/>
                    <span className="input-group-addon">px</span>
                </div>
                <label> height: </label>
                <div className="input-group">
                    <input type="text" className="form-control"/>
                    <span className="input-group-addon">px</span>
                </div>
                <label> X-Position: </label>
                <div className="input-group">
                    <input type="text" className="form-control"/>
                    <span className="input-group-addon">px</span>
                </div>
                <label> Y-Position: </label>
                <div className="input-group">
                    <input type="text" className="form-control"/>
                    <span className="input-group-addon">px</span>
                </div>
            </div>
        )
    }
}