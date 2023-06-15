const MessageBox = ({ title, message, date }) => {
    return (
        <div className="w-[20rem] h-[15rem] flex flex-col p-6  rounded-lg shadow-custom">
            <h1 className="text-xl font-bold mb-4">{title}</h1>
            <p className="h-full">{message}</p>
            <small className="font-medium text-gray-600 text-end">{date}</small>
        </div>
    );
};

export default MessageBox;
