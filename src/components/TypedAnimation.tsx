"use client";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { HTMLProps, useEffect, useState } from "react";

interface TypedAnimationProps extends HTMLProps<HTMLParagraphElement> {
  children: string;
  ms?: number;
}

export default function CursorBlinker({ blink }: { blink: boolean }) {
  return (
    <motion.p
      initial={{ opacity: 1 }}
      animate={
        blink
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
      className="inline select-none tracking-tighter ml-[-0.2em] font-extralight"
    >
      |
    </motion.p>
  );
}

export function TypedAnimation({
  children = "",
  ms = 45,
  ...props
}: TypedAnimationProps) {
  const [mounted, setMounted] = useState(false);

  const [blinkCursor, setBlinkCursor] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.round(value));
  const displayText = useTransform(rounded, (latest) =>
    children.slice(0, latest)
  );

  useEffect(() => {
    const controls = animate(count, children.length, {
      type: "tween",
      duration: (children.length * ms) / 1000,
      onComplete: () => setBlinkCursor(true),
    });

    return controls.stop;
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return;

  return (
    <div className={`${props.className} relative`}>
      {/* This one is a clone, to make sure the size won't change while typing */}
      <p {...props} className="opacity-0 select-none">
        {children}
      </p>
      <p {...props} className="absolute top-0 left-0">
        <motion.span>{displayText}</motion.span>
        <CursorBlinker blink={blinkCursor} />
      </p>
    </div>
  );
}
