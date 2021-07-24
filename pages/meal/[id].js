import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

const Meal = () => {
    const router = useRouter();
    return ( 
        <Container>
            <MealImage>
            </MealImage>
            <MealContent>
                <MealName>
                </MealName>
                <MealPrice>
                </MealPrice>
                <MealIncludes>
                </MealIncludes>
            </MealContent>
        </Container>
     );
}


const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    padding: 20px;
`;

const MealImage = styled(Image)`

`;

const MealContent = styled.div`

`;
const MealPrice = styled.div`

`;
const MealIncludes = styled.div`

`;




export default Meal;