import styled from "styled-components";
import { Menu } from "@material-ui/icons";
const Header = () => {
  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <Menu />
          <h4>Kantin</h4>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </HeaderContainer>
    </div>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderLeft = styled.div`
  background-color: rgb(13, 13, 13);
  padding: 10px;
  padding-right: 30px;
  border-radius: 0px 400px 400px 0px;
  color: white;
  margin-top: 10px;
  > h4 {
    margin: 0;
  }
  > svg {
    margin-right: 10px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HeaderRight = styled.div``;

export default Header;
