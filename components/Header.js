export function Header() {
  return (
    <header className="flex items-center px-2 h-14 border-b-2 border-b-zinc-800">
      <nav className="flex flex-1 items-center justify-between">
        <h1 className="font-bold"><span className="text-red-500">{'</> '}</span>Programming.PA</h1>
        <ul className="flex items-center gap-2">
          <li className="w-8">
            <a href="https://github.com/lucassnts963" target="_blank">
              <img src="https://img.icons8.com/sf-black-filled/64/FFFFFF/github.png"/>
            </a>
          </li>
          <li className="w-8">
            <a href="https://www.linkedin.com/in/lucas-santos-07446190/" target="_blank">
              <img src="https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png" alt="Logo LinkedIn"/> 
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}