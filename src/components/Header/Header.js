import React from 'react';
import Messages from '../Messages/Messages';
import Annonces from '../Annonces/Annonces';
import Profil from '../Profil/Profil';
import { NavLink } from 'react-router-dom';

const Header =() => {

   return(

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Le Boncoin</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <a class="nav-link">
      <NavLink to="/">Accueil</NavLink>
      </a>
      </li>
      <li class="nav-item">
      <a class="nav-link">
      <NavLink to="/profile">Profile</NavLink>
      </a>
      </li>
      <li class="nav-item">
      <a class="nav-link">
      <NavLink to="/messages">Messages</NavLink>
      </a>
      </li>
      <li class="nav-item">
      <a class="nav-link">
      <NavLink to="/annonces">Annonces</NavLink>
      </a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
   );
}

export default Header;