import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  const classes = {
    nav: {
      height: "65px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: "0 30px",
    },
    h1: {
      color: "rgb(46 46 46)",
    },
    link: {
      textDecoration: "none",
      margin: "0 20px",
      fontSize: "20px",
    },
  };

  return (
    <nav style={classes.nav}>
      <Link to="/" style={classes.link}>
        <h1 style={classes.h1}>Psychonauts</h1>
      </Link>
      <Box flexDirection="row" justifyContent="center" alignItems="center">
        <Link to="/favorites" style={classes.link}>
          My Favorites
        </Link>
        <AccountCircleIcon fontSize="large" />
      </Box>
    </nav>
  );
}
