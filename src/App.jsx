import { useState } from 'react';
import Header_103022400061 from './components/Header';
import CategoryBoard_103022400061 from './components/CategoryBoard';
import ThreadList_103022400061 from './components/ThreadList';
import ThreadForm_103022400061 from './components/ThreadForm';

export default function App_103022400061() {
    const [isSearchOpen_103022400061, setIsSearchOpen_103022400061] = useState(false);
    const [threads_103022400061, setThreads_103022400061] = useState([
        { judul: "Vibes Landscape ala Scene Film", author: "akumahmasihpemula", gambar: "image/opera.jpg" },
        { judul: "Ada yang Bikin Komik Sendiri?", author: "YesKing67", gambar: "image/komik.jpg" },
        { judul: "Karakter Original", author: "Kape", gambar: "image/kape.jpg" },
        { judul: "Fanart Haruhi", author: "Kyon", gambar: "image/haruhi.jpg" }
    ]);

    function toggleSearch_103022400061() {
        setIsSearchOpen_103022400061(!isSearchOpen_103022400061);
    }

    function tambahThread_103022400061(dataBaru_103022400061) {
        setThreads_103022400061([...threads_103022400061, dataBaru_103022400061]);
    }

    return (
        <div className="bg-gray-100 min-h-screen">
            <Header_103022400061 toggleSearch_103022400061={toggleSearch_103022400061} />
            
            {isSearchOpen_103022400061 && (
                <form className="m-4">
                    <label className="text-xl font-semibold">Cari karya atau diskusi:</label>
                    <input type="search" placeholder="Ketik kata kunci di sini..." className="p-4 w-full border border-gray-300 rounded-lg mt-2 text-gray-800" />
                    <button type="button" className="bg-white text-gray-800 font-bold py-2 px-6 rounded mt-2">Cari</button>
                </form>
            )}

            <CategoryBoard_103022400061 />

            <main className="p-4">
                <ThreadForm_103022400061 onTambah_103022400061={tambahThread_103022400061} />
                
                <h2 className="text-xl font-bold text-gray-800 mt-6">Latest Threads</h2>
                <ThreadList_103022400061 threads_103022400061={threads_103022400061} />
            </main>
        </div>
    );
}