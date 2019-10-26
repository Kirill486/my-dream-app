import { ViewBlueprint } from "../ancestor/ViewBlueprint";
import { ITitleViewModel } from "./types";
import { getTemplateById } from "../ancestor/behavior/templateHelper";

export class TitleView extends ViewBlueprint<ITitleViewModel> {
    templateId = 'template__title';

    mapViewModel(viewRoot: HTMLElement) {
        const title = getTemplateById(this.templateId);
        const header = title.querySelector('h1');
        header.title = this.viewModel.title;
        viewRoot.appendChild(title);
    }
}