import styled from "styled-components"
import { Container } from "@mui/system"
import { Card } from "../Card"
import { useEffect, useState } from "react"
import { fetchCharacters } from "../../services/api"
import LoadingSpinner from "../LoadingSpinner"
import { Box, Button } from "@mui/material"

export const Cards = () => {

    const [characters, setCharacters] = useState([])

    const getCharacters = async () => {
        const data = await fetchCharacters()
        setCharacters(data)
    }

    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <Container sx={{marginTop: '4rem'}}>
            <CardsWrapper>
                {
                    characters.length == 0 && <LoadingSpinner />
                }
                {
                    characters.map((character) => {
                        return (
                            <Card character={character} key={character.id} />
                        )
                    })
                }
            </CardsWrapper>

            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '2rem'
                }}
            >
                <Button variant="contained" color="inherit" sx={{fontWeight: 700}}>SHow More Characters</Button>
            </Box>
        </Container>
    )
}

const CardsWrapper = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
`