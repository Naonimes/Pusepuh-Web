export default function CategoryBoard_103022400061({ pindahHalaman_103022400061 }) {
    return (
        <nav className="m-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            <button onClick={() => pindahHalaman_103022400061("board")} className="bg-white text-gray-800 p-2 border border-gray-300 rounded-lg font-bold text-sm text-center cursor-pointer">
                /g/ - Gambar
            </button>
            <button onClick={() => pindahHalaman_103022400061("board")} className="bg-white text-gray-800 p-2 border border-gray-300 rounded-lg font-bold text-sm text-center cursor-pointer">
                /k/ - Krisar
            </button>
            <button onClick={() => pindahHalaman_103022400061("board")} className="bg-white text-gray-800 p-2 border border-gray-300 rounded-lg font-bold text-sm text-center cursor-pointer">
                /t/ - Tanya
            </button>
            <button onClick={() => pindahHalaman_103022400061("board")} className="bg-white text-gray-800 p-2 border border-gray-300 rounded-lg font-bold text-sm text-center cursor-pointer">
                /h/ - Hobi
            </button>
            <button onClick={() => pindahHalaman_103022400061("board")} className="bg-white text-gray-800 p-2 border border-gray-300 rounded-lg font-bold text-sm text-center cursor-pointer">
                /q/ - Feedback
            </button>
            <button onClick={() => pindahHalaman_103022400061("board")} className="bg-white text-gray-800 p-2 border border-gray-300 rounded-lg font-bold text-sm text-center cursor-pointer">
                /r/ - Random
            </button>
        </nav>
    );
}