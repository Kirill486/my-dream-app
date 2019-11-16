import { ViewBlueprint } from "../ancestor/ViewBlueprint";
import { IToDo } from "../../domain_types/types";
import { ITodoListVM } from "./types";

export class ToDoListView extends ViewBlueprint<ITodoListVM> {
    templateId = 'template__todo-list';

    childrenTemplateId = 'template__todo';

    private selectedItemClassName = 'item__container--selected';

    private mapToDosToEntries () {
    const {todos, switchDoneToDo, selectedToDoId, selectToDo} = this.viewModel;
    return todos.map((item, index) => {
            const view = ViewBlueprint.getTemplateById(this.childrenTemplateId);

            const title = view.querySelector('.item__title');
            title.textContent = item.title;
            title.addEventListener('click', () => selectToDo(item.id));

            const checkBox = view.querySelector('.item__done') as HTMLInputElement;
            checkBox.checked = item.done;            
            checkBox.addEventListener('change', () => switchDoneToDo(item.id));

            const selectArea = view.querySelector('.item__select-area');
            selectArea.addEventListener('click', () => selectToDo(item.id));

            const isSelected = selectedToDoId && selectedToDoId === item.id;
            if (isSelected) {
                view.classList.add(this.selectedItemClassName);
            }
            return view;
        }
    );
}
    
    mapViewModel() {
        const {isDoneShown, addToDo, toggleShowDone} = this.viewModel;

        const addTodoButton = this.getInstance().querySelector('.todo-list__add-todo');
        addTodoButton.addEventListener('click', () => addToDo());

        const showDoneChackbox = this.getInstance().querySelector('.todo-list__show-done') as HTMLInputElement;
        showDoneChackbox.checked = isDoneShown;
        showDoneChackbox.addEventListener('change', () => toggleShowDone());

        const todosContainer = this.getInstance().querySelector('.todo-list__items-container');

        const todoEntries = this.mapToDosToEntries();

        todoEntries.forEach((item) => {
            todosContainer.appendChild(item);
        });
    }
}