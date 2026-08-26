"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Sparkles, Send, CornerDownLeft, Command, ShieldCheck, ThumbsUp } from "lucide-react";
import { cn } from "@/lib/utils";

type MessageRole = "user" | "ai";

interface AIMetrics {
  recommend: string;
  score: string;
  confidence: string;
}

interface Message {
  id: string;
  role: MessageRole;
  content: string;
  metrics?: AIMetrics;
}

const suggestedQuestions = [
  "Is it worth the price?",
  "What problems do users report after a year?",
  "How does it compare to the previous model?",
  "What are the biggest deal breakers?",
  "Who should buy this?",
];

const initialMessages: Message[] = [
  {
    id: "msg-1",
    role: "user",
    content: "Is this actually worth buying?",
  },
  {
    id: "msg-2",
    role: "ai",
    content: "Based on the reviews analyzed, I'd say yes — especially if reliability and long-term performance matter to you. The community consensus highlights exceptional build quality, though a few flag battery wear after 2+ years.",
    metrics: {
      recommend: "92%",
      score: "4.8/5",
      confidence: "94%",
    },
  },
];

export default function AskLucid() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const newUserMsg: Message = { id: Date.now().toString(), role: "user", content: text.trim() };
    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const newAIMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: "That's a great question. According to the data, most long-term owners agree that the software experience actually improves over time, offsetting minor hardware aging. It remains highly competitive in its category.",
      };
      setMessages((prev) => [...prev, newAIMsg]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputValue);
    }
  };

  const handleSuggestionClick = (question: string) => {
    handleSend(question);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="mx-auto mt-24 w-full max-w-6xl rounded-[32px] border border-white/[0.08] bg-[#050505] p-6 text-white shadow-2xl sm:p-12 lg:mt-32"
      style={{ fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
        .font-dossier { font-family: 'Fraunces', ui-serif, Georgia, serif; }
        .font-tag { font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace; }
      `}</style>

      <motion.div variants={itemVariants} className="flex flex-col gap-4">
        <div className="flex items-center gap-3 font-tag text-[11px] font-medium tracking-[0.22em] text-zinc-400 sm:text-xs">
          <span className="rounded-sm border border-[#6fce7b]/40 bg-[#6fce7b]/10 px-2.5 py-1 text-[#6fce7b]">EXHIBIT 07</span>
          <span>ASK LUCID</span>
        </div>
        <div>
          <h2 className="font-dossier text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Ask Lucid
          </h2>
        </div>
      </motion.div>

      <motion.div variants={itemVariants} className="mt-10 flex flex-col overflow-hidden rounded-[24px] border border-white/[0.06] bg-[#0c0c0e]">
        
        <div className="flex items-center justify-between border-b border-white/[0.04] bg-[#121214]/60 px-6 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08]">
              <Sparkles className="h-4 w-4 text-[#6fce7b]" />
              <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-[#6fce7b] shadow-[0_0_8px_rgba(111,206,123,0.8)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-tag text-[12px] font-semibold tracking-wider text-white uppercase">Lucid AI</span>
              <span className="text-[11px] text-[#6fce7b]">Knows this product</span>
            </div>
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="font-tag text-[10px] uppercase tracking-widest text-zinc-500">Based on 3,939 reviews</span>
          </div>
        </div>

        <div className="flex min-h-[400px] flex-col gap-8 overflow-y-auto p-6 sm:p-10">
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "flex w-full flex-col gap-2",
                  msg.role === "user" ? "items-end" : "items-start"
                )}
              >
                <span className={cn(
                  "font-tag text-[10px] font-semibold tracking-widest uppercase",
                  msg.role === "user" ? "text-zinc-500" : "text-[#6fce7b]"
                )}>
                  {msg.role === "user" ? "Question" : "Analysis"}
                </span>
                
                <div className={cn(
                  "max-w-[90%] sm:max-w-[80%]",
                  msg.role === "user" 
                    ? "rounded-2xl rounded-tr-sm bg-white/[0.06] border border-white/[0.04] px-5 py-4 text-[14px] sm:text-[15px] text-zinc-100" 
                    : "text-left"
                )}>
                  {msg.role === "user" ? (
                    <p className="leading-relaxed">{msg.content}</p>
                  ) : (
                    <p className="text-[15px] font-normal leading-relaxed text-zinc-300 sm:text-[16px]">
                      {msg.content}
                    </p>
                  )}
                </div>

                {msg.metrics && (
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1.5 rounded-sm border border-[#6fce7b]/20 bg-[#6fce7b]/10 px-3 py-1.5">
                      <ThumbsUp className="h-3.5 w-3.5 text-[#6fce7b]" />
                      <span className="font-tag text-[11px] font-medium tracking-wide text-[#6fce7b]">
                        {msg.metrics.recommend} Recommend
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-sm border border-white/[0.06] bg-white/[0.02] px-3 py-1.5">
                      <Sparkles className="h-3.5 w-3.5 text-zinc-400" />
                      <span className="font-tag text-[11px] font-medium tracking-wide text-zinc-300">
                        {msg.metrics.score} Score
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-sm border border-white/[0.06] bg-white/[0.02] px-3 py-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
                      <span className="font-tag text-[11px] font-medium tracking-wide text-zinc-300">
                        {msg.metrics.confidence} Confidence
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex w-full flex-col items-start gap-2"
              >
                <span className="font-tag text-[10px] font-semibold tracking-widest uppercase text-[#6fce7b]">
                  Analyzing data
                </span>
                <div className="flex items-center gap-1.5 py-2">
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0 }} className="h-2 w-2 rounded-full bg-[#6fce7b]" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} className="h-2 w-2 rounded-full bg-[#6fce7b]" />
                  <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }} className="h-2 w-2 rounded-full bg-[#6fce7b]" />
                </div>
              </motion.div>
            )}
            <div ref={messagesEndRef} />
          </AnimatePresence>
        </div>

        <div className="border-t border-white/[0.04] bg-[#121214]/60 p-4 sm:p-6">
          <div className="mx-auto w-full max-w-4xl">
            
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {suggestedQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSuggestionClick(q)}
                  disabled={isTyping}
                  className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3.5 py-2 text-[12px] text-zinc-400 transition-colors hover:border-[#6fce7b]/30 hover:text-[#6fce7b] disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>

            <div className="relative flex items-end overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0c0e] transition-colors focus-within:border-[#6fce7b]/40 focus-within:ring-1 focus-within:ring-[#6fce7b]/10">
              <textarea
                ref={textareaRef}
                value={inputValue}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="Ask Lucid anything about this product..."
                className="w-full resize-none bg-transparent py-4 pl-5 pr-14 text-[14px] text-zinc-200 placeholder:text-zinc-600 focus:outline-none disabled:opacity-50"
                rows={1}
                disabled={isTyping}
                style={{ maxHeight: "120px" }}
              />
              <div className="absolute bottom-2 right-2 flex items-center gap-2">
                <div className="hidden items-center gap-1 pr-2 text-zinc-600 sm:flex">
                  <Command className="h-3 w-3" />
                  <CornerDownLeft className="h-3 w-3" />
                </div>
                <button
                  onClick={() => handleSend(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6fce7b]/10 text-[#6fce7b] transition-all hover:bg-[#6fce7b]/20 disabled:bg-white/[0.03] disabled:text-zinc-600"
                >
                  <Send className="h-4 w-4 -translate-x-[1px] translate-y-[1px]" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </motion.div>
  );
}