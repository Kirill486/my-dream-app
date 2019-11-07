import { ViewPoolBlueprint } from "../../buisiness_view/viewPool/ancestor/ViewPoolBlueprint";

export abstract class ViewBlueprint<ViewModel> {

    abstract templateId: string;
    viewModel: ViewModel;
    containerId: string;

    static getTemplateById(id: string): HTMLDivElement {
        // jump out of document-fragment
        const template = document.getElementById(id) as HTMLTemplateElement;
        const instance = document.importNode(template.content, true).querySelector('div');
        return instance;
    }

    // We restrict from having more then one view in a container;
    
    static emptyContainer(container: HTMLElement) {
        const children = Array.from(container.children);
        children.forEach(child => container.removeChild(child));
    }

    public getContainer() {
        return document.getElementById(this.containerId)
    }

    public getInstance() {
        return this.getContainer().firstChild as HTMLElement;
    }

    constructor(
        containerId:string, 
        initialViewModel: ViewModel,
        ) {
        this.containerId = containerId;
        this.viewModel = initialViewModel;
    }    

    abstract mapViewModel(): void;

    public render(model: ViewModel = null): void {
        // if model we do update model
        if (model) {
            this.setViewModel(model);
        }

        const container = this.getContainer();

        if (!container) {
            throw new Error(`Container is not found id = ${this.containerId}`);
        }

        ViewBlueprint.emptyContainer(container);
        
        const view = ViewBlueprint.getTemplateById(this.templateId);

        if (!view) {
            throw new Error(`Template not found id = ${this.templateId}`);
        }
        
        container.appendChild(view);

        this.mapViewModel();

    }

    public setViewModel(model: ViewModel): void {
        this.viewModel = model;        
    };
}