import MessageBox from "./components/MessageBox";
import { useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import NewMessageModal from "./modal/newMessageModal";
import Navbar from "./components/Navbar";
import { useMessagesStore } from "./store/messagesStore";

const Homepage = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { getMessages, messages } = useMessagesStore();

    useEffect(() => {
        getMessages();
    }, []);

    return (
        <>
            <Navbar onOpen={onOpen} />
            <div className="w-full h-screen grid lg:grid-cols-3 gap-10 p-8">
                {messages &&
                    messages.map((message) => (
                        <MessageBox
                            title={message.title}
                            message={message.message}
                            key={message._id}
                        />
                    ))}
            </div>

            <NewMessageModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Homepage;
