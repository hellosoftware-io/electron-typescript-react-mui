import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import electronLogo from "../../../static/electron.svg";

export default function Greetings(): JSX.Element {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Grid container justifyContent="center">
        <Box component="img" src={electronLogo} width={200} height={200} />
      </Grid>
      <Typography variant="h1" textAlign="center" sx={{ mt: 8 }}>
        Electron boilerplate with TypeScript, React, and MUI
      </Typography>
      <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
        Made by HelloSoftware
      </Typography>
    </Container>
  );
}
