import { create } from "zustand";

const messagesStore = (set, get) => ({
  messages: [],
  getMessages: async () => {
    try {
      const response = await fetch(
        "https://confession-wall.onrender.com:10000/messages"
      );
      const data = await response.json();

      set({ messages: data });
    } catch (error) {
      console.log(error);
      alert(`${error}, Please restart the page.`);
    }
  },
  createMessage: async (title, message) => {
    try {
      const response = await fetch(
        "https://confession-wall.onrender.com:10000/messages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            title,
            message,
            date: new Date().toDateString(),
          }),
        }
      );
      const data = await response.json();

      get().getMessages();
    } catch (error) {
      console.log(error);
      alert(`${error}, Please restart the page.`);
    }
  },
});

export const useMessagesStore = create(messagesStore);
