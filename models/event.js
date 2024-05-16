import { Schema, model } from 'mongoose';

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    participants: [],
  },
  { versionKey: false, timestamps: true }
);

export const Event = model('event', eventSchema);
