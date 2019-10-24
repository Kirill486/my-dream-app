import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { IApplicationState } from "../model/types";
import { ITitleViewModel } from "../view/Title/types";

const applicationTitle = 'ToDoManage';

export class TitleViewController extends ViewControllerBlueprint<IApplicationState, ITitleViewModel> {
    
    mapToVm(state: IApplicationState) {
        const titleInitialVM: ITitleViewModel = {
            title: applicationTitle,
        };
        return titleInitialVM;
    }
}