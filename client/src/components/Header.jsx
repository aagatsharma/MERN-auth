import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="font-bold text-xl">MERN Auth</h1>
        </Link>
        <ul className="flex gap-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          {currentUser ? (
            <>
              <Link to="/profile">
                <img
                  src={currentUser.profilePicture}
                  className="rounded-full w-7 h-7 object-cover"
                />
              </Link>
              <li>{currentUser.username}</li>
            </>
          ) : (
            <Link to="/login">
              <li>Login</li>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}
