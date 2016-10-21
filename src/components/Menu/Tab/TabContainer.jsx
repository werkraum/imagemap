var TabContainer = React.createClass({
    render: function () {
        return (
            <div className="tab-container">
                {this.props.children}
            </div>
        )
    }
});
module.exports = TabContainer;