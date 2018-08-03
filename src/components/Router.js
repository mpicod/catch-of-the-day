import React from 'react'; 
// même si on utilise pas directement react ici, on utilise JSX donc on doit importer react
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import StorePicker from "./StorePicker";
import App from './App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            {/* Quand le chemin match exactement la racine, on charge le coposant StorePicker */}
            <Route path="/store/:storeId" component={App}/>
            <Route  component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Router;