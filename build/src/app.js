"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _morgan = _interopRequireDefault(require("morgan"));
var _patientRoutes = _interopRequireDefault(require("./routes/patientRoutes"));
var _physicianRoutes = _interopRequireDefault(require("./routes/physicianRoutes"));
var _pharmacistRoutes = _interopRequireDefault(require("./routes/pharmacistRoutes"));
var _prescriptionRoutes = _interopRequireDefault(require("./routes/prescriptionRoutes"));
var _errorController = _interopRequireDefault(require("./controllers/errorController"));
var _appError = _interopRequireDefault(require("./utils/appError"));
var _swagger = _interopRequireDefault(require("./swagger"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_express.default.urlencoded({
  extended: true
}));
app.use((0, _cors.default)());
app.use((0, _morgan.default)("dev"));
app.use(_express.default.json());

// Use routes
app.use("/api/v1/patients", _patientRoutes.default);
app.use("/api/v1/physicians", _physicianRoutes.default);
app.use("/api/v1/pharmacists", _pharmacistRoutes.default);
app.use("/api/v1/prescriptions", _prescriptionRoutes.default);

// Serve the Swagger API documentation
app.use('/api-docs', _swagger.default);
app.all("*", (req, res, next) => {
  next(new _appError.default(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(_errorController.default);
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map