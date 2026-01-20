import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftRightIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { GoogleGenerativeAI } from "@google/generative-ai";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi there! How can I help you today?', isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    // const userMessage = { text: input, isBot: false };
    const userMessage = {
      text: input,
      sender: "user", // not "bot"
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response (replace with actual API call to OpenAI/Gemini)
    // setTimeout(() => {
    //   const botMessage = { 
    //     text: `This is a placeholder response. In a real implementation, this would be connected to OpenAI or Gemini API.`, 
    //     isBot: true 
    //   };
    //   setMessages(prev => [...prev, botMessage]);
    //   setIsLoading(false);
    // }, 1000);

    // For actual implementation with OpenAI or Gemini API:
    // try {
    //   const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': `Bearer ${process.env.REACT_APP_AI_API_KEY}`
    //     },
    //     body: JSON.stringify({ prompt: input })
    //   });
    //   const data = await response.json();
    //   setMessages(prev => [...prev, { text: data.message, isBot: true }]);
    // } catch (error) {
    //   console.error('Error calling AI API:', error);
    //   setMessages(prev => [...prev, { text: 'Sorry, I encountered an error. Please try again later.', isBot: true }]);
    // } finally {
    //   setIsLoading(false);
    // }

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.REACT_APP_AI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      const text = result.response.text();
      const botMessage = {
        text: text,
        sender: "bot",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage = {
        text: "❌ Sorry, I encountered an error. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-primary text-white p-3 rounded-full shadow-lg"
        aria-label="Open chat"
      >
        {isOpen ?
          <XMarkIcon className="w-6 h-6" /> :
          <ChatBubbleLeftRightIcon className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white dark:bg-darkBg rounded-lg shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-primary p-4 text-white">
              <h3 className="font-medium">AI Assistant</h3>
            </div>

            {/* Chat Messages */}
            <div className="h-80 overflow-y-auto p-4 flex flex-col space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${message.isBot ?
                      'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none' :
                      'bg-primary text-white rounded-tr-none'}`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg rounded-tl-none text-gray-800 dark:text-gray-200">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <form onSubmit={handleSendMessage} className="border-t border-gray-200 dark:border-gray-800 p-4 flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-l-lg px-4 py-2 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-r-lg transition-colors disabled:opacity-50"
              >
                <PaperAirplaneIcon className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatBot;