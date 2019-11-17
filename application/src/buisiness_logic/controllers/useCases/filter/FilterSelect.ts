import { UseCaseBlueprint } from "../ancestor/UseCaseBlueprint";
import { IApplicationState, IFilterState } from "../../../../domain_types/types";
import { setSelected } from "../../../../model/actions/filterActions";
import { app_id } from "../../../../domain_types/definitions";

interface ISelectArgsDTO {
    id?: app_id;
}

export class FilterSelect extends UseCaseBlueprint<IApplicationState, ISelectArgsDTO> {
    
    useCaseTitle = 'FilterSelect';

    buisinessLogic(payload) {
        this.model.dispatch(setSelected(payload.id));
    }
}
