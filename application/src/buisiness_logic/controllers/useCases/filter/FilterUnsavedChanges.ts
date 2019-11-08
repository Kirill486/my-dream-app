import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState } from "../../../../domain_types/types";

interface IToggleShowDoneArgsDTO { };

export class FilterHasUnsavedChanges extends UseCaseBlueprint<IApplicationState, IToggleShowDoneArgsDTO> {
    useCaseTitle = 'FilterHasUnsavedChanges';

    buisinessLogic() {
        this.state.filters.hasUnsavedChanges = true;
    }
}

export class FilterNoUnsavedChanges extends UseCaseBlueprint<IApplicationState, IToggleShowDoneArgsDTO> {
    useCaseTitle = 'FilterNoUnsavedChanges';

    buisinessLogic() {
        this.state.filters.hasUnsavedChanges = false;
    }
}