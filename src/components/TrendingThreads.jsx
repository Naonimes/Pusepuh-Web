import { useState, useEffect } from 'react';

export default function TrendingThreads_103022400061() {
    const [tren_103022400061, setTren_103022400061] = useState([]);
    const [loading_103022400061, setLoading_103022400061] = useState(true);
    const [error_103022400061, setError_103022400061] = useState(null);

    const ambilData_103022400061 = async () => {
        setLoading_103022400061(true);
        setError_103022400061(null);

        try {
            const respon = await fetch('https://jsonplaceholder.typicade.com/posts?_limit=4');
            if (!respon.ok) {
                throw new Error('Gagal terhubung ke galeri pusat.');
            }
            const data = await respon.json();
            setTren_103022400061(data);
        } catch (err) {
            setError_103022400061(err.message);
        } finally {
            setLoading_103022400061(false);
        }
    };

    useEffect(() => {
        ambilData_103022400061();
    }, []);

    if (loading_103022400061) {
        return (
            <div className="mt-8 p-6 bg-blue-100 rounded-lg text-center border border-blue-300">
                <p className="text-blue-800 font-bold text-lg animate-pulse">Halaman sedang dimuat. mohon tunggu yah :D.</p>
            </div>
        );
    }

    if (error_103022400061) {
        return (
            <div className="mt-8 p-6 bg-red-100 rounded-lg text-center border border-red-300">
                <p className="text-red-800 font-bold text-lg mb-4">Waduh, koneksi terputus: {error_103022400061}</p>
                <button onClick={ambilData_103022400061} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer">
                    Coba Lagi
                </button>
            </div>
        );
    }

    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 border-t-2 border-gray-300 pt-4">Trending Eksternal (Mock API)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                {tren_103022400061.map((item_103022400061) => (
                    <div key={item_103022400061.id} className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
                        <h3 className="font-bold text-md text-gray-800 capitalize truncate">{item_103022400061.title}</h3>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item_103022400061.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}