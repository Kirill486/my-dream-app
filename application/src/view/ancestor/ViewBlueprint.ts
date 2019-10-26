export abstract class ViewBlueprint<ViewModel> {

    abstract templateId: string;
    viewModel: ViewModel;
    containerId: string;

    constructor(
        containerId:string, 
        initialViewModel: ViewModel,
        ) {
        this.containerId = containerId;
        this.viewModel = initialViewModel;
    }

    abstract mapViewModel(viewRoot: HTMLElement): void;

    public render(model: ViewModel = null): void {
        // if model we do update model
        if (model) {
            this.setViewModel(model);
        }

        const viewEntry = document.getElementById(this.templateId);
        if (viewEntry) {
            this.mapViewModel(viewEntry);
        } else {
            throw new Error(`Template not found id = ${this.templateId}`);
        }

        const container = document.getElementById(this.containerId);
        if (container) {
            container.appendChild(viewEntry);
        } else {
            throw new Error(`Container is not found id = ${this.containerId}`);
        }

    }

    public setViewModel(model: ViewModel): void {
        this.viewModel = model;        
    };
}