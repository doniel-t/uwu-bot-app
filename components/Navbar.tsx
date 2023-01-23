export default function Navbar() {
  return (
    <>
    <div
      className="navbar fixed top-0 left-0 right-0 z-10 mb-4 bg-[#1d1e2b] bg-opacity-30 
        drop-shadow-lg backdrop-blur-[60px] backdrop-filter">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#textCommandContainer">Text based Commands</a>
            </li>
            <li>
              <a href="#nonTextCommandContainer">Based Commands</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a href="#home" className="btn btn-ghost text-xl normal-case">
          UwU-Bot
        </a>
      </div>
      <div className="navbar-end">
      </div>
    </div>
    </>
  );
}
