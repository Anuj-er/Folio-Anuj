import mongoose, { Schema, model, models } from 'mongoose';

const ExperienceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    links: [{
        text: { type: String, required: true },
        url: { type: String, required: true }
    }],
    order: { type: Number, default: 0 }, // For maintaining order, higher = newer
    date: { type: Date, default: Date.now },
}, { timestamps: true });

const Experience = models.Experience || model('Experience', ExperienceSchema);

export default Experience;
