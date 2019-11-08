import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState } from "../../../../domain_types/types";

interface IToggleShowDoneArgsDTO { };

export class FilterToggleShowDone extends UseCaseBlueprint<IApplicationState, IToggleShowDoneArgsDTO> {
    useCaseTitle = 'ToggleShowDone';

    buisinessLogic() {
        this.state.filters.showDone = !this.state.filters.showDone;
    }
}