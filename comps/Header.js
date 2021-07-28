import styled from "styled-components";
import { Menu, ShoppingBasket } from "@material-ui/icons";
import { selectBasket } from "../app/slices/basket.slice";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Header = () => {
  const basketItems = useSelector(selectBasket);
  const router = useRouter();
  const goToCart = ()=>{
    router.push("/cart");
  }
  return (
    <div>
      <HeaderContainer>
        <HeaderLeft>
          <Menu />
          <h4>Kantin</h4>
        </HeaderLeft>
        <HeaderRight>
          <RoundButton onClick={goToCart}>
            <ShoppingBasket/>
              {
                basketItems.length &&
                <span>{basketItems.length}</span>
              }
          </RoundButton>
        </HeaderRight>
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
  background-color: purple;
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
const HeaderRight = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  align-items: center;
`;

const RoundButton = styled.div`
  display: flex;
  justify-content: center;
  background-color: purple;
  padding: 10px;
  color: white;
  margin: 10px;
  border-radius: 400px;
  position: relative;
  overflow: hidden;
  > svg {
    z-index: 2;
  }
  > span {
    position: absolute;
    color: white;
    display: flex;
    justify-content: center;
    padding: 5px;
    top: -2px;
    right: 0px;
    border-radius: 400px;
    font-size: 12px;
  }
`;
export default Header;
