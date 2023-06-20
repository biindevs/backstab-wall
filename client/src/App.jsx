import { useEffect, useState } from "react";
import MessageBox from "./components/MessageBox";
import { useMessagesStore } from "./store/messagesStore";
import Header from "./components/Header";
import MessageForm from "./components/MessageForm";

const Homepage = () => {
  const { getMessages, messages } = useMessagesStore();

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-[#f8f9fa]">
      <div className="w-full h-[50vh] flex flex-col items-center p-2 2xl:p-8 mb-[30rem] 2xl:mb-[5rem] text-white bg-[#385898]">
        <Header />
        <button
          className="p-2 rounded-lg bg-blue-500 text-white mt-4"
          onClick={openModal}
        >
          CREATE
        </button>
        {isModalOpen && <MessageForm closeModal={closeModal} />}
      </div>
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 justify-items-center items-center gap-10 p-10">
        {messages &&
          messages.map((message) => (
            <MessageBox
              title={message.title}
              message={message.message}
              date={message.date}
              key={message._id}
            />
          ))}
      </div>

      <small className="font-bold tracking-widest mb-5">Bin-baz Akilan</small>
    </div>
  );
};

export default Homepage;
