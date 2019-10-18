import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState } from "../../../model/types";

interface IToggleShowDoneArgsDTO { };

export class FilterToggleShowDone extends UseCaseBlueprint<IApplicationState, IToggleShowDoneArgsDTO> {
    useCaseTitle = 'ToggleShowDone';

    buisinessLogic() {
        this.state.filters.showDone = !this.state.filters.showDone;
    }
}