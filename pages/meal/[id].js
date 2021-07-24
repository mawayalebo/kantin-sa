import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";
import {data} from "../../mockdata/meals";
import { useEffect } from "react";
import { Close } from "@material-ui/icons";
const Meal = () => {
    const router = useRouter();
    const meals = data.filter((meal)=>{
        return meal.name == router.query.id;
    });

    return (
        <div>
            {
                meals && meals.map(
                    (meal)=>(
                        <Container>
                            <MealImage>
                            </MealImage>
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
                                            meal.includes.map((item, index)=>(
                                                <IncludeItem key={index}>
                                                <span>{item}</span>
                                                <RemoveInclude/>
                                                </IncludeItem>
                                            ))
                                    }
                                </MealIncludes>
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
    flex-direction: column;w
`;

const MealImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 350px;
    object-fit: contain;
    background-color: black;

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




export default Meal;