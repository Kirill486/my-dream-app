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

        const view = ViewBlueprint.getTemplateById(this.templateId);

        if (view) {
            this.mapViewModel(view);
        } else {
            throw new Error(`Template not found id = ${this.templateId}`);
        }

        const container = document.getElementById(this.containerId);
        if (container) {
            container.appendChild(view);
        } else {
            throw new Error(`Container is not found id = ${this.containerId}`);
        }

    }

    public setViewModel(model: ViewModel): void {
        this.viewModel = model;        
    };
}