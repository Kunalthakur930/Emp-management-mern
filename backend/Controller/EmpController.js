const EmpModel = require("../Model/EmpModel");
const saveEmp = async (req, res) => {

  try {
    const { name, email, salary, role, age } = req.body || {};
    if ((!name, !email, !salary,!role,!age)) {
      return res.status(401).json({ message: "All fields are required" });
    }
    const newEmp = new EmpModel({
      name,
      email,
      salary,
      role,
      age,
      userId: req.user.userId,
    });
    await newEmp.save();
    res.status(201).json({ message: "Employee created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// to get all emps on click view map

const getEmp = async (req, res) => {
  try {
    const employees = await EmpModel.find({
      userId: req.user.userId,
    });
    res.status(200).json(employees);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

// update employee

const updateEmp = async (req, res) => {
  try {
    const updatedEmployee = await EmpModel.findOneAndUpdate(
      {
        _id: req.params.id,
        userId: req.user.userId,
      },
      req.body,
      { new: true },
    );
    if (!updatedEmployee)
      return res.status(404).json({ message: "Employee not found" });
    res
      .status(200)
      .json({ message: "Employee updated successfully", updatedEmployee });
  } catch (error) {
    console.log(error);
    res.satus(500).json({ message: "Something went wrong" });
  }
};

// delete employee logic

const deleteEmp = async (req, res) => {
  try {
    const deletedEmployee = await EmpModel.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.userId,
    });
    if (!deletedEmployee)
      return res.status(404).json({ message: "Employee not found" });
    res
      .status(200)
      .json({ message: "Employee deleted successfully", deletedEmployee });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { saveEmp, getEmp, updateEmp, deleteEmp };
