export default function Header_103022400061({ toggleSearch_103022400061 }) {
    return (
        <header className="bg-blue-500 text-white p-4 text-center">
            <nav className="flex justify-between items-center m-4">
                <div className="flex gap-4">
                    <a href="#" className="font-bold text-white text-lg">Home</a>
                    <a href="#" className="font-bold text-white text-lg">New Thread</a>
                </div>
                <button className="font-bold text-white text-lg cursor-pointer">Mode</button>
            </nav>
            <h1 className="text-4xl font-bold mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>pusepuh</h1>
            <button onClick={toggleSearch_103022400061} className="bg-gray-800 text-white font-bold py-2 px-4 rounded m-4">
                Tampilkan/Sembunyikan Pencarian
            </button>
        </header>
    );
}