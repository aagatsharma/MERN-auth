import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="font-bold text-xl">MERN Auth</h1>
        </Link>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
}
