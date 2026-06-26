const EmpController=require('../Controller/EmpController.js')
const verifyToken =require("../Middleware/AuthMiddleware.js")
const express=require('express')
const {application}=require('express')
const router=express.Router()
router.post("/saveEmp", verifyToken, EmpController.saveEmp);
router.get("/get", verifyToken, EmpController.getEmp);
router.put("/update/:id", verifyToken, EmpController.updateEmp);
router.delete("/delete/:id", verifyToken, EmpController.deleteEmp);
module.exports=router;