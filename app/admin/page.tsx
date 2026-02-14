'use client';

import { useState, useEffect } from 'react';
import { getAboutData, updateAboutData, getProjects, createProject, deleteProject, getExperiences, createExperience, deleteExperience } from '@/lib/actions';

export default function AdminPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [activeTab, setActiveTab] = useState('about');

    // Data States
    const [about, setAbout] = useState<any>(null);
    const [projects, setProjects] = useState<any[]>([]);
    const [experiences, setExperiences] = useState<any[]>([]);

    // Form States
    // Form States
    const [newProject, setNewProject] = useState<{ title: string; description: string; image: string; tags: string[]; githubLink: string; liveLink: string }>({
        title: '',
        description: '',
        image: '',
        tags: [''],
        githubLink: '',
        liveLink: ''
    });

    // Experience Form State
    const [newExperience, setNewExperience] = useState({
        title: '',
        description: '',
        images: [''],
        links: [{ text: '', url: '' }]
    });

    useEffect(() => {
        // Check local storage for auth persistence
        const auth = localStorage.getItem('adminAuth');
        if (auth === 'true') {
            setIsAuthenticated(true);
            fetchData();
        }
    }, []);

    const fetchData = async () => {
        const aboutData = await getAboutData();
        const projectsData = await getProjects();
        const expData = await getExperiences();
        setAbout(aboutData || {});
        setProjects(projectsData || []);
        setExperiences(expData || []);
    };

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
            localStorage.setItem('adminAuth', 'true');
            fetchData();
        } else {
            alert('Invalid Password');
        }
    };

    const handleAboutSave = async () => {
        const updated = await updateAboutData(about);
        setAbout(updated);
        alert('About section updated!');
    };

    // --- PROJECT HANDLERS ---

    const handleProjectAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        const tagsArray = newProject.tags.map(t => t.trim()).filter(Boolean);
        await createProject({ ...newProject, tags: tagsArray });
        setNewProject({ title: '', description: '', image: '', tags: [''], githubLink: '', liveLink: '' });
        fetchData();
    };

    const handleProjectDelete = async (id: string) => {
        if (confirm('Delete this project?')) {
            await deleteProject(id);
            fetchData();
        }
    };

    // --- EXPERIENCE HANDLERS ---

    const handleExperienceAdd = async (e: React.FormEvent) => {
        e.preventDefault();
        // Filter out empty strings
        const validImages = newExperience.images.filter(img => img.trim() !== '');
        const validLinks = newExperience.links.filter(l => l.text.trim() !== '' && l.url.trim() !== '');

        await createExperience({
            ...newExperience,
            images: validImages,
            links: validLinks
        });

        setNewExperience({ title: '', description: '', images: [''], links: [{ text: '', url: '' }] });
        fetchData();
    };

    const handleExperienceDelete = async (id: string) => {
        if (confirm('Delete this experience post?')) {
            await deleteExperience(id);
            fetchData();
        }
    };

    const updateExpImage = (index: number, value: string) => {
        const newImages = [...newExperience.images];
        newImages[index] = value;
        setNewExperience({ ...newExperience, images: newImages });
    };

    const addExpImageField = () => {
        setNewExperience({ ...newExperience, images: [...newExperience.images, ''] });
    };

    const removeExpImageField = (index: number) => {
        const newImages = newExperience.images.filter((_, i) => i !== index);
        setNewExperience({ ...newExperience, images: newImages });
    };

    if (!isAuthenticated) {
        return (
            <div className="flex h-[80vh] items-center justify-center">
                <form onSubmit={handleLogin} className="w-full max-w-sm rounded-lg border border-gray-800 bg-gray-900 p-8 shadow-xl">
                    <h2 className="mb-6 text-2xl font-bold">Admin Login</h2>
                    <input
                        type="password"
                        placeholder="Enter Admin Password"
                        className="mb-4 w-full rounded border border-gray-700 bg-black p-2 text-white"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="w-full rounded bg-blue-600 py-2 hover:bg-blue-700">Login</button>
                </form>
            </div>
        );
    }

    return (
        <div className="px-4 pb-20">
            <div className="mb-8 flex gap-4 border-b border-gray-800 pb-4 overflow-x-auto">
                <button onClick={() => setActiveTab('about')} className={`whitespace-nowrap px-4 py-2 ${activeTab === 'about' ? 'bg-blue-600 rounded' : 'text-gray-400'}`}>About</button>
                <button onClick={() => setActiveTab('projects')} className={`whitespace-nowrap px-4 py-2 ${activeTab === 'projects' ? 'bg-blue-600 rounded' : 'text-gray-400'}`}>Projects</button>
                <button onClick={() => setActiveTab('experience')} className={`whitespace-nowrap px-4 py-2 ${activeTab === 'experience' ? 'bg-blue-600 rounded' : 'text-gray-400'}`}>Experience (Previous Work)</button>
                <button onClick={() => { setIsAuthenticated(false); localStorage.removeItem('adminAuth'); }} className="ml-auto text-red-400 hover:text-red-300">Logout</button>
            </div>

            {activeTab === 'about' && about && (
                <div className="grid gap-4 max-w-2xl">
                    <h3 className="text-xl font-bold">Edit About Section</h3>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Badges (Top Tags)</label>
                        {(about.badges || ['']).map((badge: string, idx: number) => (
                            <div key={idx} className="flex gap-2 mb-2">
                                <input
                                    className="w-full rounded border border-gray-700 bg-black p-2 text-white"
                                    placeholder={`Badge ${idx + 1} (e.g., HackIndia National Finalist)`}
                                    value={badge}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setAbout((prev: any) => {
                                            const newBadges = [...(prev.badges || [''])];
                                            newBadges[idx] = val;
                                            return { ...prev, badges: newBadges };
                                        });
                                    }}
                                />
                                {(about.badges || ['']).length > 1 && (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setAbout((prev: any) => {
                                                const newBadges = (prev.badges || ['']).filter((_: any, i: number) => i !== idx);
                                                return { ...prev, badges: newBadges };
                                            });
                                        }}
                                        className="text-red-500 px-2 hover:bg-white/10 rounded"
                                    >
                                        ✕
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => setAbout((prev: any) => ({ ...prev, badges: [...(prev.badges || ['']), ''] }))}
                            className="text-xs text-blue-400 hover:text-blue-300"
                        >
                            + Add Badge
                        </button>
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Name</label>
                        <input
                            className="w-full rounded border border-gray-700 bg-black p-2 text-white"
                            value={about.name || 'Anuj Kumar'}
                            onChange={(e) => setAbout({ ...about, name: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Headline (Below Name)</label>
                        <input
                            className="w-full rounded border border-gray-700 bg-black p-2 text-white"
                            placeholder="e.g., Curious Mind | Tech Enthusiast | Innovator"
                            value={about.headline || ''}
                            onChange={(e) => setAbout({ ...about, headline: e.target.value })}
                        />
                    </div>

                    <div className="border-t border-gray-800 pt-4 mt-2">
                        <h4 className="text-sm font-bold mb-2 text-gray-300">Description Paragraphs</h4>
                        {(about.paragraphs || ['']).map((para: string, idx: number) => (
                            <div key={idx} className="mb-2">
                                <textarea
                                    className="w-full h-20 rounded border border-gray-700 bg-black p-2 text-sm text-white"
                                    placeholder={`Paragraph ${idx + 1}`}
                                    value={para}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setAbout((prev: any) => {
                                            const newParas = [...(prev.paragraphs || [''])];
                                            newParas[idx] = val;
                                            return { ...prev, paragraphs: newParas };
                                        });
                                    }}
                                />
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => setAbout((prev: any) => ({ ...prev, paragraphs: [...(prev.paragraphs || ['']), ''] }))}
                            className="text-xs text-blue-400 hover:text-blue-300"
                        >
                            + Add Paragraph
                        </button>
                    </div>

                    <div className="border-t border-gray-800 pt-4 mt-2">
                        <h4 className="text-sm font-bold mb-2 text-gray-300">Current Focus Items</h4>
                        {(about.currentFocus || ['']).map((item: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2 mb-2">
                                <input
                                    className="flex-1 rounded border border-gray-700 bg-black p-2 text-sm text-white"
                                    placeholder={`Focus item ${idx + 1}`}
                                    value={item}
                                    onChange={(e) => {
                                        const val = e.target.value;
                                        setAbout((prev: any) => {
                                            const newFocus = [...(prev.currentFocus || [''])];
                                            newFocus[idx] = val;
                                            return { ...prev, currentFocus: newFocus };
                                        });
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => {
                                        setAbout((prev: any) => {
                                            const newFocus = [...(prev.currentFocus || [])];
                                            newFocus.splice(idx, 1);
                                            return { ...prev, currentFocus: newFocus };
                                        });
                                    }}
                                    className="text-red-500 hover:text-red-400 px-2 font-bold"
                                    title="Remove ID"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => setAbout((prev: any) => ({ ...prev, currentFocus: [...(prev.currentFocus || ['']), ''] }))}
                            className="text-xs text-blue-400 hover:text-blue-300"
                        >
                            + Add Focus Item
                        </button>
                    </div>


                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Profile Image URL</label>
                        <input
                            className="w-full rounded border border-gray-700 bg-black p-2 text-white"
                            value={about.profileImage || ''}
                            onChange={(e) => setAbout({ ...about, profileImage: e.target.value })}
                        />
                    </div>


                    <div className="border-t border-gray-800 pt-4 mt-2">
                        <h4 className="text-lg font-bold mb-4 text-blue-400">Social & Resume Links</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">GitHub URL</label>
                                <input
                                    className="w-full rounded border border-gray-700 bg-black p-2 text-white"
                                    value={about.socialLinks?.github || ''}
                                    onChange={(e) => setAbout({ ...about, socialLinks: { ...about.socialLinks, github: e.target.value } })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">LinkedIn URL</label>
                                <input
                                    className="w-full rounded border border-gray-700 bg-black p-2 text-white"
                                    value={about.socialLinks?.linkedin || ''}
                                    onChange={(e) => setAbout({ ...about, socialLinks: { ...about.socialLinks, linkedin: e.target.value } })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Twitter/X URL</label>
                                <input
                                    className="w-full rounded border border-gray-700 bg-black p-2 text-white"
                                    value={about.socialLinks?.twitter || ''}
                                    onChange={(e) => setAbout({ ...about, socialLinks: { ...about.socialLinks, twitter: e.target.value } })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-400 mb-1">Resume / Document Link (PDF)</label>
                                <input
                                    className="w-full rounded border border-gray-700 bg-black p-2 text-white"
                                    value={about.socialLinks?.resume || ''}
                                    onChange={(e) => setAbout({ ...about, socialLinks: { ...about.socialLinks, resume: e.target.value } })}
                                />
                            </div>
                        </div>
                    </div>
                    <button onClick={handleAboutSave} className="bg-green-600 px-4 py-2 rounded w-fit mt-4">Save Changes</button>
                </div>
            )}

            {activeTab === 'projects' && (
                <div className="grid gap-8">
                    <div className="border border-gray-800 p-6 rounded-lg bg-gray-900/30">
                        <h4 className="text-lg font-bold mb-4 text-blue-400">Add New Project</h4>
                        <form onSubmit={handleProjectAdd} className="grid gap-4 max-w-2xl">
                            <div>
                                <label className="text-sm text-gray-400">Project Title *</label>
                                <input className="w-full bg-black border border-gray-700 p-2 rounded focus:border-blue-500 outline-none" value={newProject.title} onChange={e => setNewProject({ ...newProject, title: e.target.value })} required />
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Description *</label>
                                <textarea className="w-full bg-black border border-gray-700 p-2 rounded focus:border-blue-500 outline-none" rows={3} value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} required />
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Image URL *</label>
                                <input className="w-full bg-black border border-gray-700 p-2 rounded focus:border-blue-500 outline-none" value={newProject.image} onChange={e => setNewProject({ ...newProject, image: e.target.value })} required />
                            </div>
                            <div>
                                <label className="text-sm text-gray-400 mb-2 block">Tags</label>
                                {newProject.tags.map((tag, idx) => (
                                    <div key={idx} className="flex gap-2 mb-2">
                                        <input
                                            className="w-full bg-black border border-gray-700 p-2 rounded focus:border-blue-500 outline-none text-white"
                                            placeholder={`Tag ${idx + 1}`}
                                            value={tag}
                                            onChange={e => {
                                                const val = e.target.value;
                                                setNewProject(prev => {
                                                    const newTags = [...prev.tags];
                                                    newTags[idx] = val;
                                                    return { ...prev, tags: newTags };
                                                });
                                            }}
                                        />
                                        {newProject.tags.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setNewProject(prev => {
                                                        const newTags = prev.tags.filter((_, i) => i !== idx);
                                                        return { ...prev, tags: newTags };
                                                    });
                                                }}
                                                className="text-red-500 px-2 hover:bg-white/10 rounded"
                                            >
                                                ✕
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => setNewProject(prev => ({ ...prev, tags: [...prev.tags, ''] }))}
                                    className="text-sm text-blue-400 hover:text-blue-300"
                                >
                                    + Add Tag
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm text-gray-400">Github Link (Optional)</label>
                                    <input className="w-full bg-black border border-gray-700 p-2 rounded focus:border-blue-500 outline-none" value={newProject.githubLink} onChange={e => setNewProject({ ...newProject, githubLink: e.target.value })} />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-400">Live Link (Optional)</label>
                                    <input className="w-full bg-black border border-gray-700 p-2 rounded focus:border-blue-500 outline-none" value={newProject.liveLink} onChange={e => setNewProject({ ...newProject, liveLink: e.target.value })} />
                                </div>
                            </div>
                            <button type="submit" className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded w-fit mt-2">Add Project</button>
                        </form>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {projects.map((p: any) => (
                            <div key={p._id} className="border border-gray-800 p-4 rounded-lg relative bg-gray-900/50 hover:bg-gray-900/80 transition-colors group">
                                <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded mb-4" />
                                <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                                <p className="text-sm text-gray-400 line-clamp-3 mb-4">{p.description}</p>
                                <div className="flex gap-2 text-xs text-gray-500 mb-4">
                                    {p.githubLink && <span>Build: ✅</span>}
                                    {p.liveLink && <span>Live: ✅</span>}
                                </div>
                                <button onClick={() => handleProjectDelete(p._id)} className="absolute top-2 right-2 bg-red-600/80 hover:bg-red-600 p-1 px-3 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'experience' && (
                <div className="grid gap-8">
                    <div className="border border-gray-800 p-6 rounded-lg bg-gray-900/30">
                        <h4 className="text-lg font-bold mb-4 text-purple-400">Add New Experience Post</h4>
                        <div className="text-sm text-gray-500 mb-4">Tip: Add 1 image for a full-width banner, or 4 images for a grid layout.</div>
                        <form onSubmit={handleExperienceAdd} className="grid gap-4 max-w-2xl">
                            <div>
                                <label className="text-sm text-gray-400">Title *</label>
                                <input className="w-full bg-black border border-gray-700 p-2 rounded focus:border-purple-500 outline-none" value={newExperience.title} onChange={e => setNewExperience({ ...newExperience, title: e.target.value })} required />
                            </div>
                            <div>
                                <label className="text-sm text-gray-400">Content (Description) *</label>
                                <textarea className="w-full bg-black border border-gray-700 p-2 rounded focus:border-purple-500 outline-none" rows={4} value={newExperience.description} onChange={e => setNewExperience({ ...newExperience, description: e.target.value })} required />
                            </div>

                            <div>
                                <label className="text-sm text-gray-400 mb-2 block">Images (URLs)</label>
                                {newExperience.images.map((img, idx) => (
                                    <div key={idx} className="flex gap-2 mb-2">
                                        <input
                                            className="w-full bg-black border border-gray-700 p-2 rounded focus:border-purple-500 outline-none"
                                            placeholder={`Image URL ${idx + 1}`}
                                            value={img}
                                            onChange={e => updateExpImage(idx, e.target.value)}
                                        />
                                        {newExperience.images.length > 1 && (
                                            <button type="button" onClick={() => removeExpImageField(idx)} className="text-red-500 px-2 hover:bg-white/10 rounded">✕</button>
                                        )}
                                    </div>
                                ))}
                                <button type="button" onClick={addExpImageField} className="text-sm text-purple-400 hover:text-purple-300">+ Add Another Image URL</button>
                            </div>

                            <button type="submit" className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded w-fit mt-2">Add Post</button>
                        </form>
                    </div>

                    <div className="space-y-6">
                        {experiences.map((exp: any) => (
                            <div key={exp._id} className="border border-gray-800 p-6 rounded-lg bg-gray-900/50 relative group">
                                <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 whitespace-pre-wrap">{exp.description}</p>

                                {/* Image Preview Grid similar to frontend */}
                                <div className={`grid ${exp.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-2 w-full max-w-md`}>
                                    {exp.images.map((img: string, i: number) => (
                                        <img key={i} src={img} className="w-full h-24 object-cover rounded bg-black/50" alt="" />
                                    ))}
                                </div>

                                <button onClick={() => handleExperienceDelete(exp._id)} className="absolute top-4 right-4 bg-red-600/80 hover:bg-red-600 p-1 px-3 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">Delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
