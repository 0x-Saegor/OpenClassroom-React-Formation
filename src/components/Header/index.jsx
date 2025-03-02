import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DarkLogo from "../../assets/dark-logo.png";
import LightLogo from "../../assets/light-logo.png";
import colors from "../../utils/style/colors";
import { useTheme } from "../../utils/hooks";

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

const CustomDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function Header() {
  const location = useLocation();

  const {theme} = useTheme()

  return (
    <CustomDiv>
      <img src={theme === 'light' ? DarkLogo : LightLogo} alt="Logo" />
      <nav>
        <StyledLink to="/" $isFullLink={location.pathname === "/"}>
          Accueil
        </StyledLink>
        <StyledLink
          to="/freelances"
          $isFullLink={location.pathname === "/freelances"}
        >
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink={location.pathname.startsWith("/survey/")}>
          Faire le test
        </StyledLink>
      </nav>
    </CustomDiv>
  );
}

export default Header;
