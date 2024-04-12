export default function Nav() {
  return (
    <div className="navbar bg-base-100 rounded-2xl text-slate-300 bg-slate-800">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Hamza Elashry</a>
      </div>
      <div className="flex-none mr-1">
        <ul className="menu menu-horizontal px-1">
          <li>
            {" "}
            <details>
              <summary>Links</summary>
              <ul className="p-2 bg-base-100 rounded-t-none text-slate-300 bg-slate-700">
                <li>
                  <a href="https://github.com/arkseek" target="__blank">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/hamzaelashry_stuff">Instagram</a>
                </li>
                <li>
                  <a href="/projects" target="__blank">
                    Projects
                  </a>
                </li>
              </ul>
            </details>
            <li>
              <a href="/">Home</a>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
}
