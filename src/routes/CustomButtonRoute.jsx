import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CustomButtonRoute = ({ to, name, onclick }) => {
  return (
    <Button color="inherit" onClick={onclick}>
      <Link to={to} style={{ color: "inherit", textDecoration: "inherit" }}>
        {name}
      </Link>
    </Button>
  );
};
