var MenuElementList = React.createClass({
    propTypes:{
        children: React.PropTypes.arrayOf(React.PropTypes.element),
        className: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <ul className={this.props.className}>
                {this.props.children}
            </ul>
        )
    }
});
module.exports = MenuElementList;