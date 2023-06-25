const  mongoose = require("mongoose");
const inventoryModel = require("../models/inventoryModel");
const userModel = require("../models/userModel");

//create inventory
const createInventoryController=async(req,res)=>{
    try{
        const {email}=req.body;
        const user=await userModel.findOne({email});
        if(!user){
            throw new Error('User Not Found');
        }
        // if(inventoryType==='in' && user.role!='donar'){
        //     throw new Error('Not a donar account');
        // }
        // if(inventoryType==='out' && user.role!='hospital'){
        //     throw new Error('Not a Hospital');
        // }

        if (req.body.inventoryType == "out") {
            const requestedBloodGroup = req.body.bloodGroup;
            const requestedQuantityOfBlood = req.body.quantity;
            const organisation = new mongoose.Types.ObjectId(req.body.userId);
            //calculate Blood Quanitity
            const totalInOfRequestedBlood = await inventoryModel.aggregate([
              {
                $match: {
                  organisation,
                  inventoryType: "in",
                  bloodGroup: requestedBloodGroup,
                },
              },
              {
                $group: {
                  _id: "$bloodGroup",
                  total: { $sum: "$quantity" },
                },
              },
            ]);

            console.log('Total in',totalInOfRequestedBlood);
            const totalIn = totalInOfRequestedBlood[0]?.total || 0;
            //calculate OUT Blood Quanitity

            const totalOutOfRequestedBloodGroup = await inventoryModel.aggregate([
                {
                $match: {
                    organisation,
                    inventoryType: "out",
                    bloodGroup: requestedBloodGroup,
                },
                },
                {
                $group: {
                    _id: "$bloodGroup",
                    total: { $sum: "$quantity" },
                },
                },
            ]);
            const totalOut = totalOutOfRequestedBloodGroup[0]?.total || 0;

            //in & Out Calc
            const availableQuanityOfBloodGroup = totalIn - totalOut;
            //quantity validation
            if (availableQuanityOfBloodGroup < requestedQuantityOfBlood) {
                return res.status(500).send({
                success: false,
                message: `Only ${availableQuanityOfBloodGroup}ML of ${requestedBloodGroup.toUpperCase()} is available`,
                });
            }
            req.body.hospital = user?._id;
            } else {
            req.body.donar = user?._id;
            }
        // save records
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

// get inventory hospital bood records
const getInventoryHospitalController=async(req,res)=>{
    try{
        const inventory=await inventoryModel.find(req.body.filters)
        .populate("donar")
        .populate("hospital")
        .populate("organisation")
        .sort({createdAt:-1});
        return res.status(200).send({
            success:true,
            message:"get hospital consumer records successfully",
            inventory
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in get consumer inventory API",
            error
        })
    }
}

// donar records
const getDonarsController=async (req,res)=>{
    try{
        const organisation = req.body.userId;
        const donarId=await inventoryModel.distinct("donar",{
            organisation,
        });
        const donars =await userModel.find({_id:{$in:donarId}});
        return res.status(200).send({
            success:true,
            message:"Donar record Fetched Successfully",
            donars,
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in Donar Records",
            error
        })
    }

}

// Hospital records
const getHospitalController=async (req,res)=>{
    try{
        const organisation = req.body.userId;
        const hospitalId=await inventoryModel.distinct("hospital",{organisation,});
        const hospitals =await userModel.find({_id:{$in:hospitalId}});
        return res.status(200).send({
            success:true,
            message:"Hospital record Fetched Successfully",
            hospitals,
        })

    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in get Hospital API",
            error
        }) 
    }
}
const getOrganisationController=async(req,res)=>{
    try{
        const donar = req.body.userId;
        const orgId=await inventoryModel.distinct("organisation",{donar,});
        const organisations =await userModel.find({_id:{$in:orgId}});
        return res.status(200).send({
            success:true,
            message:"organisation record Fetched Successfully",
            organisations,
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in get Organisation API",
            error
        }) 
    }
}
const getOrganisationHospitalController=async(req,res)=>{
    try{
        const hospital = req.body.userId;
        const orgId=await inventoryModel.distinct("organisation",{hospital,});
        const organisations =await userModel.find({_id:{$in:orgId}});
        return res.status(200).send({
            success:true,
            message:"organisation for Hospital record Fetched Successfully",
            organisations,
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in get Organisation For Hospital API",
            error
        }) 
    }
}

module.exports={createInventoryController,getInventoryController,getDonarsController,getInventoryHospitalController,
    getHospitalController,getOrganisationController,getOrganisationHospitalController}