import mongoose from "mongoose";

 export const connetDB =async() =>{
    await mongoose.connect('mongodb+srv://siripurapusnehitha:<siripurapusnehitha>@cluster0.s4xsv.mongodb.net/food-del').then(()=>console.log("DB Connected"));

}