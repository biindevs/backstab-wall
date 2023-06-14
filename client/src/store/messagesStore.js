import { create } from "zustand";

const messagesStore = (set, get) => ({
    messages: [],
    getMessages: async () => {
        try {
            const response = await fetch("http://localhost:8000/messages");
            const data = await response.json();

            set({ messages: data });
        } catch (error) {
            console.log(error);
        }
    },
    createMessage: async (title, message) => {
        try {
            const response = await fetch("http://localhost:8000/messages", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    message,
                }),
            });
            const data = await response.json();
            console.log(data);
            get().getMessages();
        } catch (error) {
            console.log(error);
        }
    },
});

export const useMessagesStore = create(messagesStore);
