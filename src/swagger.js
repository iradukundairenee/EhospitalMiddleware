// Import the necessary packages
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import express from "express";

const router = express.Router();

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
        url: "https://choosealicense.com/licenses/mit/",
      },
      contact: {
        name: "Your Name",
        url: "https://yourwebsite.com",
        email: "youremail@yourwebsite.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

// Initialize Swagger-jsdoc
const swaggerDocs = swaggerJsdoc(swaggerOptions);

// Serve the Swagger API documentation using Swagger-UI Express
router.use("/", swaggerUi.serve);
router.get("/", swaggerUi.setup(swaggerDocs));

export default router;
