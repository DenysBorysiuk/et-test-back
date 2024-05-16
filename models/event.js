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
    participants: [
      {
        fullName: { type: String, required: true },
        email: { type: String, required: true },
        dateOfBirth: { type: Date, required: true },
        about: { type: String, required: true },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

export const Event = model('event', eventSchema);
