// this controller classes maps application model to viewModel

export abstract class ViewControllerBlueprint<ApplicationState, ViewModel> {
    abstract map(state: ApplicationState): ViewModel;
}