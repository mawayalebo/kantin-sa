import styled from "styled-components";
import { selectBasket } from "../app/slices/basket.slice";
import { useSelector } from "react-redux";
import Image from "next/image";
import { Close } from "@material-ui/icons";

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
                                    <MealImage src={item.image} width={50} height={50}/>
                                    <MealContent>
                                        <span>{item.name}</span>
                                    </MealContent>
                                    <MealFunctions>
                                        <CloseFunction/>
                                    </MealFunctions>
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
    align-items: center;

`;
const MealImage = styled(Image)`
`;

const MealTitle = styled.div`
    display: flex;
    font-weight: bold;
`;

const MealContent = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;

`;

const MealFunctions = styled.div`
    display: flex;
    justify-self: flex-end;
    justify-content: flex-end;

`;

const CloseFunction = styled(Close)`
    color: purple;
`;
export default Cart;