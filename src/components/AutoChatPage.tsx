import { useState, useRef, useEffect } from 'react';
import { Mic, Paperclip, Send, Bot } from 'lucide-react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Avatar, AvatarFallback } from './ui/avatar';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export function AutoChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hello! I\'m your AutoHealth AI assistant. How can I help you today?',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'Thank you for your message. As an AI health assistant, I can help you with symptom checking, medication information, and general health guidance. Please note that I\'m not a replacement for professional medical advice.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="flex-1 overflow-hidden">
        <ScrollArea className="h-full">
          <div ref={scrollRef} className="p-6 space-y-4 max-w-4xl mx-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {message.type === 'ai' && (
                  <Avatar className="h-8 w-8 flex-shrink-0">
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      <Bot className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                
                <div className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'} max-w-[70%]`}>
                  <div
                    className={`px-4 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-blue-50 text-black'
                    }`}
                  >
                    <p>{message.content}</p>
                  </div>
                  <span className="text-gray-500 mt-1 px-2">{formatTime(message.timestamp)}</span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      <div className="border-t border-gray-200 bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-2 bg-white border border-gray-200 rounded-lg p-2">
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Mic className="h-5 w-5 text-gray-600" />
            </Button>
            
            <Button variant="ghost" size="icon" className="flex-shrink-0">
              <Paperclip className="h-5 w-5 text-gray-600" />
            </Button>
            
            <Textarea
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              className="border-0 focus-visible:ring-0 resize-none min-h-[40px] max-h-[120px]"
              rows={1}
            />
            
            <Button
              size="icon"
              onClick={handleSend}
              className="bg-blue-600 hover:bg-blue-700 flex-shrink-0"
            >
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
