import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState, IFilterState } from "../../../../model/types";

interface ISelectArgsDTO {
    selected?: number;
}

export class FilterSelect extends UseCaseBlueprint<IApplicationState, ISelectArgsDTO> {
    
    useCaseTitle = 'FilterSelect';

    buisinessLogic(payload) {
        const filters: IFilterState = {...this.state.filters};
        filters.selected = payload.selected;
        this.state.filters = filters;
    }
}
