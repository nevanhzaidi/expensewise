import httpStatus from "http-status";

import ErrorResponse from "../../utils/errorResponse";
import Sheet from "../../models/Sheet";

const sheetPolicy = async (req, res, next) => {
  const id = req.params.sheetId || req.params.id;
  const sheet = await Sheet.findById(id);
  req.sheet = sheet;

  if (sheet && sheet.owner.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        "Not authorized to access the sheet",
        httpStatus.UNAUTHORIZED,
      ),
    );
  }
  if (!req.sheet) {
    return next(
      new ErrorResponse(
        `No sheet found with the id of ${req.params.id || req.params.sheetId}`,
        httpStatus.NOT_FOUND,
      ),
    );
  }
  next();
};

const getSheetPolicy = async (req, res, next) => {
  // Access rights logic will lay down here....
  next();
};

const updateSheetPolicy = async (req, res, next) => {
  // Access rights logic will lay down here....
  next();
};

const deleteSheetPolicy = async (req, res, next) => {
  // Access rights logic will lay down here....
  next();
};

export { sheetPolicy, getSheetPolicy, updateSheetPolicy, deleteSheetPolicy };
