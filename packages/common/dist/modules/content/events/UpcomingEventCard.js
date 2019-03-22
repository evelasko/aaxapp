"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    upcomingEventCard: {
        flexDirection: 'column', marginBottom: 20,
    },
    upcomingEventCardHeader: {
        color: "#EB894A", fontWeight: 'bold', fontSize: 24, textTransform: 'uppercase',
        margin: 20
    },
    upcomingEventCardImage: {
        width: '100%', height: 206
    },
    upcomingEventCardInfo: {
        flexDirection: 'row', padding: 20, width: '100%',
        backgroundColor: '#2E2E2E'
    },
    upcomingEventCardTimeView: {
        flexDirection: 'column'
    },
    upcomingEventCardDataView: {
        flexDirection: 'column',
        marginLeft: 20, flexWrap: 'wrap', alignItems: 'flex-start', flex: 1
    },
    upcomingEventMonth: {
        fontWeight: 'bold', fontSize: 16,
        color: "#EB894A", textTransform: 'uppercase', marginBottom: 5
    },
    upcomingEventDay: {
        color: 'white', fontWeight: '100', fontSize: 28, marginBottom: 5
    },
    upcomingEventTime: {
        color: 'white', fontWeight: '100', fontSize: 12
    },
    upcomingEventCardTitle: {
        fontWeight: 'bold', fontSize: 20, color: 'white',
        marginBottom: 20
    },
    upcomingEventCardSubtitle: {
        fontWeight: 'bold', fontSize: 12, fontVariant: ['small-caps'], color: 'silver',
        marginBottom: 5, overflow: 'hidden'
    },
    upcomingEventCardText: {
        fontWeight: 'normal', fontSize: 12, color: 'white',
        maxHeight: 60, overflow: 'hidden'
    }
});
exports.UpcomingEventCard = function (_a) {
    var pushDetails = _a.pushDetails, upcomingEvent = _a.upcomingEvent;
    var id = upcomingEvent.id, imageURL = upcomingEvent.imageURL, title = upcomingEvent.title, subtitle = upcomingEvent.subtitle, body = upcomingEvent.body, date = upcomingEvent.date;
    return (react_1.default.createElement(react_native_1.TouchableOpacity, { style: styles.upcomingEventCard, onPress: function () { pushDetails(id, title); } },
        react_1.default.createElement(react_native_1.Image, { style: styles.upcomingEventCardImage, source: { uri: imageURL || 'default.png' } }),
        react_1.default.createElement(react_native_1.View, { style: styles.upcomingEventCardInfo },
            react_1.default.createElement(react_native_1.View, { style: styles.upcomingEventCardTimeView },
                react_1.default.createElement(react_native_1.Text, { style: styles.upcomingEventMonth }, moment_1.default(date).format('MMM')),
                react_1.default.createElement(react_native_1.Text, { style: styles.upcomingEventDay }, moment_1.default(date).format('DD')),
                react_1.default.createElement(react_native_1.Text, { style: styles.upcomingEventTime }, moment_1.default(date).format('HH:mm'))),
            react_1.default.createElement(react_native_1.View, { style: styles.upcomingEventCardDataView },
                react_1.default.createElement(react_native_1.Text, { style: styles.upcomingEventCardTitle }, title),
                subtitle ? react_1.default.createElement(react_native_1.Text, { style: styles.upcomingEventCardSubtitle }, subtitle) : react_1.default.createElement(react_native_1.View, null),
                react_1.default.createElement(react_native_1.Text, { style: styles.upcomingEventCardText }, body)))));
};
