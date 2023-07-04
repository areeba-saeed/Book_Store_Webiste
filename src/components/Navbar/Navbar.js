import React, { useState } from "react";
import "./navbar.css";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/circles.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([
    { id: 1, bookName: "Book 1", author: "Author 1" },
    { id: 2, bookName: "Book 2", author: "Author 2" },
    { id: 3, bookName: "Book 3", author: "Author 3" },
    { id: 4, bookName: "Book 4", author: "Author 4" },
    { id: 5, bookName: "Book 5", author: "Author 5" },
  ]);

  const filteredSuggestions = suggestions.filter((item) => {
    const bookName = item.bookName.toLowerCase();
    const authorName = item.author.toLowerCase();
    const search = searchTerm.toLowerCase();

    return bookName.includes(search) || authorName.includes(search);
  });
  return (
    <div>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={classes.title}
            color="inherit">
            <img
              src={logo}
              alt="Book Store App"
              height="50px"
              className={classes.image}
            />
            <strong>BOOKERIA</strong>
          </Typography>

          {location.pathname === "/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/cart"
                aria-label="Show cart items"
                color="inherit">
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
