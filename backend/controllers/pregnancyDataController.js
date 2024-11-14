import * as pregnancyDataModel from '../models/pregnancyDataModel.js';

export const createPregnancyData = async (req, res) => {
  try {
    const data = await pregnancyDataModel.createPregnancyData(req.body);
    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getPregnancyDataByUserId = async (req, res) => {
  try {
    const data = await pregnancyDataModel.getPregnancyDataByUserId(req.params.userID);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updatePregnancyData = async (req, res) => {
  try {
    const data = await pregnancyDataModel.updatePregnancyData(req.params.id, req.body);
    if (!data) {
      return res.status(404).json({ message: 'Pregnancy data not found' });
    }
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deletePregnancyData = async (req, res) => {
  try {
    const data = await pregnancyDataModel.deletePregnancyData(req.params.id);
    if (!data) {
      return res.status(404).json({ message: 'Pregnancy data not found' });
    }
    res.json({ message: 'Pregnancy data deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};