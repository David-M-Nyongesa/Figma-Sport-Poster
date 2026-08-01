// button at the bottom of the poster, uses the cta-btn class from index.css for the hover lift
export default function ActionButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="cta-btn bg-[#3c28ec] text-white text-sm font-semibold uppercase tracking-wide px-6 py-3 rounded-full hover:bg-[#23068b]"
    >
      {label}
    </button>
  );
}