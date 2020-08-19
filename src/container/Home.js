import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import { connect } from "react-redux";
import ErrorBoundary from '../component/ErrorBoundary';
import PageWrapper from '../component/PageWrapper';
import { TitleText18 } from '../component/Fonts';
import SelectionPanel from '../component/SelectionPanel';
import { Button, Snackbar } from '@material-ui/core';
import { findFalconeRequest } from '../store/actions/planets';
import constant from '../utils/constant';
import ActivityLoader from '../component/ActivityLoader';

const PannelContainer = styled.div`
   display: flex;
   flex-direction: row;
   width: 100%;
   min-height: 280px;

  @media only screen and (max-width: 768px) {
     &{
      flex-direction: column;
     }
  }
`;

const TotalCount = styled(TitleText18)`
    text-align: left;
    margin: auto 20px;
`;

const StyledBtn = styled(Button)`
&&{
  margin: 20px auto;
  display: block;
  text-transform: none;
}
`;

const Home = props => {

    const { planet, vehicle, findFalcone, history } = props;

    const [ loading, setLoading ] = React.useState(false);
    const [ snackOpen, setSnackOpen ] = React.useState(false);
    
    const getTotalTime = () => {
      let time = 0;
      for(let k in planet) {
        if(planet[k] && vehicle[k])
          time = time + (planet[k].distance / vehicle[k].speed);
      }
      return time;
    }

    const handleClick = () => {
      const data = {
        planet_names: Object.keys(planet).map(v => planet[v].name),
        vehicle_names: Object.keys(vehicle).map(v => vehicle[v].name)
      }
      setLoading(true);
      return new Promise((resolve,reject)=>
      {
        findFalcone(data, resolve, reject);
      }).then(success=>{
            history.push(constant.routes.success);
            setLoading(false);
        }
      ).catch(fail=>{
        setLoading(false);
        setSnackOpen(true);
      })
    }

    if(loading) {
      return <ActivityLoader />
    }

    return (
        <ErrorBoundary containerName="Home">
            <PageWrapper>
              <TitleText18>Select planets you want to search in:</TitleText18>
              <PannelContainer>
                <SelectionPanel index={0} />
                <SelectionPanel index={1} />
                <SelectionPanel index={2} />
                <SelectionPanel index={3} />
                <TotalCount>Time taken: {getTotalTime()}</TotalCount>
              </PannelContainer>
              <StyledBtn 
               variant="contained"
               color="primary"
               onClick={handleClick}
               disabled={Object.keys(planet).length !== 4 || Object.keys(vehicle).length !== 4}
              >
                Find Falcone!
              </StyledBtn>
            </PageWrapper>
            <Snackbar
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={snackOpen}
              onClose={() => setSnackOpen(false)}
              message="Planet not found, Please try again"
              autoHideDuration={4000}
            />
        </ErrorBoundary>
    )
}

Home.propTypes = {
  planet: PropTypes.objectOf(PropTypes.object).isRequired,
  vehicle: PropTypes.objectOf(PropTypes.object).isRequired,
}

const mapStateToProps = state => ({
    planet: state.planets.selectedPlanets,
    vehicle: state.vehicles.selectedVehicles
  });
  
// To be changed
const mapDispatchToProps = dispatch => ({
  findFalcone: (data, resolve, reject) => dispatch(findFalconeRequest(data, resolve, reject))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
