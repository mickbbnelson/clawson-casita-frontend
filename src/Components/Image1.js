import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import EnchantedRock from '../Assets/EnchantedRock.jpg'

const Styles = styled.div`
    .EnchantedRock {
        width: 250px;
        height: 220px;
        border-radius: 25px;
    }
`;

const Image1 = () => {
    return(
    <Styles>
        <Container>
            <div className="ImageCard">
                <img src={EnchantedRock} className="EnchantedRock" alt="EnchantedRocks"/>
            </div>
        </Container>
    </Styles>
    )
}

export default Image1