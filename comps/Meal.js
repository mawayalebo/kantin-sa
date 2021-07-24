import styled from "styled-components";
import { useRouter } from "next/router";

const Meal = ({meal}) => {
    const router = useRouter();
    const pushFoward = (mealId)=>{
        router.push("/meal/"+mealId);
    }
    return (
        <div onClick={(e)=>{
            e.preventDefault()
            pushFoward(meal.name)
        }}>
            <CardContainer className="hoverable">
                <CardTop>
                    <div>
                        <img className="responsive-img"src="https://www.tasteofhome.com/wp-content/uploads/2020/03/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg" alt=""/>
                    </div>
                </CardTop>
                <CardMiddle className="">
                    <MealName>
                        <p className="truncate">{meal.name}</p>
                    </MealName>
                    <MealContent>
                        <ContentLeft>
                            <MealPrice><p>R{meal.price}</p></MealPrice>
                        </ContentLeft>
                        <ContentRight>
                            <MealTag className="truncate">{meal.category}</MealTag>
                            <CookTime>{meal.cookTime} min</CookTime>
                        </ContentRight>
                    </MealContent>
                    <MealFooter>
                        <CanteenName>Mulink</CanteenName>
                    </MealFooter>
                </CardMiddle>
            </CardContainer>
        </div>
     );
}
const CardContainer = styled.div`
    display: flex;
    border: solid purple 2px;
    border-radius: 20px;
    flex-direction: column;
    width: 200px;
    /*box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.6) ;*/
    margin: 10px 0px;
`;
const CardTop = styled.div`
    align-items: center;
    > div {
        object-fit: contain;
        border-radius: 20px 20px 0px 0px;
        overflow: hidden;
        height: 150px;
    }
`;
const CardMiddle= styled.div`
    display: flex;
    flex-direction: column;
`;

const MealName = styled.div`
    padding: 10px;
    padding-bottom: 0px;
    > p {
        margin: 0;
        font-weight: bold;
        font-size: 20px;
        color: black;
    }

`;

const MealContent = styled.div`
 display: flex;
 flex-direction: row;
 padding: 0px 10px 0px 10px;
`;
const ContentRight = styled.div`
 display: flex;
 flex: 0.5;
 flex-direction: column;
 object-fit: contain;
 padding: 10px;
 align-items: center;
`
const ContentLeft = styled.div`
    flex: 0.5;
    object-fit: contain;
`;
export const MealPrice = styled.div`
    object-fit: contain;
    > P {
        color: red;
        margin: 0px !important;
        font-size: 30px;
        font-weight: bold;
    }
`;
const MealTag = styled.div`
    display: flex;
    background-color: purple;
    color: white;
    border-radius: 20px;
    justify-content: space-evenly;
    object-fit: contain;
    width: 100%;
    padding: 0px 5px;
`;

export const CookTime = styled.div`
    color: purple;
`;

const MealFooter = styled.div`
 display:flex;
 justify-content: space-evenly;
`;

const CanteenName = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: rgb( 230, 230, 230);
    border-top-left-radius: 1000px;
    border-top-right-radius: 1000px;
    object-fit: contain;
    width: 50%;
    color: black;
`;


export default Meal;