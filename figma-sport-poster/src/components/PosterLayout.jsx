// wraps everything - black bg + the two columns
export default function Layout({ children }) {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center p-5 sm:p-10">
      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] max-w-205 w-full bg-black">
        {children}
      </div>
    </div>
  );
}
//children is a special prop that every component receives automatically. 
//Azin everything between <PosterLayout></PosterLayout> in App.jsx shows inside that component as children.
