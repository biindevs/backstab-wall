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
            alert(`${error}, Please restart the page.`);
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
                    date: get().getDate(),
                }),
            });
            const data = await response.json();

            get().getMessages();
        } catch (error) {
            console.log(error);
            alert(`${error}, Please restart the page.`);
        }
    },
    getDate: () => {
        const currentDate = new Date();
        const month = currentDate.getMonth() + 1;
        const day = currentDate.getDay();
        const year = currentDate.getFullYear();
        console.log(`${month}/${day}/${year}`);

        return `${month}/${day}/${year}`;
    },
});

export const useMessagesStore = create(messagesStore);
