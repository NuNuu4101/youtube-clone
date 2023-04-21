import { Opacity } from "@mui/icons-material"
import { Stack } from "@mui/material"
import zIndex from "@mui/material/styles/zIndex"
import { Link } from "react-router-dom"

import { logo } from "../utils/constants"
import SearchBar from "./SearchBar"

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      zIndex: '300',
      Opacity:'0.35'
    }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar
