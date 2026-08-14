export function SectionEyebrow({
  text,
  color = "signal-teal",
}: {
  text: string;
  color?: "signal-teal" | "tag-crimson";
}) {
  return (
    <p
      className={`mb-4 font-mono text-xs font-bold ${color === "signal-teal" ? "text-signal-teal" : "text-tag-crimson"}`}
    >
      ~/ $ {text}
    </p>
  );
}
