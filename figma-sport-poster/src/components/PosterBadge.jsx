// the role tag under the name, no underline on this one (checked figma - regular weight, 24px)
export default function Badge({ children }) {
  return (
    <span className="inline-block text-2xl font-normal uppercase text-white">
      {children}
    </span>
  );
}