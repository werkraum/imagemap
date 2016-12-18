import React from "react";
import MenuElement from './MenuElement.jsx';
import MenuElementList from './MenuElementList.jsx';
const shapes = [
    {title:'Rect', description:'null', iconClass:'square', short:''},
    {title:'Circle', description:'null', iconClass:'circle-o', short:''},
    {title:'Ellipse', description:'null', iconClass:'circle-o', short:''},
    {title:'Wedge', description:'null', iconClass:'caret-up', short:''},
    {title:'Line', description:'null', iconClass:'pencil', short:''},
    {title:'Sprite', description:'null', iconClass:'picture-o', short:''},
    {title:'Image', description:'null', iconClass:'picture-o', short:''},
    {title:'Text', description:'null', iconClass:'font', short:''},
    {title:'TextPath', description:'null', iconClass:'text-width', short:''},
    {title:'Star', description:'null', iconClass:'star', short:''},
    {title:'Ring', description:'null', iconClass:'square-o', short:''},
    {title:'Arc', description:'null', iconClass:'', short:''},
    {title:'Tag', description:'null', iconClass:'tag', short:''},
    {title:'Path', description:'null', iconClass:'', short:''},
    {title:'Polygon', description:'null', iconClass:'', short:''},
    {title:'Arrow', description:'null', iconClass:'arrows', short:''},
    {title:'Shape', description:'null', iconClass:'', short:''},
];

export default class NewElements extends React.Component{
    render() {
        return (
            <MenuElementList className="new-elements">
                {shapes.map(function (item, i) {
                  return(
                      <li key={i}>
                        <MenuElement title={item.title} description={item.description} link={item.short} iconClass={item.iconClass}/>
                      </li>
                  )
                })}
            </MenuElementList>
        )
    }
}