import { Goal } from "../models/goalModel.js";

export const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find();

    res.status(200).json({
      status: "success",
      resuls: goals.length,
      goals,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const createGoal = async (req, res) => {
  try {
    const goal = await Goal.create(req.body);

    res.status(201).json({
      status: "success",
      data: goal,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const deleteGoal = async (req, res) => {
  try {
    const deleteOne = await Goal.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
      message: "Item deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export const updateGoal = async (req, res) => {
  try {
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: "success",
      message: "Item updated successfully",
      data: updateGoal,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
