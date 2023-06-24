const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//create inventory
const createInventoryController=async(req,res)=>{
    try{
        const {email,inventoryType}=req.body;
        const user=await userModel.findOne({email});
        if(!user){
            throw new Error('User Not Found');
        }
        // if(inventoryType==='in' && user.role!='donar'){
        //     throw new Error('Not a donar account');
        // }
        if(inventoryType==='out' && user.role!='hospital'){
            throw new Error('Not a Hospital');
        }
        const inventory=new inventoryModel(req.body);
        await inventory.save();
        return res.status(201).send({
            success:true,
            message:'NEW record Added'

        })

    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in create inventory API",
            error
        })
    }
};

// get inventory bood records
const getInventoryController=async(req,res)=>{
    try{
        const inventory=await inventoryModel.find({organisation:req.body.userId})
        .populate("donar")
        .populate("hospital")
        .sort({createdAt:-1});
        return res.status(200).send({
            success:true,
            message:"get all inventory records successfully",
            inventory
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in get all inventory API",
            error
        })
    }
}
module.exports={createInventoryController,getInventoryController}