"use client";
import { motion } from "framer-motion";
import { HTMLProps, useEffect, useState } from "react";

interface TypedAnimationProps extends HTMLProps<HTMLParagraphElement> {
  children: string;
  ms?: number;
}

export function TypedAnimation({
  children = "",
  ms = 45,
  ...props
}: TypedAnimationProps) {
  const [content, setContent] = useState("");
  const [blinkCursor, setBlinkCursor] = useState(false);

  function increaseContent() {
    setContent((prev) => {
      if (prev.length === children.length) {
        setBlinkCursor(true);
        return prev;
      }

      const nextIndex = prev.length;
      return prev + children.charAt(nextIndex);
    });
  }

  useEffect(() => {
    const interval = setInterval(increaseContent, ms);

    return () => clearInterval(interval);
  }, []);

  if (!content) return <p></p>;

  return (
    <div className={`${props.className} relative`}>
      {/* This one is a clone, to make sure the size won't change while typing */}
      <p {...props} className="opacity-0 select-none">
        {children}
      </p>
      <p {...props} className="absolute top-0 left-0">
        {content}
        <motion.p
          initial={{ opacity: 1 }}
          animate={
            blinkCursor
              ? {
                  opacity: [1, 0, 1],
                }
              : false
          }
          transition={{
            duration: 0.6,
            repeatDelay: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="inline select-none tracking-tighter ml-[-0.2em]"
        >
          |
        </motion.p>
      </p>
    </div>
  );
}
