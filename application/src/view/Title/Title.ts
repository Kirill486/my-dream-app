import { ViewBlueprint } from "../ancestor/ViewBlueprint";
import { ITitleViewModel } from "./types";

export class TitleView extends ViewBlueprint<ITitleViewModel> {
    templateId = 'template__title';
}