import { useState } from 'react';
import CategoryBoard_103022400061 from './CategoryBoard';

export default function Header_103022400061({ halamanAktif_103022400061, pindahHalaman_103022400061 }) {
    const [munculCari_103022400061, setMunculCari_103022400061] = useState(true);

    function toggleCari_103022400061() {
        setMunculCari_103022400061(!munculCari_103022400061);
    }

    return (
        <header className="bg-blue-500 text-white p-4 text-center w-full">
            <nav className="flex justify-between items-center m-4">
                <div className="flex gap-4">
                    <button onClick={() => pindahHalaman_103022400061("home")} className="font-bold text-white text-lg cursor-pointer">
                        Home
                    </button>
                    {halamanAktif_103022400061 === "thread" ? (
                        <button onClick={() => pindahHalaman_103022400061("board")} className="font-bold text-white text-lg cursor-pointer">
                            Board List
                        </button>
                    ) : (
                        <button onClick={() => pindahHalaman_103022400061("thread")} className="font-bold text-white text-lg cursor-pointer">
                            New Thread
                        </button>
                    )}
                </div>
                {halamanAktif_103022400061 === "home" && (
                    <button className="font-bold text-white text-lg cursor-pointer">Mode</button>
                )}
            </nav>

            {halamanAktif_103022400061 === "home" && (
                <>
                    <h1 className="text-4xl font-bold mt-2" style={{ fontFamily: "'Poppins', sans-serif" }}>pusepuh</h1>
                    
                    <button onClick={toggleCari_103022400061} className="bg-gray-800 text-white font-bold py-2 px-4 rounded m-4 cursor-pointer">
                        Tampilkan/Sembunyikan Pencarian
                    </button>

                    {munculCari_103022400061 && (
                        <form className="m-4">
                            <label className="text-xl font-semibold block">Cari karya atau diskusi:</label>
                            <input type="search" placeholder="Ketik kata kunci di sini..." className="p-4 w-full border border-gray-300 rounded-lg mt-2 text-gray-800 bg-white" />
                            <button type="button" className="bg-white text-gray-800 font-bold py-2 px-6 rounded mt-2 cursor-pointer">Cari</button>
                        </form>
                    )}

                    <CategoryBoard_103022400061 pindahHalaman_103022400061={pindahHalaman_103022400061} />
                </>
            )}

            {halamanAktif_103022400061 === "board" && (
                <h1 className="text-4xl font-bold mt-2">/gambar/</h1>
            )}

            {halamanAktif_103022400061 === "thread" && (
                <h1 className="text-4xl font-bold mt-2">Make a New Thread</h1>
            )}
        </header>
    );
}