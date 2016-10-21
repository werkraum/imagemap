var TabHeader = React.createClass({
    render: function () {
        return (
            <div className="tab-header">
                {this.props.children}
            </div>
        )
    }
});
module.exports = TabHeader;