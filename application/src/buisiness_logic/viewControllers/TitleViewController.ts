import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { ITitleViewModel } from "../../view/Title/types";
import { IApplicationState } from '../../model/types';

const applicationTitle = 'ToDoManage';

export class TitleViewController extends ViewControllerBlueprint<IApplicationState, ITitleViewModel> {
    map(state: IApplicationState) {
        const titleInitialVM: ITitleViewModel = {
            title: applicationTitle,
        };
        return titleInitialVM;
    }
}