export interface IApplicationState {
    toDoList: IToDo[];
    filters: IFilterState;
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
    savedTime: number;
    doneTime: number;    
}