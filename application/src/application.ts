import { ViewPool } from "./buisiness_view/viewPool/ViewPool";
// import { appStore, ApplicationModel } from "./model/Model";
import { appStore, ReduxModel } from "./model/ReduxModel";
import { BuisinessLogicBlueprint } from "./buisiness_logic/ancestor/BuisinessLogicBlueprint";
import { applicationStorage } from "./buisiness_repository/PermanentStorage";
import { applicationModel } from "./model/configureStore";
import { restoreAction } from "./buisiness_logic/sagas/actions/manageSagaActions";

const startApplication = async () => {
    const todos = await applicationStorage.get();
    applicationModel.dispatch(restoreAction(todos));

    const applicationViewPool = new ViewPool(appStore);

    BuisinessLogicBlueprint.subscribeToChanges(() => applicationViewPool.render());
    BuisinessLogicBlueprint.fireChangedEvent();

    interface IAppDocument extends Document {
        conserns: {
            model: ReduxModel,
            buisinessLogic: typeof BuisinessLogicBlueprint,
        }
    }
    
    (document as IAppDocument).conserns = {
        model: appStore,
        buisinessLogic: BuisinessLogicBlueprint,
    };
}

startApplication();






