import { useEffect, useState } from "react";
import MessageBox from "./components/MessageBox";
import { useMessagesStore } from "./store/messagesStore";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
    <div className="flex flex-col justify-between min-h-screen bg-[#f8f9fa]">
      <div className="w-full h-[50vh] flex flex-col items-center pt-2 pb-4 sm:p-4 lg:p-6 xl:p-8 mb-12 lg:mb-16 xl:mb-20 2xl:mb-[5rem] text-white bg-[#385898]">
        <Header />
        <button
          className="p-2 rounded-lg bg-blue-500 text-white mt-4"
          onClick={openModal}
        >
          CREATE
        </button>
        {isModalOpen && <MessageForm closeModal={closeModal} />}
      </div>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center items-center gap-6 lg:gap-12 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
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

      <Footer />
    </div>
  );
};

export default Homepage;
