const JWT=require("jsonwebtoken");
module.exports=async(req,res,next)=>{
    try{
        const token=req.headers['authorization'].split(" ")[1];
        JWT.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                return res.status(401).send({
                    sucess:false,
                    massage:'Auth Failed'
                })
            }else{
                req.body.userId=decode.userId;
                next();
            }
        })
    }catch(error){
        console.log(error);
        return res.status(401).send({
            sucess:false,
            error,
            massage:'Auth Failed'
        })
    }
}