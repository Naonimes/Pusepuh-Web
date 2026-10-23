import ThreadCard_103022400061 from './ThreadCard';

export default function ThreadList_103022400061({ threads_103022400061 }) {
    if (threads_103022400061.length === 0) {
        return <p className="text-center font-bold text-gray-800 mt-4 text-xl">Belum ada data Thread</p>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {threads_103022400061.map((item_103022400061, index_103022400061) => (
                <ThreadCard_103022400061 key={index_103022400061} data_103022400061={item_103022400061} />
            ))}
        </div>
    );
}