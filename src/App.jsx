import { useState } from 'react';
import Header_103022400061 from './components/Header';
import ThreadList_103022400061 from './components/ThreadList';
import ThreadForm_103022400061 from './components/ThreadForm';

export default function App_103022400061() {
    const [halaman_103022400061, setHalaman_103022400061] = useState("home");

    const [threads_103022400061, setThreads_103022400061] = useState([
        { 
            judul: "Vibes Landscape ala Scene Film", 
            author: "akumahmasihpemula", 
            gambar: "image/opera.jpg",
            deskripsi: "Hai ges! Aku lagi seneng banget bikin gambar-gambar background landscape..."
        },
        { 
            judul: "Ada yang Bikin Komik Sendiri?", 
            author: "YesKing67", 
            gambar: "image/komik.jpg",
            deskripsi: "sumpah disini ada yg pernah bikin komik sendiri ga?"
        },
        { 
            judul: "Karakter Original", 
            author: "Kape", 
            gambar: "image/kape.jpg",
            deskripsi: "Kenalin ini OC baru aku!"
        },
        { 
            judul: "Fanart Haruhi", 
            author: "Kyon", 
            gambar: "image/haruhi.jpg",
            deskripsi: "Iseng bikin fanart Haruhi Suzumiya."
        }
    ]);

    function tambahThread_103022400061(threadBaru_103022400061) {
        setThreads_103022400061([...threads_103022400061, threadBaru_103022400061]);
    }

    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <Header_103022400061 
                halamanAktif_103022400061={halaman_103022400061} 
                pindahHalaman_103022400061={setHalaman_103022400061} 
            />

            <main className="p-4">
                {halaman_103022400061 === "home" && (
                    <>
                        <h2 className="text-xl font-bold text-gray-800">Latest Threads</h2>
                        <ThreadList_103022400061 threads_103022400061={threads_103022400061} />
                    </>
                )}

                {halaman_103022400061 === "board" && (
                    <div className="grid grid-cols-1 gap-4 mt-2">
                        {threads_103022400061.map((item_103022400061, index_103022400061) => (
                            <div key={index_103022400061} className="bg-white shadow-md rounded-lg p-6 border border-gray-300">
                                <h3 className="text-xl font-bold text-gray-800">{item_103022400061.judul}</h3>
                                <p className="text-gray-600 mt-2">Diunggah oleh: {item_103022400061.author}</p>
                                <img src={item_103022400061.gambar} alt={item_103022400061.judul} className="w-1/2 mt-2 border rounded" />
                                <p className="text-gray-800 mt-2">{item_103022400061.deskripsi}</p>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-4">
                                    Selengkapnya
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {halaman_103022400061 === "thread" && (
                    <ThreadForm_103022400061 
                        onTambah_103022400061={tambahThread_103022400061} 
                        pindahHalaman_103022400061={setHalaman_103022400061} 
                    />
                )}
            </main>
        </div>
    );
}