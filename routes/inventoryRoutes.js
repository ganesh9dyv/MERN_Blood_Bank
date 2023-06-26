const express =require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const { createInventoryController, getInventoryController, getDonarsController, 
    getHospitalController,getOrganisationController,getOrganisationHospitalController,getInventoryHospitalController, getRecentInventoryController 
} = require('../controllers/inventoryController');

const router=express.Router();

//routes
// Add Inventory -> POST
router.post('/create-inventory',authMiddleware,createInventoryController);

// get all blood records ->GET
router.get('/get-inventory',authMiddleware,getInventoryController);

// get all recent records ->GET
router.get('/get-recent-inventory',authMiddleware,getRecentInventoryController);

// get all blood records ->POST
router.post('/get-inventory-hospital',authMiddleware,getInventoryHospitalController);

// get donar records ->GET
router.get('/get-donars',authMiddleware,getDonarsController);

// get Hospital records ->GET
router.get('/get-hospitals',authMiddleware,getHospitalController);

// get organisation records ->GET
router.get('/get-organisations',authMiddleware,getOrganisationController);


// get organisation records for hospital ->GET
router.get('/get-organisations-for-hospital',authMiddleware,getOrganisationHospitalController);


module.exports=router;