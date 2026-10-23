export default function ThreadCard_103022400061({ data_103022400061 }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-300 text-center">
            <img src={data_103022400061.gambar} alt={data_103022400061.judul} className="w-full rounded mb-2" />
            <h3 className="font-bold text-lg">{data_103022400061.judul}</h3>
            <p className="text-sm text-gray-600">Oleh: {data_103022400061.author}</p>
        </div>
    );
}