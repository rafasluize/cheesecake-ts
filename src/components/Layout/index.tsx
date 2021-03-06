import React from "react";
import Aside from "../Aside";
import Content from "../Content";
import MainHeader from "../MainHeader";

import { Container } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Aside />
      <MainHeader />
      <Content />
    </Container>
  );
};

export default Layout;
