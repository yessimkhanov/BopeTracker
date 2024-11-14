import { query } from '../db.js';

export const createPregnancyData = async (data) => {
  const { userID, currentWeek, babyGender, dueDate, babySize, babyWeight } = data;
  const result = await query(
    'INSERT INTO Pregnancy_Data (userID, currentWeek, babyGender, dueDate, babySize, babyWeight) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [userID, currentWeek, babyGender, dueDate, babySize, babyWeight]
  );
  return result.rows[0];
};

export const getPregnancyDataByUserId = async (userID) => {
  const result = await query('SELECT * FROM Pregnancy_Data WHERE userID = $1', [userID]);
  return result.rows;
};

export const updatePregnancyData = async (pregnancyID, updatedFields) => {
  const { currentWeek, babyGender, dueDate, babySize, babyWeight } = updatedFields;
  const result = await query(
    'UPDATE Pregnancy_Data SET currentWeek = $1, babyGender = $2, dueDate = $3, babySize = $4, babyWeight = $5 WHERE pregnancyID = $6 RETURNING *',
    [currentWeek, babyGender, dueDate, babySize, babyWeight, pregnancyID]
  );
  return result.rows[0];
};

export const deletePregnancyData = async (pregnancyID) => {
  const result = await query('DELETE FROM Pregnancy_Data WHERE pregnancyID = $1 RETURNING *', [pregnancyID]);
  return result.rows[0];
};