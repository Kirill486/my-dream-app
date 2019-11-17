import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState } from "../../../../domain_types/types";
import { toggleShowDone } from "../../../../model/actions/filterActions";

interface IToggleShowDoneArgsDTO { };

export class FilterToggleShowDone extends UseCaseBlueprint<IApplicationState, IToggleShowDoneArgsDTO> {
    useCaseTitle = 'ToggleShowDone';

    buisinessLogic() {
        this.model.dispatch(toggleShowDone());
    }
}