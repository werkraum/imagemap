var Icon = React.createClass({
    propTypes: {
        iconClass: React.PropTypes.string.isRequired,
        handleClick: React.PropTypes.func
    },
    render: function () {
        return (
            <i className={'fa fa-' + this.props.iconClass} onClick={this.props.handleClick}/>
        )
    }
});

module.exports = Icon;