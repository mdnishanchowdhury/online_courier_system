const express = require("express");
const router = express.Router();
const {
  createParcel,
  getAllParcels,
  updateParcel,
  getOneParcel,
  getUserParcel,
  deleteParcel,
} = require("../controllers/parcel");

// add parcel
router.post("/", createParcel);

//get all parcels
router.get("/", getAllParcels);

//update parcel
router.put("/id", updateParcel);

//get one parcel

router.get("/find/:id", getOneParcel);

//get users parcels

router.post("/me", getUserParcel);

//delete parcel

router.delete("/:id", deleteParcel);

module.exports = router;
