'use client';

import { useState, useRef } from 'react';
import { FaCloudUploadAlt, FaTrash, FaSpinner, FaImage, FaFilePdf } from 'react-icons/fa';

interface FileUploadProps {
    value: string;
    onChange: (url: string) => void;
    label?: string;
    className?: string;
    accept?: string; // e.g. "image/*" or ".pdf"
}

export default function FileUpload({
    value,
    onChange,
    label = "Upload File",
    className = "",
    accept = "image/*"
}: FileUploadProps) {
    const [isUploading, setIsUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const isPdf = value?.toLowerCase().endsWith('.pdf');

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
        }
    };

    const handleFile = async (file: File) => {
        // Validate file type based on 'accept' prop
        const isImageRequested = accept.includes('image');
        const isPdfRequested = accept.includes('pdf') || accept.includes('.pdf');

        if (isImageRequested && !file.type.startsWith('image/') && !isPdfRequested) {
            setError('Please upload an image file');
            return;
        }

        if (isPdfRequested && file.type !== 'application/pdf' && !isImageRequested) {
            setError('Please upload a PDF file');
            return;
        }

        if (isPdfRequested && isImageRequested && !file.type.startsWith('image/') && file.type !== 'application/pdf') {
            setError('Please upload an image or PDF file');
            return;
        }

        // Validate file size (e.g., max 5MB for images, 10MB for PDFs)
        const maxSize = isPdfRequested ? 10 * 1024 * 1024 : 5 * 1024 * 1024;
        if (file.size > maxSize) {
            setError(`File size should be less than ${isPdfRequested ? '10MB' : '5MB'}`);
            return;
        }

        setError(null);
        setIsUploading(true);

        try {
            // 1. Get signature from our API
            const timestamp = Math.round(new Date().getTime() / 1000);
            const paramsToSign = {
                timestamp: timestamp,
                folder: 'folio-anuj',
                access_mode: 'public',
            };

            const response = await fetch('/api/cloudinary/sign', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ paramsToSign }),
            });

            const { signature } = await response.json();

            // 2. Upload to Cloudinary
            const formData = new FormData();
            formData.append('file', file);
            // Get credentials from env vars (passed securely via signature, need api_key here)
            // Note: Since we need api_key here and it's public, we can use NEXT_PUBLIC_... or fetch from server
            // But for now let's assume secure upload where api_key is also needed.
            // Wait, standard signed upload needs api_key.
            // Let's modify the API to return api_key as well or we use env var if exposed.
            // Usually API key is public info.

            // Let's fetch API key and cloud name from our API route too? No, usually that's public config.
            // I'll assume standard NEXT_PUBLIC_CLOUDINARY_API_KEY pattern or hardcode if user provided it.
            // The user provided CLOUDINARY_API_KEY in .env.local (server side). 
            // I should expose it or return it from the sign API.
            // Let's update the sign API to return api_key and cloud_name as well for convenience.

            // Actually, let's just use the Unsigned upload for simplicity if signed is too complex with hidden keys?
            // No, signed is better. I will update the API route to return the API key.

            // Wait, I can't update API route in middle of this file creation.
            // I'll assume I'll update the API route next. 
            // For now, I'll fetch the signature outcome which should include what we need.

            // Let's just hardcode the cloud name 'folioanuj' and I'll need the API key...
            // User provided: CLOUDINARY_API_KEY=714461154758949

            formData.append('api_key', process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY || '714461154758949');
            formData.append('timestamp', timestamp.toString());
            formData.append('signature', signature);
            formData.append('folder', 'folio-anuj');
            formData.append('access_mode', 'public');

            // Determine resource type: PDFs are best handled as 'image' in Cloudinary 
            // for public previewing and multi-page support.
            const resourceType = file.type === 'application/pdf' ? 'image' : 'auto';

            const uploadResponse = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'folioanuj'}/${resourceType}/upload`,
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const data = await uploadResponse.json();

            if (data.secure_url) {
                onChange(data.secure_url);
            } else {
                console.error('Cloudinary Error Data:', data);
                throw new Error(data.error?.message || 'Upload failed');
            }
        } catch (err: any) {
            console.error('Upload Error:', err);
            setError(err.message || 'Failed to upload file. Please try again.');
        } finally {
            setIsUploading(false);
        }
    };

    const handleRemove = () => {
        onChange('');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
    };

    return (
        <div className={`w-full ${className}`}>
            <label className="block text-sm text-gray-400 mb-2">{label}</label>

            {value ? (
                <div className="relative group rounded-lg overflow-hidden border border-gray-700 bg-gray-900">
                    {isPdf ? (
                        <div className="w-full h-48 flex flex-col items-center justify-center bg-gray-800 text-blue-400">
                            <FaFilePdf size={48} className="mb-2" />
                            <span className="text-xs text-gray-400 truncate max-w-[80%]">Resume PDF Uploaded</span>
                            <a
                                href={value}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 text-xs underline hover:text-blue-300"
                            >
                                View Document
                            </a>
                        </div>
                    ) : (
                        <img
                            src={value}
                            alt="Uploaded preview"
                            className="w-full h-48 object-cover transition-opacity group-hover:opacity-75"
                        />
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="p-2 bg-red-600 rounded-full hover:bg-red-700 text-white shadow-lg transform hover:scale-110 transition-transform"
                            title="Remove File"
                        >
                            <FaTrash size={16} />
                        </button>
                    </div>
                </div>
            ) : (
                <div
                    className={`relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer transition-colors ${dragActive
                        ? 'border-blue-500 bg-blue-500/10'
                        : 'border-gray-700 hover:border-blue-500 hover:bg-gray-800'
                        }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => inputRef.current?.click()}
                >
                    <input
                        ref={inputRef}
                        type="file"
                        className="hidden"
                        accept={accept}
                        onChange={handleChange}
                    />

                    {isUploading ? (
                        <div className="flex flex-col items-center">
                            <FaSpinner className="animate-spin text-blue-500 mb-2" size={24} />
                            <p className="text-sm text-gray-400">Uploading...</p>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center text-center">
                            <FaCloudUploadAlt className="text-gray-400 mb-2" size={32} />
                            <p className="text-sm text-gray-300 font-medium">Click to upload or drag & drop</p>
                            <p className="text-xs text-gray-500 mt-1">
                                {accept.includes('pdf') ? 'Images or PDF' : 'SVG, PNG, JPG or GIF'} (max 10MB)
                            </p>
                            {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
