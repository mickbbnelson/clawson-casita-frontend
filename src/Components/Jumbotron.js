import styled from 'styled-components'
import FoodTruck from '../Assets/FoodTrucks.jpg'

const Styles = styled.div`
.container-fluid  {
    background: url(${FoodTruck}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
}
`;


const Jumbotron = () => {
        return(
        <Styles>
	        <div className="container-fluid bg-light p-5">
            <p>Clawson Casita</p>
	        <h2></h2>
	        <p className="lead">Affordable Monthly Rentals for Traveling Professionals</p>
	        <hr className="my-4"/>
	        <p>Right in South Austin</p>
	        <a className="btn btn-primary btn-lg" href="/fronthouse" role="button">View Homes</a>
	        </div>
        </Styles>
    )
}

export default Jumbotron