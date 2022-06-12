import styled from 'styled-components'

const Styles = styled.div`

    .aboutDiv {
        background-color:  #C2B280;
    }
`;

const About = () => {
    return(
        <Styles>
        <div className='aboutDiv'>
            <h1>About</h1>
        </div>
        </Styles>
    )
}

export default About