// photo + the dark fade at the bottom so text stays readable
export default function ProfileImage({ src, alt }) {
  return (
    <div className="absolute top-0 left-0 right-0 h-3/5">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/0 via-black/0 to-black" />
    </div>
  );
}