"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _physicianController = require("../controllers/physicianController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.get("/", _physicianController.getAllPhysicians);
router.get("/:id", _physicianController.getPhysicianById);
router.post("/", _physicianController.createPhysician);
router.put("/:id", _physicianController.updatePhysicianById);
router.delete("/:id", _physicianController.deletePhysicianById);
router.post("/diagnose", _physicianController.diagnoseDisease);
var _default = router;
exports.default = _default;
//# sourceMappingURL=physicianRoutes.js.map