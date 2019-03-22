"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_tag_1 = __importDefault(require("graphql-tag"));
var react_1 = __importDefault(require("react"));
var react_apollo_1 = require("react-apollo");
var react_native_1 = require("react-native");
var index_1 = __importDefault(require("../../../ui/icons/date/index"));
var index_2 = __importDefault(require("../../../ui/icons/pin/index"));
var index_3 = __importDefault(require("./mapView/index"));
var moment = require("moment");
var styles = react_native_1.StyleSheet.create({
    detailsView: { margin: 15, padding: 20 },
    detailsImage: { width: '100%', height: 254 },
    detailsHeader: {},
    detailsInfo: { flexDirection: 'column', marginTop: 40, marginBottom: 30 },
    detailsInfoRow: { flexDirection: 'row', marginBottom: 15 },
    detailsInfoData: { flexDirection: 'column', marginLeft: 15 },
    detailsInfoText: { fontSize: 12, fontWeight: '500', color: '#555555' },
    detailsInfoSubtext: { fontSize: 12, fontWeight: '100', color: '#555555' },
    detailsTitle: { fontSize: 18, fontWeight: '500', marginTop: 10 },
    detailsSubtitle: { fontSize: 14, fontWeight: '100', color: '#555555' },
    detailsBody: { fontSize: 12, fontWeight: 'normal', textAlign: 'justify' },
    detailsLocation: { width: '100%', height: 260, marginBottom: 50 },
    divider: {
        width: '60%', height: 1, marginTop: 40, marginBottom: 40, alignSelf: 'center',
        backgroundColor: 'silver'
    }
});
var EventDetails = function (_a) {
    var history = _a.history, match = _a.match, navigation = _a.navigation;
    var id = match && match.params.event ? match.params.event : navigation.getParam('id');
    if (!id)
        return react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.Text, null, "Lo sentimos pero no encontramos el evento que quer\u00EDas..."));
    var eventDetails = graphql_tag_1.default(templateObject_1 || (templateObject_1 = __makeTemplateObject([" \n        query EventDetails { oneEvent (id: ", ") \n            { id title subtitle body imageURL date venue { name address placeID} } }\n    "], [" \n        query EventDetails { oneEvent (id: ", ") \n            { id title subtitle body imageURL date venue { name address placeID} } }\n    "])), id);
    return (react_1.default.createElement(react_native_1.ScrollView, { style: react_native_1.StyleSheet.absoluteFill },
        react_1.default.createElement(react_apollo_1.Query, { query: eventDetails }, function (_a) {
            var loading = _a.loading, data = _a.data, error = _a.error;
            if (loading)
                return react_1.default.createElement(react_native_1.Text, null, "Loading");
            if (error) {
                console.log('ERROR: ', JSON.stringify(error));
                return react_1.default.createElement(react_native_1.Text, null, "Ha ocurrido un error inesperado...");
            }
            if (!loading && data === undefined) {
                return react_1.default.createElement(react_native_1.Text, null, "Error en la petici\u00F3n...");
            }
            var oneEvent = data.oneEvent;
            var latlng = { latitude: 40.2927789, longitude: -3.7913771 };
            return (react_1.default.createElement(react_native_1.View, { style: { alignItems: 'center' } },
                react_1.default.createElement(react_native_1.Image, { style: styles.detailsImage, source: { uri: oneEvent.imageURL } }),
                react_1.default.createElement(react_native_1.View, { style: styles.detailsView },
                    react_1.default.createElement(react_native_1.View, { style: styles.detailsHeader },
                        react_1.default.createElement(react_native_1.Text, { style: styles.detailsTitle }, oneEvent.title),
                        react_1.default.createElement(react_native_1.Text, { style: styles.detailsSubtitle }, oneEvent.subtitle)),
                    react_1.default.createElement(react_native_1.View, { style: styles.detailsInfo },
                        react_1.default.createElement(react_native_1.View, { style: styles.detailsInfoRow },
                            react_1.default.createElement(index_1.default, { color: "#555555" }),
                            react_1.default.createElement(react_native_1.View, { style: styles.detailsInfoData },
                                react_1.default.createElement(react_native_1.Text, { style: styles.detailsInfoText }, moment(oneEvent.date).format('dddd D de MMMM')),
                                react_1.default.createElement(react_native_1.Text, { style: styles.detailsInfoSubtext }, moment(oneEvent.date).format('HH:mm') + " H"))),
                        react_1.default.createElement(react_native_1.View, { style: styles.detailsInfoRow },
                            react_1.default.createElement(index_2.default, { color: "#555555" }),
                            react_1.default.createElement(react_native_1.View, { style: styles.detailsInfoData },
                                react_1.default.createElement(react_native_1.Text, { style: styles.detailsInfoText }, oneEvent.venue.name),
                                react_1.default.createElement(react_native_1.Text, { style: styles.detailsInfoSubtext }, oneEvent.venue.address)))),
                    react_1.default.createElement(react_native_1.View, { style: { width: '100%' } },
                        react_1.default.createElement(react_native_1.Text, { style: styles.detailsBody }, oneEvent.body)),
                    react_1.default.createElement(react_native_1.View, { style: styles.divider })),
                react_1.default.createElement(react_native_1.View, { style: styles.detailsLocation },
                    react_1.default.createElement(index_3.default, { latlng: latlng }))));
        })));
};
exports.default = EventDetails;
var templateObject_1;
