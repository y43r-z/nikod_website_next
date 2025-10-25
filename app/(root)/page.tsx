// "use client";
// import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Box,
  TextField,
} from "@mui/material";

import TitrNikod from "./TitrNikod";

export  default  function Home() {
  console.log("is this server or client ? ");
  return (
    <Box sx={{ mt: 2 }}>
     
      <TitrNikod />

      
    </Box>
  );
}
