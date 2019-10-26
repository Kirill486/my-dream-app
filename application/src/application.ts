import { ViewPool } from "./viewPool/ViewPool";
import { appStore } from "./model/Model";
import { BuisinessLogicBlueprint } from "./buisiness_logic/ancestor/BuisinessLogicBlueprint";

const applicationViewPool = new ViewPool(appStore);

BuisinessLogicBlueprint.subscribeToChanges(() => applicationViewPool.render());
BuisinessLogicBlueprint.fireChangedEvent();
