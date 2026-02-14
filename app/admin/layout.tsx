export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-black text-white">
            <nav className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-md">
                <div className="container mx-auto flex h-16 items-center justify-between px-4">
                    <div className="text-xl font-bold">Admin Dashboard</div>
                    <div className="flex gap-4 text-sm text-gray-400">
                        <a href="/admin" className="hover:text-white">Dashboard</a>
                        <a href="/" className="hover:text-white" target="_blank">View Site</a>
                    </div>
                </div>
            </nav>
            <main className="container mx-auto py-8">
                {children}
            </main>
        </div>
    );
}
