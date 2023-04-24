"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _pharmacistController = require("../controllers/pharmacistController.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = _express.default.Router();
router.get("/", _pharmacistController.getAllPharmacists);
router.get("/:id", _pharmacistController.getPharmacistById);
router.post("/", _pharmacistController.createPharmacist);
router.put("/:id", _pharmacistController.updatePharmacistById);
router.delete("/:id", _pharmacistController.deletePharmacistById);
router.post("/prescribe", _pharmacistController.prescribeMedicines);
var _default = router;
exports.default = _default;
//# sourceMappingURL=pharmacistRoutes.js.map