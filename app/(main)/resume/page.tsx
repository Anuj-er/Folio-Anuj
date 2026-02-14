import type { Metadata } from 'next';
import { getAboutData } from '@/lib/actions';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Resume',
    description: 'View and download my professional resume',
};

async function ResumeContent() {
    const data = await getAboutData();
    const resumeUrl = data?.socialLinks?.resume || '/resume/resume.pdf';

    return (
        <div className="w-full max-w-[1000px] flex flex-col items-center">
            {/* Minimal Header */}
            <div className="w-full flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="h-8 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                    <h1 className="text-2xl font-bold text-white">Resume</h1>
                </div>

                <a
                    href={resumeUrl}
                    download="Anuj_Kumar_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors group"
                >
                    <span>Download PDF</span>
                    <svg
                        className="w-4 h-4 group-hover:translate-y-0.5 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                        />
                    </svg>
                </a>
            </div>

            {/* PDF Viewer - Full Height for Seamless Scrolling */}
            <div className="w-full h-[60vh] md:h-[140vh] overflow-hidden rounded-sm shadow-2xl relative bg-[#333]">
                {/* Subtle gradient overlay at top to blend */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-10 opacity-50"></div>

                <iframe
                    src={`${resumeUrl}#toolbar=0&view=FitH&scrollbar=0`}
                    className="w-full h-full border-none bg-white scrollbar-hide"
                    title="Resume PDF"
                />
            </div>
        </div>
    );
}

export default function ResumePage() {
    return (
        <div className="w-full bg-black min-h-screen pt-24 pb-12 px-4 sm:px-6 md:px-8 flex flex-col items-center">
            <Suspense fallback={<div className="text-white">Loading resume...</div>}>
                <ResumeContent />
            </Suspense>
        </div>
    );
}
