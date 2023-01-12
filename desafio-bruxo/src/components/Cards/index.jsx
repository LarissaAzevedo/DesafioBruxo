import styled from "styled-components"
import { useEffect, useState } from "react"
import { Card } from "../Card"
import { Container } from "@mui/system"
import { fetchCharacters } from "../../services/api"
import { LoadingSpinner } from "../LoadingSpinner"
import { Box, Button } from "@mui/material"
import { Select } from "../Select"

export const Cards = () => {

    const [characters, setCharacters] = useState([])
    const [maxCharacters, setMaxCharacters] = useState(10)

    const getCharacters = async () => {
        const data = await fetchCharacters()
        setCharacters(data.slice(0, maxCharacters))
    }
    
    useEffect(() => {
        getCharacters()
        
    }, [maxCharacters])

    return (
        <Container sx={{marginTop: '4rem'}}>

            <Select />

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
                <Button 
                    variant="contained" 
                    color="inherit" 
                    sx={{fontWeight: 700}}
                    onClick={() => setMaxCharacters(maxCharacters + 10)}
                >
                    Exibir Mais
                </Button>
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
    margin-top: 4rem;
`