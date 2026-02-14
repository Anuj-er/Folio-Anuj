import Navbar from '@/components/Navbar';
import { ConditionalContactButton } from '@/components/ConditionalContactButton';
import { SimpleBackToTop } from '@/components/SimpleBackToTop';
import { BackgroundMusic } from '@/components/BackgroundMusic';
import CustomCursor from '@/components/CustomCursor';

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* Contact button with conditional positioning */}
            <ConditionalContactButton />

            <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="py-4 sm:py-6 lg:py-8">
                        {children}
                    </div>
                </main>
                <footer className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                    { }
                </footer>
            </div>

            {/* Static back to top button */}
            <SimpleBackToTop />

            {/* Background music control */}
            <BackgroundMusic audioSrc="/audio/background.mp3" initialVolume={0.5} />

            {/* Custom animated cursor */}
            <CustomCursor />
        </>
    );
}
