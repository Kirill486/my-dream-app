import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState, IFilterState } from "../../../../domain_types/types";

interface ISelectArgsDTO {
    id?: any;
}

export class FilterSelect extends UseCaseBlueprint<IApplicationState, ISelectArgsDTO> {
    
    useCaseTitle = 'FilterSelect';

    buisinessLogic(payload) {
        const filters: IFilterState = {...this.state.filters};
        filters.selected = payload.id;
        this.state.filters = filters;
    }
}
