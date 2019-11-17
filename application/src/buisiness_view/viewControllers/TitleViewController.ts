import { IApplicationState } from "../../domain_types/types";
import { ITitleViewModel } from "../../view/Title/types";

import {connect} from 'react-redux';
import { TitleView } from "../../view/Title/Title";

const applicationTitle = 'ToDoManage';

const mapStateToProps =
(
    state: IApplicationState,
): ITitleViewModel => {
    return {
        title: applicationTitle,
    }
}

export const TitleHOC = connect(mapStateToProps)(TitleView);