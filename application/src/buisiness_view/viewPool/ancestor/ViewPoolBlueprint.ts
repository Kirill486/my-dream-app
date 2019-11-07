import { ViewControllerBlueprint } from "../../viewControllers/ancestor/ViewControllerBlueprint";
import { ModelBlueprint } from "../../../model/ancestor/ModelBlueprint";

export type TApplicationView<ApplicationState> = ViewControllerBlueprint<ApplicationState, any>;

export abstract class ViewPoolBlueprint<ApplicationState> {

    appModel: ModelBlueprint<ApplicationState>;

    constructor(model: ModelBlueprint<ApplicationState>) {
        this.appModel = model;
    }
    
    pool?: TApplicationView<ApplicationState>[] = null;
    
    abstract createViewPool(state:ApplicationState): TApplicationView<ApplicationState>[];

    render() {
        const state = this.appModel.getState();

        this.pool = this.createViewPool(state);

        for (let viewController of this.pool) {
            viewController.render(state);
        }
    }
}
