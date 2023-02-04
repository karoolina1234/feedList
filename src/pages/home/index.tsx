import React from "react";
import AddComponent from "../../components/addComponent/add";
import Header from "../../components/header/header";
import List from "../../components/list/list";
import * as S from './style'
const Home = () =>{

    return(
        <S.Content>
            <Header/>
            <AddComponent/>
            <List/>
        </S.Content>
       
    )
}

export default Home;