const testController=(req,res)=>{
    res.status(200).send({
        massage:"test route",
        success :true,
    });
};

module.exports={testController};