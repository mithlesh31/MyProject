import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import styled from "styled-components";
import Select from '../component/Select';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { selectPlanet } from '../store/actions/planets';
import { selectVehicle } from '../store/actions/vehicles';
import { Card } from '@material-ui/core';

const SelectionPanelWrapper = styled(Card)`
   flex: 1;
   margin: 10px;
   padding: 10px;
`;

const SelectionPanel = props => {
    const { planetList, vehicleList, index, planetSelect, vehicleSelect, planet, vehicle } = props;
    const [planetOption, changePlanetOption] = React.useState(planetList);
    const [vehicalOption, changeVehicalOption] = React.useState(vehicleList);
    let distance, vehicleValue, planetValue;

    React.useEffect(() => {
        const tmpOption = planetList.filter(v => {
            let tmpBool = false;
            for(let key in planet) {
                if(tmpBool)
                   break;
                if(planet.hasOwnProperty(key) && key != index)
                   tmpBool = planet[key] && planet[key].name === v.name
            }
            return !tmpBool;
        })
        changePlanetOption(tmpOption);
        return () => {}
    }, [planetList, planet]);

    React.useEffect(() => {
        const tmpOption = vehicleList.map(v => {
            let tmpCount = v.total_no;
            for(let key in vehicle) {
                if(vehicle.hasOwnProperty(key) && key <= index && vehicle[key] && v.name === vehicle[key].name) {
                    tmpCount = tmpCount - 1;     
                }
            };
            return ({...v, total_no: tmpCount});
        })
        changeVehicalOption(tmpOption);
        return () => {}
    }, [vehicleList, vehicle])

    const handleChange = (event) => {
        const vehicleItem = vehicleList.filter(item => item.name === event.target.value)[0];
        vehicleSelect(vehicleItem, index);
    };
    
    const handlePlanetChange = (event) => {
        const planetItem = planetList.filter(item => item.name === event.target.value)[0];
        planetSelect(planetItem, index);
    }

    if(planet && planet[index]) {
        planetValue = planet[index];
        distance = planetValue && planetValue.distance;
    }

    if(vehicle && vehicle[index]) {
        vehicleValue = vehicle[index];
    }
    return (
        <SelectionPanelWrapper raised={Object.keys(vehicle).length == index}>
            <Select label={`Destination ${index + 1}`} value={planetValue ? planetValue.name : ""} labelKey="name" valueKey="name" options={planetOption} onChange={handlePlanetChange}/>
            {planetValue && <FormControl component="fieldset">
                <RadioGroup aria-label="gender" name="vehicle" value={vehicleValue && vehicleValue.name} onChange={handleChange}>
                    {vehicalOption.map(v => {
                       const remaining = v.total_no;
                       return <FormControlLabel value={v.name} disabled={(!(vehicleValue && v.name === vehicleValue.name) && v.total_no <= 0) || v.max_distance < distance} control={<Radio />} label={`${v.name} (${remaining})`} />
                    })}
                </RadioGroup>
            </FormControl>}
        </SelectionPanelWrapper>
    )
}

SelectionPanel.propTypes = {

}

const mapStateToProps = state => ({
    planetList: state.planets.planetList,
    vehicleList: state.vehicles.vehicleList,
    planet: state.planets.selectedPlanets,
    vehicle: state.vehicles.selectedVehicles
  });
  
// To be changed
const mapDispatchToProps = dispatch => ({
    planetSelect: (name, index) => dispatch(selectPlanet(name, index)),
    vehicleSelect: (name, index) => dispatch(selectVehicle(name, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectionPanel);
