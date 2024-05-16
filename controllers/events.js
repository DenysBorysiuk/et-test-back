import { Event } from '../models/event.js';

import HttpError from '../helpers/HttpError.js';

import ctrlWrapper from '../helpers/ctrlWrapper.js';

const getAllEvents = async (req, res) => {
  const { page = 1, limit = 12 } = req.query;
  const skip = (page - 1) * limit;

  const result = await Event.find().skip(skip).limit(limit);

  if (!result) {
    throw HttpError(404);
  }

  return res.status(200).json(result);
};

const getOneEvent = async (req, res) => {
  const { _id } = req.params;
  const result = await Event.findById(_id);

  if (!result) {
    throw HttpError(404);
  }

  return res.status(200).json(result);
};

const updateParticipants = async (req, res) => {
  const { id } = req.params;

  const result = await Event.findByIdAndUpdate(
    id,
    { $push: { participants: req.body } },
    { new: true }
  );

  if (!result) {
    throw HttpError(404);
  }

  return res.json(result);
};

export default {
  getAllEvents: ctrlWrapper(getAllEvents),
  getOneEvent: ctrlWrapper(getOneEvent),
  updateParticipants: ctrlWrapper(updateParticipants),
};
