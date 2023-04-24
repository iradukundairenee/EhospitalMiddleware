"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// Import the necessary packages

const router = _express.default.Router();

// Define the Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "E-Health Care API",
      version: "1.0.0",
      description: "API for managing patient data and prescriptions",
      license: {
        name: "MIT",
        url: "https://choosealicense.com/licenses/mit/"
      },
      contact: {
        name: "Your Name",
        url: "https://yourwebsite.com",
        email: "youremail@yourwebsite.com"
      }
    },
    servers: [{
      url: "http://localhost:5000",
      description: "Development server"
    }]
  },
  apis: ["./routes/*.js"]
};

// Initialize Swagger-jsdoc
const swaggerDocs = (0, _swaggerJsdoc.default)(swaggerOptions);

// Serve the Swagger API documentation using Swagger-UI Express
router.use("/", _swaggerUiExpress.default.serve);
router.get("/", _swaggerUiExpress.default.setup(swaggerDocs));
var _default = router;
exports.default = _default;
//# sourceMappingURL=swagger.js.map