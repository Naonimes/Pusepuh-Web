import { useState } from 'react';

export default function ThreadForm_103022400061({ onTambah_103022400061, pindahHalaman_103022400061 }) {
    const [judul_103022400061, setJudul_103022400061] = useState("");
    const [kategori_103022400061, setKategori_103022400061] = useState("");
    const [deskripsi_103022400061, setDeskripsi_103022400061] = useState("");
    const [author_103022400061, setAuthor_103022400061] = useState("");

    function handleSubmit_103022400061(e) {
        e.preventDefault();
        if (judul_103022400061 === "") {
            alert("Judul tidak boleh kosong!");
            return;
        }
        onTambah_103022400061({
            judul: judul_103022400061,
            author: author_103022400061 || "Anonim",
            gambar: "image/opera.jpg",
            deskripsi: deskripsi_103022400061
        });
        alert("Thread berhasil diunggah!");
        pindahHalaman_103022400061("home");
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300">
            <form onSubmit={handleSubmit_103022400061}>
                <div className="mt-2">
                    <label className="text-lg font-bold text-gray-800">Judul Karya / Topik:</label>
                    <input 
                        type="text" 
                        value={judul_103022400061}
                        onChange={(e) => setJudul_103022400061(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg mt-2" 
                        placeholder="Ketik judulnya puh" 
                    />
                </div>

                <div className="mt-2">
                    <label className="text-lg font-bold text-gray-800">Nama Author:</label>
                    <input 
                        type="text" 
                        value={author_103022400061}
                        onChange={(e) => setAuthor_103022400061(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg mt-2" 
                        placeholder="Masukkan nama atau username kamu" 
                    />
                </div>
                
                <div className="mt-2">
                    <label className="text-lg font-bold text-gray-800">Pilih Board (Kategori):</label>
                    <select 
                        value={kategori_103022400061}
                        onChange={(e) => setKategori_103022400061(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg mt-2"
                    >
                        <option value="">-- Silakan Pilih Kategori --</option>
                        <option value="g">/g/ - Gambar</option>
                        <option value="k">/k/ - Krisar (Kritik & Saran)</option>
                        <option value="t">/t/ - Tanya</option>
                        <option value="h">/h/ - Hobi (Anime, Game)</option>
                        <option value="q">/q/ - Site Feedback</option>
                        <option value="r">/r/ - Random</option>
                    </select>
                </div>

                <div className="mt-2">
                    <label className="text-lg font-bold text-gray-800">Deskripsi / Caption:</label>
                    <textarea 
                        value={deskripsi_103022400061}
                        onChange={(e) => setDeskripsi_103022400061(e.target.value)}
                        className="w-full p-4 border border-gray-300 rounded-lg mt-2" 
                        rows="6" 
                        placeholder="Jadi ini mau posting apaan puh?"
                    ></textarea>
                </div>

                <div className="flex gap-4 mt-4">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded cursor-pointer">
                        Unggah Thread
                    </button>
                    <button type="button" onClick={() => pindahHalaman_103022400061("home")} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded cursor-pointer">
                        Batal
                    </button>
                </div>
            </form>
        </div>
    );
}