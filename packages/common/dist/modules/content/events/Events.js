"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_native_1 = require("react-native");
var EventList_1 = require("./EventList");
var UpcomingEventCard_1 = require("./UpcomingEventCard");
var eventsQuery = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject([" query AllEventsQuery { events { id title subtitle body imageURL date venue { name address placeID} } } "], [" query AllEventsQuery { events { id title subtitle body imageURL date venue { name address placeID} } } "])));
var styles = react_native_1.StyleSheet.create({
    contentScroll: {
        flexDirection: 'column', height: '100%', flex: 1
    }
});
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pushDetails = function (id, title) {
            if (_this.props.navigation) {
                _this.props.navigation.push('EventDetails', { id: id, title: title });
            }
            else if (_this.props.history) {
                _this.props.history.push("/event/" + id);
            }
        };
        return _this;
    }
    Events.prototype.render = function () {
        var _this = this;
        return (react_1.default.createElement(react_apollo_1.Query, { query: eventsQuery }, function (_a) {
            var loading = _a.loading, data = _a.data, error = _a.error;
            if (loading) {
                return react_1.default.createElement(react_native_1.Text, { style: { marginTop: 100 } }, "Loading");
            }
            if (!data.events.length)
                return react_1.default.createElement(react_native_1.Text, null, "No hay eventos que mostrar...");
            if (error) {
                console.log('ERROR: ', error);
            }
            var upcoming = data.events[0];
            var events = data.events.length > 1 ? data.events.slice(1) : null;
            if (events)
                return (react_1.default.createElement(react_native_1.View, { style: { width: '100%', height: '100%' } },
                    react_1.default.createElement(react_native_1.ScrollView, { style: styles.contentScroll },
                        react_1.default.createElement(UpcomingEventCard_1.UpcomingEventCard, { upcomingEvent: upcoming, pushDetails: _this.pushDetails }),
                        react_1.default.createElement(EventList_1.EventsList, { events: events, pushDetails: _this.pushDetails }))));
        }));
    };
    Events.navigationOptions = {
        title: 'Eventos',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    };
    return Events;
}(react_1.default.Component));
exports.default = Events;
var templateObject_1;
