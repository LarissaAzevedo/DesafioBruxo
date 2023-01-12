import styled from "styled-components"

export const Card = ({ character }) => {

    return (
        <CardWrapper>
            <div className="card-header">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="card-body">
                <div className="data">
                    <span>Name - <strong>{character.name}</strong></span>
                    <span>House - 
                        {
                            character.house == "Gryffindor" && <strong style={{backgroundColor: '#B20506', padding: '0.2rem'}}>{character.house}</strong>
                        }
                        {
                            character.house == "Slytherin" && <strong style={{backgroundColor: '#008B32', padding: '0.2rem'}}>{character.house}</strong>
                        }
                        {
                            character.house == "Hufflepuff" && <strong style={{backgroundColor: '#DECF0F', padding: '0.2rem'}}>{character.house}</strong>
                        }
                        {
                            character.house == "Ravenclaw" && <strong style={{backgroundColor: '#113174', padding: '0.2rem'}}>{character.house}</strong>
                        }
                    </span>
                    <span>Ancestry - <strong>{character.ancestry == '' ? 'Not Available' : character.ancestry}</strong></span>
                </div>
            </div>
        </CardWrapper>
    )
}

const CardWrapper = styled.div`
    max-width: 220px;
    width: 100%;
    height: 300px;
    border-radius: 5px;
    background-color: var(--secondary-color);
    box-shadow: 0 4px 8px rgba(255, 255, 255, .150);

    .card-header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;

        img {
            max-width: 100%;
            height: 200px;
            margin-top: -2rem;
            border-radius: 5px;
            box-shadow: 0 4px 8px rgba(255, 255, 255, .150);
        }
    }

    .card-body {
        .data {
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 0.5rem;
            font-family: 'Sofia Sans', sans-serif;
            color: var(--white);
        }
    }
`