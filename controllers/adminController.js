const userModel = require("../models/userModel");

//GET DONAR LIST
const getDonarsListController = async (req, res) => {
  try {
    const donarData = await userModel.find({ role: "donar" }).sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Toatlcount: donarData.length,
      message: "Donar List Fetched Successfully",
      donarData,
    });
  }catch (error){
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In DOnar List API",
      error,
    });
  }
};
//GET HOSPITAL LIST
const getHosListController = async (req, res) => {
  try {
    const hospitalData = await userModel
      .find({ role: 'hospital' })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Toatlcount: hospitalData.length,
      message: "HOSPITAL List Fetched Successfully",
      hospitalData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Hospital List API",
      error,
    });
  }
};
//GET ORG LIST
const getOrgListController = async (req, res) => {
  try {
    const orgData = await userModel
      .find({ role: "organisation" })
      .sort({ createdAt: -1 });

    return res.status(200).send({
      success: true,
      Toatlcount: orgData.length,
      message: "Organisation List Fetched Successfully",
      orgData,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error In Organisation List API",
      error,
    });
  }
};
// =======================================

//DELETE DONAR
const deleteDonarController = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Donar Record Deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while deleting donar ",
      error,
    });
  }
};

// delete hospital
const deleteHospitalController = async (req, res) => {
    try {
      await userModel.findByIdAndDelete(req.params.id);
      return res.status(200).send({
        success: true,
        message: "hospital Record Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error while deleting hospital ",
        error,
      });
    }
  };

// delete organisation
const deleteOrganisationController = async (req, res) => {
    try {
      await userModel.findByIdAndDelete(req.params.id);
      return res.status(200).send({
        success: true,
        message: "organisation Record Deleted successfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        success: false,
        message: "Error while deleting organisation ",
        error,
      });
    }
  };

//EXPORT
module.exports = {getDonarsListController, getHosListController, getOrgListController,deleteDonarController,deleteHospitalController,deleteOrganisationController};