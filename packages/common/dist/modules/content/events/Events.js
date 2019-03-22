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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var eventsQuery = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject([" query AllEventsQuery ($per:String)\n    { eventsMobile (per: $per)\n        { id title subtitle body imageURL date venue { name address placeID} } \n    }\n"], [" query AllEventsQuery ($per:String)\n    { eventsMobile (per: $per)\n        { id title subtitle body imageURL date venue { name address placeID} } \n    }\n"])));
var styles = react_native_1.StyleSheet.create({
    contentScroll: { flexDirection: 'column', height: '100%', flex: 1 },
    activity: { flexDirection: 'column', flex: 1, height: '100%', justifyContent: 'center' }
});
var EventsComponent = /** @class */ (function (_super) {
    __extends(EventsComponent, _super);
    function EventsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventsComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, pushDetails = _a.pushDetails, _b = _a.per, per = _b === void 0 ? null : _b, _c = _a.headerHeight, headerHeight = _c === void 0 ? 0 : _c;
        return (react_1.default.createElement(react_apollo_1.Query, { query: eventsQuery, variables: { per: per }, errorPolicy: "all" }, function (_a) {
            var loading = _a.loading, data = _a.data, error = _a.error, refetch = _a.refetch;
            if (loading) {
                return (react_1.default.createElement(react_native_1.View, { style: styles.activity },
                    react_1.default.createElement(react_native_1.ActivityIndicator, { size: "small", color: "#C77139" })));
            }
            if (error) {
                console.log('ERROR WHILE FETCHING EVENTS: ', JSON.stringify(error));
                return react_1.default.createElement(react_native_1.View, { style: { marginTop: 50 } },
                    react_1.default.createElement(react_native_1.Text, null, "Lo sentimos, ha ocurrido un error al obtener la informaci\u00F3n..."));
            }
            if (!data.eventsMobile || !data.eventsMobile.length)
                return react_1.default.createElement(react_native_1.Text, null, "No hay eventos que mostrar...");
            if (_this.props.appState) {
                _this.props.appState.addEventListener('change', function (nextState) {
                    if (nextState === 'active') {
                        refetch();
                    }
                });
            }
            var upcoming = data.eventsMobile[0];
            var events = data.eventsMobile.length > 1 ? data.eventsMobile.slice(1) : null;
            if (events)
                return (react_1.default.createElement(react_native_1.View, { style: { width: '100%', height: '100%', borderTopWidth: 1, borderTopColor: 'red' } },
                    react_1.default.createElement(react_native_1.ScrollView, { style: __assign({}, styles.contentScroll, { paddingTop: headerHeight || 0 }) },
                        react_1.default.createElement(UpcomingEventCard_1.UpcomingEventCard, { upcomingEvent: upcoming, pushDetails: pushDetails }),
                        react_1.default.createElement(EventList_1.EventsList, { events: events, pushDetails: pushDetails }))));
        }));
    };
    return EventsComponent;
}(react_1.default.Component));
exports.default = EventsComponent;
var templateObject_1;
