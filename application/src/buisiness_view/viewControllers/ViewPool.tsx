import * as React from 'react';
import {TitleHOC} from './TitleViewController';
import {ToDoListHOC} from './ToDoListViewController';
import {ToDoDetailsHOC} from './ToDoDetailsViewController';
import { Provider } from 'react-redux';
import {applicationModel} from '../../model/configureStore'

export const ViewPool: React.FunctionComponent =
() => (
    <div className="application">
        <Provider store={applicationModel}>
            <TitleHOC />
            <ToDoListHOC />
            <ToDoDetailsHOC />
        </Provider>        
    </div>
);