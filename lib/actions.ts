'use server';

import connectDB from './db';
import About from '@/models/About';
import Project from '@/models/Project';
import Experience from '@/models/Experience';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

// --- AUTH HELPER ---

/**
 * Checks if the current request is authenticated as admin.
 * Uses HTTP-only cookies for security.
 */
export async function isAdmin() {
    const cookieStore = cookies();
    const session = cookieStore.get('admin_session');

    if (!session) {
        console.log("isAdmin: No session cookie found");
        return false;
    }

    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
        console.error("isAdmin: ADMIN_PASSWORD environment variable is missing!");
        return false;
    }

    const isValid = session.value === adminPassword;
    if (!isValid) {
        console.log("isAdmin: Session cookie value does not match current password");
    }

    return isValid;
}

// --- ABOUT SECTION ACTIONS ---

export async function getAboutData() {
    await connectDB();
    const about = await About.findOne().lean();
    return about ? JSON.parse(JSON.stringify(about)) : null;
}

export async function updateAboutData(data: any) {
    if (!await isAdmin()) throw new Error('Unauthorized');
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
    if (!await isAdmin()) throw new Error('Unauthorized');
    await connectDB();
    // Get the highest order number and increment
    const maxOrderDoc = await Project.findOne().sort({ order: -1 }).select('order').lean();
    const nextOrder = (maxOrderDoc?.order || 0) + 1;

    const project = await Project.create({ ...data, order: nextOrder });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(project));
}

export async function updateProject(id: string, data: any) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    await connectDB();
    const { _id, __v, ...updateData } = data;
    const project = await Project.findByIdAndUpdate(id, updateData, { new: true });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(project));
}

export async function deleteProject(id: string) {
    if (!await isAdmin()) throw new Error('Unauthorized');
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
    if (!await isAdmin()) throw new Error('Unauthorized');
    await connectDB();
    // Get the highest order number and increment
    const maxOrderDoc = await Experience.findOne().sort({ order: -1 }).select('order').lean();
    const nextOrder = (maxOrderDoc?.order || 0) + 1;

    const experience = await Experience.create({ ...data, order: nextOrder });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(experience));
}

export async function updateExperience(id: string, data: any) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    await connectDB();
    const { _id, __v, ...updateData } = data;
    const experience = await Experience.findByIdAndUpdate(id, updateData, { new: true });
    revalidatePath('/');
    return JSON.parse(JSON.stringify(experience));
}

export async function deleteExperience(id: string) {
    if (!await isAdmin()) throw new Error('Unauthorized');
    await connectDB();
    await Experience.findByIdAndDelete(id);
    revalidatePath('/');
    return { success: true };
}

export async function verifyAdminPassword(password: string) {
    const adminPassword = process.env.ADMIN_PASSWORD;
    if (!adminPassword) {
        console.error("ADMIN_PASSWORD is not set in environment variables");
        return false;
    }

    if (password === adminPassword) {
        // Set a secure HTTP-only session cookie
        const cookieStore = cookies();
        cookieStore.set('admin_session', adminPassword, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/',
        });
        return true;
    }
    return false;
}

export async function checkAuthStatus() {
    return await isAdmin();
}

export async function logout() {
    const cookieStore = cookies();
    cookieStore.delete('admin_session');
}

