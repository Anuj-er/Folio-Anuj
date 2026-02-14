'use server';

import connectDB from './db';
import About from '@/models/About';
import Project from '@/models/Project';
import Experience from '@/models/Experience';
import { revalidatePath } from 'next/cache';

// --- ABOUT SECTION ACTIONS ---

export async function getAboutData() {
    await connectDB();
    const about = await About.findOne().lean();
    return about ? JSON.parse(JSON.stringify(about)) : null;
}

export async function updateAboutData(data: any) {
    await connectDB();
    const { _id, __v, ...updateData } = data;
    const about = await About.findOneAndUpdate({}, updateData, { returnDocument: 'after', upsert: true, setDefaultsOnInsert: true });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(about));
}

// --- PROJECT SECTION ACTIONS ---

export async function getProjects() {
    await connectDB();
    const projects = await Project.find().sort({ order: -1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(projects));
}

export async function createProject(data: any) {
    await connectDB();
    // Get the highest order number and increment
    const maxOrderDoc = await Project.findOne().sort({ order: -1 }).select('order').lean();
    const nextOrder = (maxOrderDoc?.order || 0) + 1;

    const project = await Project.create({ ...data, order: nextOrder });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(project));
}

export async function updateProject(id: string, data: any) {
    await connectDB();
    const { _id, __v, ...updateData } = data;
    const project = await Project.findByIdAndUpdate(id, updateData, { new: true });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(project));
}

export async function deleteProject(id: string) {
    await connectDB();
    await Project.findByIdAndDelete(id);
    revalidatePath('/');
    return { success: true };
}

// --- EXPERIENCE / PREVIOUS WORK ACTIONS ---

export async function getExperiences() {
    await connectDB();
    const experiences = await Experience.find().sort({ order: -1, createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(experiences));
}

export async function createExperience(data: any) {
    await connectDB();
    // Get the highest order number and increment
    const maxOrderDoc = await Experience.findOne().sort({ order: -1 }).select('order').lean();
    const nextOrder = (maxOrderDoc?.order || 0) + 1;

    const experience = await Experience.create({ ...data, order: nextOrder });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(experience));
}

export async function updateExperience(id: string, data: any) {
    await connectDB();
    const { _id, __v, ...updateData } = data;
    const experience = await Experience.findByIdAndUpdate(id, updateData, { new: true });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(experience));
}

export async function deleteExperience(id: string) {
    await connectDB();
    await Experience.findByIdAndDelete(id);
    revalidatePath('/');
    return { success: true };
}
