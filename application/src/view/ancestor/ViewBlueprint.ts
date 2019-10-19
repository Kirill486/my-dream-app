import { isCallback, isValue } from "./behavior/argumentProbes";

export abstract class ViewBlueprint<ViewModel> {

    containerId: string;
    templateId: string;
    viewModel: ViewModel;

    constructor(
        containerId:string, 
        templateId: string, 
        initialViewModel: ViewModel
        ) {
        this.containerId = containerId;
        this.templateId = templateId;
        this.viewModel = initialViewModel;
    }

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

    mapViewModel(viewEntry: HTMLElement) {

        const modelKeys = Object.keys(this.viewModel);
        for (let key of modelKeys) {
            
            const value = this.viewModel[key];
            const correspondingControl = viewEntry.querySelector(`#${key}`);

            if (correspondingControl) {
                if (isCallback(value)) {
                    viewEntry.addEventListener('click', value);
                } else if (isValue(value)) {
                    viewEntry.innerHTML = value;                        
                } else {
                    throw new Error(`Unsupported ViewModel value ${value} of type ${typeof value}`);
                }
            } else {
                throw new Error(`Control not found id = ${key}`);
            }            
        }
    }
}