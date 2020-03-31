import React, { useContext } from "react";
import { Button } from "antd";
import styled from "styled-components";

import { ThemeContext } from "../../context/theme/global.theme.provider";

const StyledBtn = styled(Button)`
  width: 150px;
  color: ${props => (props.color ? props.color : null)};
`;

const HomePage = () => {
  const themeConfig = useContext(ThemeContext);

  return (
    <>
      <h1>This is home-page</h1>
      <StyledBtn type="dashed">Dashed</StyledBtn>
    </>
  );
};

export default HomePage;
