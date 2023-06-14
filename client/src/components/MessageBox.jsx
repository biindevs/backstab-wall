const MessageBox = ({ title, message }) => {
    return (
        <div className="w-full min-w-[20rem] h-[15rem] flex flex-col p-6 bg-pink-300 rounded-lg">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <p className="h-full">{message}</p>
        </div>
    );
};

export default MessageBox;
