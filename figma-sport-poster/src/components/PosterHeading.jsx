// used for the big name AND the small section titles, just diff props each time
export default function Heading({
  children,
  size,
  weight = "font-bold",
  color = "text-white",
  underline = false,
  className = "",
}) {
  return (
    <h2
      className={`${size} ${weight} ${color} leading-tight
        ${underline ? "border-b-2 border-[#E88F40] pb-1.5 inline-block uppercase tracking-wide" : ""}
        ${className}`}
    >
      {children}
    </h2>
  );
}