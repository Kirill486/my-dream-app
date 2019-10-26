// For our application purposes we do not need even desendans

export class BuisinessLogicBlueprint {
    
    static changedEvent = 'model-changed';
    
    static subscribeToChanges(callback: () => void) {
        document.addEventListener(BuisinessLogicBlueprint.changedEvent, callback);
    }

    static fireChangedEvent() {
        const changedEventInstance = new Event(BuisinessLogicBlueprint.changedEvent);
        document.dispatchEvent(changedEventInstance);
    }
}