import styled from "styled-components";
import { data } from "../mockdata/meals";
import Meal from "./Meal";

const Meals = () => {
    return ( 
        <Container>
        { data &&
            data.map((meal)=>{
                return(
                    <Meal meal={meal} key={meal.name}/>
                )
            })
        }
        </Container>
     );
}


const Container = styled.div`
    display: flex;
    padding: 5px 10px;
    flex-flow: column wrap;
    flex-direction: row;
    justify-content: space-evenly;
`;

export default Meals;