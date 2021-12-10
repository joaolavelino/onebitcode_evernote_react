import React, { Fragment, useState } from "react";
import { Navbar, Container, Column, Button, Dropdown } from "rbx";
import LogoImage from "../../assets/images/logo-white.png";
import "../../styles/header.scss";
import UserService from "../../services/users";
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user.name);

  const logOut = async () => {
    UserService.logout();
    setRedirectToHome(true);
  };

  if (redirectToHome == true) return <Navigate to={{ pathname: "/" }} />;

  return (
    <Navbar color="custom-purple" className="navbar-logged">
      <Navbar.Brand>
        <Column.Group>
          <Column size="11" offset="1">
            <Link to="/notes">
              <img src={LogoImage} />
            </Link>
          </Column>
        </Column.Group>
        <Navbar.Burger
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-menu"
        ></Navbar.Burger>
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Segment
          as="div"
          className="navbar-item navbar-end"
          align="right"
        >
          <Navbar.Item as="div">
            <Button
              className="open-button"
              color="white"
              outlined
              onClick={() => props.setIsOpen(true)}
            >
              <FontAwesomeIcon icon={faList} />
            </Button>
          </Navbar.Item>
          <Navbar.Item as="div">
            <Dropdown align="right">
              <Dropdown.Trigger>
                <Button className="button" color="white" outlined>
                  <span>{user.name} ▼</span>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu align="center">
                <Dropdown.Content>
                  <Dropdown.Item as="div">
                    <Link to="/users/edit">User Edit</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item as="div">
                    <span onClick={(e) => logOut()}>LogOut</span>
                  </Dropdown.Item>
                </Dropdown.Content>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  );
}

export default HeaderLogged;
