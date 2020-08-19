import React, { useEffect } from 'react'
import { Route, Switch } from "react-router-dom";
import store from '../store/store';
import loadable from '../utils/loadable';
import { fetchVehiclesRequest } from '../store/actions/vehicles';
import { fetchPlanetsRequest } from '../store/actions/planets';
import constant from '../utils/constant';

const Home = loadable(() => import('./Home'));
const Success = loadable(() => import('./Success'));

const Main = props => {

    useEffect(() => {
        store.dispatch(fetchVehiclesRequest());
        store.dispatch(fetchPlanetsRequest());
        return () => {}
    }, [])

    return (
        <div style={{minHeight: "calc(100vh - 164px)"}}>
          <Switch >
            <Route exact path={constant.routes.home} component={Home} />
            <Route exact path={constant.routes.success} component={Success} />
          </Switch>
        </div>
    )
}

Main.propTypes = {

}

export default Main;
