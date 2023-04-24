"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _prescriptionController = require("../controllers/prescriptionController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.get("/", _prescriptionController.getAllPrescriptions);
router.get("/:id", _prescriptionController.getPrescriptionById);
router.post("/", _prescriptionController.createPrescription);
router.get("/:id/download", _prescriptionController.downloadPrescription);
var _default = router;
exports.default = _default;
//# sourceMappingURL=prescriptionRoutes.js.map