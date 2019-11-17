import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ViewPool} from './buisiness_view/viewControllers/ViewPool';
import { applicationStorage } from "./buisiness_repository/PermanentStorage";
import { applicationModel } from "./model/configureStore";
import { restoreAction } from "./buisiness_logic/sagas/actions/manageSagaActions";

const startApplication = async () => {
    
    // we restore our toDos
    const {todos} = await applicationStorage.get();
    applicationModel.dispatch(restoreAction(todos));

    // we render our application
    const container = document.getElementById('app__container');
    ReactDOM.render(<ViewPool />, container);    
}

startApplication();






