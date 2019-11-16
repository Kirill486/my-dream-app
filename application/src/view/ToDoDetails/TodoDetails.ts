import { ViewBlueprint } from "../ancestor/ViewBlueprint";
import { IToDo } from "../../domain_types/types";



export class ToDoDetails extends ViewBlueprint<ITodoDetailsVM> {
    
    templateId = 'template__todo-details';

    getDateString(time: number): string {
        return new Date(time).toLocaleString();
    }
    
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
                const createdDateString = this.getDateString(createdTime);
                createdSpan.textContent = `Created - ${createdDateString}`;
            }

            if (savedTime) {
                const savedSpan = this.getSavedSpan();
                const savedDateString = this.getDateString(savedTime);
                savedSpan.textContent = `Saved - ${savedDateString}`;
            }

            if (doneTime) {
                const doneSpan = this.getDoneSpan();
                const doneDateString = this.getDateString(doneTime);
                doneSpan.textContent = `Done - ${doneDateString}`;
            }
        } else {
            ViewBlueprint.emptyContainer(this.getContainer());
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