import {useState} from 'react';
import Link from 'next/link'

const Header = () => {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <Link href="/">
          <a class="navbar-brand">Navbar</a>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <Link href="/signup">
              <li class="nav-item active">
                <a class="nav-link">Sign Up</a>
              </li>
            </ Link>
            <Link href="/signin">
              <li class="nav-item active">
                <a class="nav-link">Sign In</a>
              </li>
            </ Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
