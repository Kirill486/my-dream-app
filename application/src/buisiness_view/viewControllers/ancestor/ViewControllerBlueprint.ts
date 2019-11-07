import { ViewBlueprint } from '../../../view/ancestor/ViewBlueprint';

// this controller classes maps application model to viewModel

export abstract class ViewControllerBlueprint<ApplicationState, ViewModel> {
    view: ViewBlueprint<ViewModel>;
    containerId: string;

    // null untill first render
    viewModel?: ViewModel;

    constructor(ViewConstructor: any, containerId: string) {
        
        this.containerId = containerId;

        this.view = new ViewConstructor(this.containerId, this.viewModel);
    }

    abstract mapToVm(state: ApplicationState): ViewModel;

    render(state: ApplicationState) {
        this.viewModel = this.mapToVm(state);
        this.view.render(this.viewModel);
    }
}