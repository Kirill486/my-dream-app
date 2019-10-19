export interface IApplicationState {
    toDoList: IToDo[];
    filters: IFilterState;
    misc: IMiscState;
}

export interface IFilterState {
    selected?: number;
    showDone: boolean; 
}

export interface IToDo {
    id: any;
    title: string;
    description: string;
    done: boolean;
    createdTime: number;
    savedTime?: number;
    doneTime?: number;    
}

export interface IMiscState {
    nextId: number;
    isModelSyncronized: boolean;
    logQuenue: any[];
}