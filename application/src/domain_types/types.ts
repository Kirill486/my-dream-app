export interface IApplicationState {
    toDoList: IToDo[];
    filters: IFilterState;
    misc: IMiscState;
}

export interface IFilterState {
    selected?: any;
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
    isModelSyncronized: boolean;
    logQuenue: any[];
}

export interface IApplicationData {
    todos: IToDo[];
    logQuenue: any[];
}

// We'll use this to avoid some unwanted read operations
export interface IApplicationDataPartialDTO {
    todos?: IToDo[];
    logQuenue?: any[];
}