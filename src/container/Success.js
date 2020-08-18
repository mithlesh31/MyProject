import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from "react-redux";
import { TitleText18 } from '../component/Fonts';
import PageWrapper from '../component/PageWrapper';
import { Button } from '@material-ui/core';
import constant from '../utils/constant';
import { resetAllRequest } from '../store/actions/planets';

const StyledBtn = styled(Button)`
&&{
  margin: 100px auto 20px;
  display: block;
  text-transform: none;
  width: fit-content;
}
`;

const Success = props => {
    const { planet, vehicle, planetFound, resetAll } = props;

    const getTotalTime = () => {
        let time = 0;
        Object.keys(planet).map(k => {
            if(planet[k] && vehicle[k])
              time = time + (planet[k].distance / vehicle[k].speed);
        })
        return time;
    }

    React.useEffect(() => {
        return () => {
            resetAll();
        }
    }, []);

    return (
        <PageWrapper>
            <TitleText18 align="center">
                Success, Congratulations on Finding Falcone, King Shan is mighty pleased
            </TitleText18>

            <TitleText18 align="center">Time Taken: {getTotalTime()}</TitleText18>
            <TitleText18 align="center">Planet Found: {planetFound}</TitleText18>

            <StyledBtn component={Link} variant="contained" color="primary" to={constant.routes.home}>
              Start Again
            </StyledBtn>
        </PageWrapper>
    )
}

Success.propTypes = {

}


const mapStateToProps = state => ({
    planet: state.planets.selectedPlanets,
    planetFound: state.planets.foundPlanet,
    vehicle: state.vehicles.selectedVehicles
  });
  
// To be changed
const mapDispatchToProps = dispatch => ({
    resetAll: () => dispatch(resetAllRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(Success);
