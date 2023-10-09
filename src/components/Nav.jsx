import React from "react";
import { Button, Navbar } from 'flowbite-react';
import { NavLink } from "react-router-dom";

const Nav = () => {

  return (
    <div>
      <Navbar fluid rounded>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <NavLink to="/">Alex Movies</NavLink>
          </span>
        <div className="flex md:order-2">
          <Button color="blue">Get Start</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/series">Series</NavLink>
          <NavLink to="/about">About</NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
