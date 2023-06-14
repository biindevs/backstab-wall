import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    ModalFooter,
    Textarea,
} from "@chakra-ui/react";
import { useMessagesStore } from "../store/messagesStore";
import { useState } from "react";

const NewMessageModal = ({ isOpen, onClose }) => {
    const { createMessage } = useMessagesStore();
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create new message</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input
                                value={title}
                                placeholder="Title"
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Message:</FormLabel>
                            <Textarea
                                placeholder="Your message..."
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button
                            colorScheme="blue"
                            onClick={() => {
                                createMessage(title, message);
                                setTitle("");
                                setMessage("");
                                onClose();
                            }}
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default NewMessageModal;
