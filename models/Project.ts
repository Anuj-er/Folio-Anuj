import mongoose, { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    tags: [{ type: String }],
    githubLink: { type: String }, // Optional
    liveLink: { type: String },   // Optional
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 }, // For maintaining order
}, { timestamps: true });

const Project = models.Project || model('Project', ProjectSchema);

export default Project;
