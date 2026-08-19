import { motion } from "framer-motion";

export default function FloatingDots({ count = 45 }) {
  const dots = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 2.5 + 1,
    opacity: Math.random() * 0.4 + 0.1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * -15,
    x: (Math.random() - 0.5) * 40,
    y: (Math.random() - 0.5) * 40,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {dots.map((dot) => (
        <motion.span
          key={dot.id}
          initial={{
            x: 0,
            y: 0,
            opacity: dot.opacity,
          }}
          animate={{
            x: [0, dot.x, 0],
            y: [0, dot.y, 0],
            opacity: [
              dot.opacity,
              Math.min(dot.opacity + 0.2, 0.65),
              dot.opacity,
            ],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
          }}
        />
      ))}
    </div>
  );
}