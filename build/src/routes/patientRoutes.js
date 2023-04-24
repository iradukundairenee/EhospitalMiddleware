"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _patientController = require("../controllers/patientController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.get("/", _patientController.getAllPatients);
router.get("/:id", _patientController.getPatientById);
router.post("/", _patientController.createPatient);
router.put("/:id", _patientController.updatePatientById);
router.delete("/:id", _patientController.deletePatientById);
router.post("/grant-access", _patientController.grantAccess);
var _default = router;
exports.default = _default;
//# sourceMappingURL=patientRoutes.js.map