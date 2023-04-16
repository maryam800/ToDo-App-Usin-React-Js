'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            items: [],
            item: ''
        };
        _this.takeUserInput = function (e) {
            _this.setState({
                item: e.target.value
            });
        };
        _this.submitData = function (e) {
            e.preventDefault();
            var newItems = [].concat(_toConsumableArray(_this.state.items), [{
                id: Math.random(),
                itemName: _this.state.item
            }]);
            _this.setState({
                items: newItems,
                item: ''
            });
        };
        _this.deleteItem = function (id) {
            var newItems = [].concat(_toConsumableArray(_this.state.items));
            var afterDelete = newItems.filter(function (item) {
                return item.id != id;
            });
            _this.setState({
                items: afterDelete
            });
        };
        return _this;
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'app' },
                React.createElement(Header, null),
                React.createElement(AddItems, { takeInput: this.takeUserInput, dataSubmited: this.submitData, item: this.state.item }),
                React.createElement(ListItems, { listItems: this.state.items, removedItem: this.deleteItem })
            );
        }
    }]);

    return App;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { className: 'header' },
                'To Do List App Using React Js'
            );
        }
    }]);

    return Header;
}(React.Component);

var AddItems = function (_React$Component3) {
    _inherits(AddItems, _React$Component3);

    function AddItems() {
        _classCallCheck(this, AddItems);

        return _possibleConstructorReturn(this, (AddItems.__proto__ || Object.getPrototypeOf(AddItems)).apply(this, arguments));
    }

    _createClass(AddItems, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'form',
                { onSubmit: this.props.dataSubmited },
                React.createElement('input', { type: 'text', placeholder: 'Type Your Todo', className: 'input', onChange: this.props.takeInput, value: this.props.item }),
                React.createElement('input', { type: 'submit', className: 'Add', value: 'Add' })
            );
        }
    }]);

    return AddItems;
}(React.Component);

var ListItems = function (_React$Component4) {
    _inherits(ListItems, _React$Component4);

    function ListItems() {
        _classCallCheck(this, ListItems);

        return _possibleConstructorReturn(this, (ListItems.__proto__ || Object.getPrototypeOf(ListItems)).apply(this, arguments));
    }

    _createClass(ListItems, [{
        key: 'render',
        value: function render() {
            var _this5 = this;

            return React.createElement(
                'div',
                { className: 'listItems' },
                this.props.listItems.length == 0 && React.createElement(
                    'div',
                    null,
                    'There is no items'
                ),
                this.props.listItems.map(function (item) {
                    return React.createElement(Item, { el: item.itemName, id: item.id, removeItem: _this5.props.removedItem });
                })
            );
        }
    }]);

    return ListItems;
}(React.Component);

var Item = function (_React$Component5) {
    _inherits(Item, _React$Component5);

    function Item() {
        _classCallCheck(this, Item);

        return _possibleConstructorReturn(this, (Item.__proto__ || Object.getPrototypeOf(Item)).apply(this, arguments));
    }

    _createClass(Item, [{
        key: 'render',
        value: function render() {
            var _this7 = this;

            return React.createElement(
                'div',
                { className: 'item' },
                React.createElement(
                    'h4',
                    null,
                    this.props.el
                ),
                React.createElement(
                    'button',
                    { className: 'delete', onClick: function onClick() {
                            return _this7.props.removeItem(_this7.props.id);
                        } },
                    'X'
                )
            );
        }
    }]);

    return Item;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
