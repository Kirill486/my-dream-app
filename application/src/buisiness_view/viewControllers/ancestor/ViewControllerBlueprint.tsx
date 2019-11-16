import * as React from 'react';
import * as ReactDOM from 'react-dom'
// this controller classes maps application model to viewModel

export abstract class ViewControllerBlueprint<ApplicationState, ViewModel> {
    view: React.FunctionComponent<ViewModel>;
    containerId: string;

    // null untill first render
    viewModel?: ViewModel;

    constructor(view: React.FunctionComponent<ViewModel>, containerId: string) {
        
        this.containerId = containerId;

        this.view = view;
    }

    abstract mapToVm(state: ApplicationState): ViewModel;

    render(state: ApplicationState) {
        const container = this.getCOntainer();
        const props = this.mapToVm(state);

        const Component:React.FunctionComponent<ViewModel> = this.view;
        const jsx = (
            <Component {...props}/>
        );
        ReactDOM.render(jsx, container);
    }

    private getCOntainer() {
        return document.querySelector(`#${this.containerId}`);
    }
}