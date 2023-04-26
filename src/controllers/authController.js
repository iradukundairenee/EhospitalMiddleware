import axios from "../utils/axios";
import { catchAsync } from "../utils/catchAsync";
import generateToken from "../utils/generateToken";


export const login = catchAsync(async (req, res) => {
    const newUser = req.body;

    const loginSuccess = await axios.post('login', newUser);
    const user = loginSuccess.data;
    if(user.success === "true") 
    {
      const token =await generateToken(user);
      res.status(200).json({
        user,
        token,
      });

    }
    else{
      res.status(404).json({
        user,
      });

    }
    
    
    
  });

  export const signUp = catchAsync(async (req, res) => {
    const newUser = req.body;
  
    const signupSuccess = await axios.post('register', newUser);
    const user = signupSuccess.data;
    res.status(200).json({
      user,
    });
  });
  