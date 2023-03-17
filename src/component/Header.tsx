import { AppBar, Toolbar } from "@mui/material";
import { LOGO } from "../assets/images";

const Header: React.FC = () => {
  return (
    <div>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <img src={LOGO} alt="logo" style={{ width: 120 }} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
