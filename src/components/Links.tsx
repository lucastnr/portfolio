"use client";
import { motion } from "framer-motion";

interface LinkItemProps {
  href: string;
  children: string;
}

function LinkItem({ href, children }: { href: string; children: string }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-txt-tertiary"
      whileHover={{ scale: 1.1, filter: "brightness(1.4)" }}
      whileTap={{ scale: 1.1, filter: "brightness(1.4)" }}
    >
      {children}
    </motion.a>
  );
}

const items: LinkItemProps[] = [
  { href: "mailto:lucas.ol.tnr@gmail.com", children: "Email" },
  { href: "https://github.com/lucastnr", children: "Github" },
  { href: "/resume.pdf", children: "Resume" },
  { href: "https://linkedin.com/in/lucastnr/", children: "LinkedIn" },
];

export function Links() {
  return (
    <div className="flex gap-5 gap-y-3 flex-wrap">
      {items.map((props, index) => (
        <LinkItem key={index} {...props} />
      ))}
    </div>
  );
}
