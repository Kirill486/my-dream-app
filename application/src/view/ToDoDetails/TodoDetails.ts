import { ViewBlueprint } from "../ancestor/ViewBlueprint";
import { IToDo } from "../../model/types";

export interface ITodoDetailsDataVM {
    selectedToDo: IToDo,
}

export interface ITodoDetailsActionVM {
    toggleDone: () => void;
    saveToDo: () => void;
    removeToDo: () => void;
}

export interface ITodoDetailsVM extends
ITodoDetailsDataVM,
ITodoDetailsActionVM
{ }

export class ToDoDetails extends ViewBlueprint<ITodoDetailsVM> {
    
    templateId = 'template__todo-details';
    
    mapViewModel() {
        const {selectedToDo, toggleDone, saveToDo, removeToDo} = this.viewModel;
        
        if (selectedToDo) {
            const {title, description, done, createdTime, doneTime, savedTime} = selectedToDo;
            const titleElement = this.getInstance().querySelector('.todo-details-title');
            titleElement.textContent = title;

            const descriptionElement = this.getInstance().querySelector('.todo-details-content');
            descriptionElement.textContent = description;

            const doneToggler = this.getInstance().querySelector('.todo-details-done') as HTMLInputElement;
            doneToggler.checked = done;
            doneToggler.addEventListener('change', toggleDone);

            const saveButton = this.getInstance().querySelector('.todo-details__save');
            saveButton.addEventListener('click', saveToDo);

            const removeButton = this.getInstance().querySelector('.todo-detais__delete');
            removeButton.addEventListener('click', removeToDo);

            const createdSpan = this.getInstance().querySelector('.todo-datails__created');
            createdSpan.textContent = new Date(createdTime).toLocaleString();
            const savedSpan = this.getInstance().querySelector('.todo-datails__saved');
            savedSpan.textContent = new Date(savedTime).toLocaleString();
            const doneSpan = this.getInstance().querySelector('.todo-datails__done');
            doneSpan.textContent = new Date(doneTime).toLocaleString();
        }
    }
}