import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import {data} from "../../mockdata/meals";
import { useEffect } from "react";
import { Close } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../app/slices/basket.slice";

const Meal = () => {
    const router = useRouter();
    const meal = data.filter((meal)=>{
        return meal.name == router.query.id;
    });

    const dispatch = useDispatch();

    const addItemToBasket = (e)=>{
        e.preventDefault();
        dispatch(addToBasket(meal));
        router.push("/");
        alert("Meal Added to Basket");
    }

    return (
        <div>
            {
                meal && meal.map(
                    (meal)=>(
                        <Container key={meal.name}>
                            <MealImage width="250" height="250" src={meal.image}/>
                            <MealContent>
                                <MealName>
                                    {meal.name}
                                </MealName>
                                <MealPrice>
                                    R{meal.price}
                                </MealPrice>
                                <MealIncludes>
                                {console.log(meal.includes)}
                                    {
                                        meal && 
                                            meal.includes.map((item)=>(
                                                <IncludeItem key={item}>
                                                <span>{item}</span>
                                                <RemoveInclude/>
                                                </IncludeItem>
                                            ))
                                    }
                                </MealIncludes>
                                <CartButton onClick={addItemToBasket} className="waves-effect waves-light">Add to cart</CartButton>
                            </MealContent>
                        </Container>
                    )
                )
            }
        </div>
     );
}


const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 20px;
    flex-direction: column;
`;

const MealImage = styled(Image)`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 350px;
    object-fit: contain;

`;

const MealContent = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;


`;
const MealName = styled.span`
    font-weight: bold;
    font-size: 30px;
`;
const MealPrice = styled.div`
    font-weight: bold;
    font-size: 60px;
    margin : 0;
    color: orangered;
`;
const MealIncludes = styled.div`
    display: flex;
    padding: 10px;
    flex-flow: column wrap;
    flex-direction: row;

`;

const IncludeItem = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgb(200,200,200);
    padding: 5px;
    margin: 5px;
    flex-flow: row nowrap;
`;
const RemoveInclude = styled(Close)`
    color: purple;
    cursor: pointer;
`;

const CartButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 100%;
    background-color: purple;
    color: white;
    border-radius: 40px;
    height: 50px;
    cursor: pointer;
`;



export default Meal;