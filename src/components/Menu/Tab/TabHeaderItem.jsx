import Icon from '../Icon.jsx';

var TabHeaderItem = React.createClass({
    propTypes: {
        iconClass: React.PropTypes.string.isRequired,
        handleClick: React.PropTypes.func.isRequired,
        active: React.PropTypes.string.isRequired
    },
    render: function () {
        return (
            <div className={"tab-header-item "+ this.props.active} onClick={this.props.handleClick}>
                <Icon iconClass={this.props.iconClass}/>
            </div>
        )
    }
});
module.exports = TabHeaderItem;