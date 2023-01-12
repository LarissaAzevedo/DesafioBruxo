import styled from "styled-components"
import logo from '../../assets/2185221.png'

export const Header = ({ title }) => {
    return (
        <HeaderWrapper>
            <header>
                <img src={logo} alt="Óculos-Harry-Potter" />
                <h1>{title}</h1>
            </header>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
    background-color: var(--secondary-color);
    box-shadow: 0 4px 8px rgba(255, 255, 255, .150);
    padding: 1rem;

    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        img {
            max-width: 3%;
        }

        h1 {
            color: var(--white);
            font-family: 'Comforter Brush', cursive;
            letter-spacing: 3px;
            font-weight: 400;
            font-size: 3rem;
        }
    }
`