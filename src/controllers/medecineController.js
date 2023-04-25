import axios from "../utils/axios";
import { catchAsync } from "../utils/catchAsync";



export const getAllmedecines = catchAsync(async (req, res) => {
  let medicines = await axios(`medicines`)
  res.status(200).json({
    status: "success",
    results: medicines.data.length,
    data: {
        medicines:medicines.data
    },
  });
  });

export const createlMedecines = catchAsync(async (req, res) => {
  const medicines = req.body;
    await axios.post(`medicines`, medicines)
      res.status(200).json({
        status: "success",
        message:"medicines created"
      });
    });
  