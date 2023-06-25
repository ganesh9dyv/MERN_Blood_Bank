const express =require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController, getDonarsController, getHospitalController,getOrganisationController,getOrganisationHospitalController } = require('../controllers/inventoryController');

const router=express.Router();

//routes
// Add Inventory -> POST
router.post('/create-inventory',authMiddleware,createInventoryController);

// get all blood records ->GET
router.get('/get-inventory',authMiddleware,getInventoryController);

// get donar records ->GET
router.get('/get-donars',authMiddleware,getDonarsController);

// get Hospital records ->GET
router.get('/get-hospitals',authMiddleware,getHospitalController);

// get organisation records ->GET
router.get('/get-organisations',authMiddleware,getOrganisationController);


// get organisation records for hospital ->GET
router.get('/get-organisations-for-hospital',authMiddleware,getOrganisationHospitalController);


module.exports=router;