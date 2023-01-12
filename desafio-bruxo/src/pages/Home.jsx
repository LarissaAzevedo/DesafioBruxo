import React from "react"
import { Cards } from "../components/Cards"
import { Header } from "../components/Header"

export const Home = () => {
    return (
        <React.Fragment>
            <Header title="Desafio Bruxo"/>
            <Cards />
        </React.Fragment>
    )
}