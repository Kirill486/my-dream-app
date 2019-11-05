import { ViewBlueprint } from "../ancestor/ViewBlueprint";
import { ITitleViewModel } from "./types";

export class TitleView extends ViewBlueprint<ITitleViewModel> {
    templateId = 'template__title';

    mapViewModel() {
        const title = this.getInstance();
        const header = title.querySelector('h1');
        header.innerHTML = this.viewModel.title;
    }
}