import Head from 'next/head'
import styled from "styled-components";
import { ShoppingBasket, Menu } from "@material-ui/icons";
import Banner from "../comps/Banner";
import Meals from "../comps/Meals";
export default function Home() {
  return (
    <div>
      <Meals/>
    </div>
  )
}

