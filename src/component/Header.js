import React from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from "react-router-dom";
import { LinkText, BoldText44 } from './Fonts';
import constant from "../utils/constant";
import store from '../store/store';
import { resetAllRequest } from '../store/actions/planets';

const Header = props => {
    const history = useHistory();
    return (
        <div>
            <div style={{display: "flex"}}>
                <div style={{flex: 1}}/>
                <LinkText onClick={() => {
                    store.dispatch(resetAllRequest());
                    history.push(constant.routes.home);
                }} >Reset</LinkText>
                <LinkText as="a" href={constant.geekTrustHome}>Geek Trust Home</LinkText>
            </div>
            <BoldText44 align="center">Finding Falcone</BoldText44>
        </div>
    )
}

Header.propTypes = {

}

export default Header
