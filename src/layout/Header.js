export default function Header() {
    return(
     <nav>
        <div className="movie__nav nav-wrapper blue lighten-2">
          <a href="#" className="brand-logo">React App</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Movies</a></li>
          </ul>
       </div>
    </nav>
    )
}