import styled from "styled-components";
import { selectBasket } from "../app/slices/basket.slice";
import { useSelector } from "react-redux";

const Cart = () => {
    const basketItems = useSelector(selectBasket);
    return ( 
        <div>
            <CartContainer>
                {
                    basketItems.length > 0 &&
                    basketItems.map((item)=>{
                        return(
                            <ItemCard key={item.name}>
                                {item.name}
                            </ItemCard>
                        )
                    })
                }
            </CartContainer>
        </div>
    );
}

const CartContainer = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

const ItemCard = styled.div`
    border: 1px solid purple;
    background-color: white;
    box-shadow: 1px 1px 3px;
`;
export default Cart;