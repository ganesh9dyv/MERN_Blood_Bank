const express =require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { getDonarsListController, getHosListController, getOrgListController, deleteDonarController, deleteOrganisationController, deleteHospitalController } = require("../controllers/adminController");
const adminMiddleware = require("../middlewares/adminMiddleware");

// router object
const router=express.Router();

router.get('/donar-list',authMiddleware,adminMiddleware,getDonarsListController)
router.get('/hospital-list',authMiddleware,adminMiddleware,getHosListController)
router.get('/organisation-list',authMiddleware,adminMiddleware,getOrgListController)
//export
router.delete('/delete-donar/:id',authMiddleware,adminMiddleware,deleteDonarController)
router.delete('/delete-organisation/:id',authMiddleware,adminMiddleware,deleteOrganisationController)
router.delete('/delete-hospital/:id',authMiddleware,adminMiddleware,deleteHospitalController)


module.exports=router;
