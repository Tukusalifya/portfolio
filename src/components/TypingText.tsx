import { useEffect, useState } from "react";
export function TypingText({
  text,
  speed = 45,
}: {
  text: string;
  speed?: number;
}) {
  const [shown, setShown] = useState("");
  useEffect(() => {
    let i = 0;
    const timer = window.setInterval(() => {
      i++;
      setShown(text.slice(0, i));
      if (i === text.length) window.clearInterval(timer);
    }, speed);
    return () => window.clearInterval(timer);
  }, [text, speed]);
  return (
    <span>
      {shown}
      <span
        className="ml-0.75 inline-block h-[1.1em] w-px align-[-2px] animate-[blink_900ms_steps(1)_infinite] bg-ink"
        aria-hidden="true"
      />
    </span>
  );
}
