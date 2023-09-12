import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const CustomButtonRoute = ({ to, name }) => {
  return (
    <Button color="inherit">
      <Link to={to} style={{ color: "inherit", textDecoration: "inherit" }}>
        {name}
      </Link>
    </Button>
  );
};
