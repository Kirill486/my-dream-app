import { ViewPool } from "./viewPool/ViewPool";
import { appStore, ApplicationModel } from "./model/Model";
import { BuisinessLogicBlueprint } from "./buisiness_logic/ancestor/BuisinessLogicBlueprint";

const applicationViewPool = new ViewPool(appStore);

BuisinessLogicBlueprint.subscribeToChanges(() => applicationViewPool.render());
BuisinessLogicBlueprint.fireChangedEvent();

interface IAppDocument extends Document {
    conserns: {
        model: ApplicationModel,
        buisinessLogic: typeof BuisinessLogicBlueprint,
    }
}

(document as IAppDocument).conserns = {
    model: appStore,
    buisinessLogic: BuisinessLogicBlueprint,
};
