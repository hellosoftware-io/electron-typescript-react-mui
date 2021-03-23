import { Container, Typography } from "@material-ui/core";
import React from "react";

const Greetings: React.FC = () => {
  return (
    <Container maxWidth="md">
      <img
        src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
        alt="ReactJS logo"
      />
      <Typography variant="h1">
        Electron boilerplate with TypeScript and React.
      </Typography>
    </Container>
  );
};

export default Greetings;
