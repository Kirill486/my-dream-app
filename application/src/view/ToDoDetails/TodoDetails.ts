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
            
            const titleInput = this.getTitleInput();
            titleInput.value = title;

            const descriptionElement = this.getDescriptionElement();
            descriptionElement.value = description;

            const doneToggler = this.getDoneToggler();
            doneToggler.checked = done;
            doneToggler.addEventListener('change', toggleDone);

            const saveButton = this.getSaveButton();
            saveButton.addEventListener('click', saveToDo);

            const removeButton = this.getRemoveButton();
            removeButton.addEventListener('click', removeToDo);

            if (createdTime) {
                const createdSpan = this.getCreatedSpan();
                createdSpan.textContent = new Date(createdTime).toLocaleString();
            }

            if (savedTime) {
                const savedSpan = this.getSavedSpan();
                savedSpan.textContent = new Date(savedTime).toLocaleString();
            }

            if (doneTime) {
                const doneSpan = this.getDoneSpan();
                doneSpan.textContent = new Date(doneTime).toLocaleString();
            }
        }
    }

    public getTitle(): string {
        return this.getTitleInput().value;
    }

    public getDescription(): string {
        return this.getDescriptionElement().value;
    }

    public getDone(): boolean {
        return this.getDoneToggler().checked;
    }

    private getTitleInput(): HTMLInputElement {
        return this.getInstance().querySelector('.todo-details-title-input');
    }

    private getDescriptionElement(): HTMLTextAreaElement {
        return this.getInstance().querySelector('.todo-details-content');
    }

    private getDoneToggler(): HTMLInputElement {
        return this.getInstance().querySelector('.todo-details-done');
    }

    private getSaveButton(): HTMLButtonElement {
        return this.getInstance().querySelector('.todo-details__save');
    }

    private getRemoveButton(): HTMLButtonElement {
        return this.getInstance().querySelector('.todo-detais__delete');
    }

    private getCreatedSpan(): HTMLElement {
        return this.getInstance().querySelector('.todo-datails__created');
    }
    private getSavedSpan(): HTMLElement {
        return this.getInstance().querySelector('.todo-datails__saved');
    }
    private getDoneSpan(): HTMLElement {
        return this.getInstance().querySelector('.todo-datails__done');
    }
}