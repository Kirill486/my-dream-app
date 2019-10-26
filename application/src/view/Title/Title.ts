import { ViewBlueprint } from "../ancestor/ViewBlueprint";
import { ITitleViewModel } from "./types";

export class TitleView extends ViewBlueprint<ITitleViewModel> {
    templateId = 'template__title';

    mapViewModel(viewRoot: HTMLElement) {
        const title = ViewBlueprint.getTemplateById(this.templateId);
        const header = title.querySelector('h1');
        header.title = this.viewModel.title;
        viewRoot.appendChild(title);
    }
}