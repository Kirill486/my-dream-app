import { ViewBlueprint } from "../ancestor/ViewBlueprint";
import { IToDo } from "../../model/types";

export interface ITodoListDataVM {
    todos: IToDo[],
    isDoneShown: boolean,
}

export interface ITodoListActionVM {
    toggleShowDone: () => void;
    addToDo: () => void;
    switchDoneToDo: (id: any) => void;
}

export interface ITodoListVM extends
ITodoListDataVM,
ITodoListActionVM
{ }

const mapToDosToEntries = (todos: IToDo[], switchDoneToDo) => {
    return todos.map((item, index) => {
        const view = ViewBlueprint.getTemplateById(this.childrenTemplateId);
        const title = view.querySelector('.item__title');
        title.textContent = item.title;
        const checkBox = view.querySelector('.item__done') as HTMLInputElement;
        checkBox.checked = item.done;
        checkBox.addEventListener('change', () => switchDoneToDo(item.id));
        return view;
    });
}

export class ToDoListView extends ViewBlueprint<ITodoListVM> {
    templateId = 'template__todo-list';

    childrenTemplateId = 'template__todo';

    mapViewModel(viewRoot: HTMLElement) {
        const {todos, isDoneShown, switchDoneToDo, addToDo, toggleShowDone} = this.viewModel;

        const listEntry = ViewBlueprint.getTemplateById(this.templateId);
        
        const addTodoButton = listEntry.querySelector('.todo-list__add-todo');
        addTodoButton.addEventListener('click', () => addToDo());

        const showDoneChackbox = listEntry.querySelector('.todo-list__show-done') as HTMLInputElement;
        showDoneChackbox.checked = isDoneShown;
        showDoneChackbox.addEventListener('change', () => toggleShowDone());

        const todosContainer = listEntry.querySelector('.todo-list__items-container');

        const todoEntries = mapToDosToEntries(todos, switchDoneToDo);

        todoEntries.forEach((item) => {
            todosContainer.appendChild(item);
        });

        viewRoot.appendChild(listEntry);
    }
}