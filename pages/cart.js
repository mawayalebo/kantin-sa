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
                    basketItems.map(
                        (item)=>{
                            return(
                                <ItemCard key={item.name}>
                                    <MealImage>

                                    </MealImage>
                                </ItemCard>
                            )
                        }
                    )
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
    border-radius: 40px;
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

`;
const MealImage = styled.div`
    position: absolute;
    width: 250px;
    height: 250px;
    background-color: black;  
`;

const MealTitle = styled.div`
    display: flex;
    font-weight: bold;
`;
export default Cart;