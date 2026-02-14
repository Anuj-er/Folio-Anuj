import mongoose, { Schema, model, models } from 'mongoose';

const AboutSchema = new Schema({
    profileImage: { type: String, required: true },
    badges: [{ type: String }], // Array of badges
    name: { type: String, default: "Anuj Kumar" },
    headline: { type: String }, // e.g., "Curious Mind | Tech Enthusiast | Innovator"
    paragraphs: [{ type: String }], // Array of description paragraphs
    currentFocus: [{ type: String }], // Array of current focus items
    skills: [{ type: String }],
    socialLinks: {
        github: { type: String },
        linkedin: { type: String },
        twitter: { type: String },
        resume: { type: String }
    }
}, { timestamps: true });

const About = models.About || model('About', AboutSchema);

export default About;