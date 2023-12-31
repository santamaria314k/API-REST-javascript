
const mongoose =require('mongoose')




const BootcampSchema=mongoose.Schema({ 
    name:{
        type:String,
        required:[true,"el nombre es requerido"],
        unique:true,
        maxlength:[20 ,"nombre de boootcamp no mayor de 50 caracteres "]
    } ,
    phone:{
        type:Number,
        max:[9999999999 ,"telefono  de boootcamp no mayor de 10 digitos "]

    },
    address:{
        type:String,
        required:[true,"la direccion es requerida"],
        maxlength:[100 ,"direccion  de boootcamp no mayor de 100 caracteres "]

    },
    topics:{
        type:[String],
        required:[true,"temas son  requeridos"],
        enum:["Frontend ","Backend","AI","Devops"]

    },
    AverageRating:Number,
    CreatedAt:Date


 })
 module.exports=mongoose.model('Bootcamp',BootcampSchema)