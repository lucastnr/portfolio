"use client";
import { motion } from "framer-motion";
import { HTMLProps, useEffect, useState } from "react";

interface TypedAnimationProps extends HTMLProps<HTMLParagraphElement> {
  children: string;
  ms?: number;
}

export function TypedAnimation({
  children,
  ms = 50,
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

      return children.slice(0, prev.length + 1);
    });
  }

  useEffect(() => {
    const interval = setInterval(increaseContent, ms);

    return () => clearInterval(interval);
  }, []);

  if (!content) return <p></p>;

  return (
    <p {...props}>
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
          duration: 0.65,
          repeatDelay: 0.3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline select-none tracking-tighter ml-[-5px]"
      >
        |
      </motion.p>
    </p>
  );
}
