import { Event } from '../models/event.js';

import HttpError from '../helpers/HttpError.js';

import ctrlWrapper from '../helpers/ctrlWrapper.js';

const getAllEvents = async (req, res) => {
  const result = await Event.find();

  if (!result) {
    throw HttpError(404);
  }

  return res.status(200).json(result);
};

const getOneEvent = async (req, res) => {
  const { id } = req.params;
  const result = await Event.findById(id);

  if (!result) {
    throw HttpError(404);
  }

  return res.status(200).json(result);
};

const updateParticipant = async (req, res) => {
  const { id } = req.params;
  const result = await Event.findByIdAndUpdate(id, req.body);

  if (!result) {
    throw HttpError(404);
  }

  return res.json(result);
};

export default {
  getAllEvents: ctrlWrapper(getAllEvents),
  getOneEvent: ctrlWrapper(getOneEvent),
  updateParticipant: ctrlWrapper(updateParticipant),
};
