import * as React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../containers/Home";

export const Router: React.StatelessComponent<{}> = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );
};
