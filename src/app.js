import express from "express";
import cors from "cors";
import morgan from "morgan";
import patientRoutes from "./routes/patientRoutes";
import physicianRoutes from "./routes/physicianRoutes";
import pharmacistRoutes from "./routes/pharmacistRoutes";
import prescriptionRoutes from "./routes/prescriptionRoutes";
import globalErrorHandle from "./controllers/errorController";
import AppError from "./utils/appError";
import swaggerUi from './swagger';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Use routes
app.use("/api/v1/patients", patientRoutes);
app.use("/api/v1/physicians", physicianRoutes);
app.use("/api/v1/pharmacists", pharmacistRoutes);
app.use("/api/v1/prescriptions", prescriptionRoutes);

// Serve the Swagger API documentation
app.use('/api-docs', swaggerUi);

app.all("*", (req, res, next) => {
  next(new AppError(`can't find ${req.originalUrl} on this server`, 404));
});
app.use(globalErrorHandle);

export default app;
