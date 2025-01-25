import styled from "styled-components";
import logo from "../assets/images/kero_logo_header.jpg";
const Header = () => {
  return (
    <GlobalHeader>
      <Logo src={logo} alt="로고이미지" />
    </GlobalHeader>
  );
};

export const GlobalHeader = styled.header`
  width: 100%;
  height: 52px;
  padding: 10px 0;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #fefefe;

  font-family: "Pretendard-Regular";
  color: #066f40 !important;
`;

export const Logo = styled.img`
  width: 7rem;
  margin-right: 7px;
`;

export default Header;
