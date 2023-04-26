import axios from "../utils/axios";
import { catchAsync } from "../utils/catchAsync";



export const getAllConsultation = catchAsync(async (req, res) => {
  let consultation = await axios(`consultation`)
  res.status(200).json({
    status: "success",
    results: consultation.data.length,
    data: {
      consultation:consultation.data
    },
  });
  });

export const createConsultation = catchAsync(async (req, res) => {
  const consultation = req.body;
    await axios.post(`consultation`, consultation)
      res.status(200).json({
        status: "success",
        message:"consultation created"
      });
    });
  