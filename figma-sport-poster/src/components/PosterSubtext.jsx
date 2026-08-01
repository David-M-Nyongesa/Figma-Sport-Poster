// does most of the work on the poster - about text, strength, expertise,
// main focus blocks, accolades... all reuse this same component
export default function Subtext({
  label,
  children,
  textClassName = "text-gray-700",
  labelClassName = "text-black",
}) {
  return (
    <div>
      {label && (
        <h4 className={`text-sm font-bold mb-1.5 ${labelClassName}`}>
          {label}
        </h4>
      )}
      <div className={`text-sm leading-relaxed ${textClassName}`}>
        {children}
      </div>
    </div>
  );
}