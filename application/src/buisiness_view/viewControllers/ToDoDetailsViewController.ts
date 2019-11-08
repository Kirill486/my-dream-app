import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { IApplicationState, IToDo } from "../../domain_types/types";
import { ITodoDetailsVM, ITodoDetailsDataVM, ITodoDetailsActionVM, ToDoDetails } from "../../view/ToDoDetails/TodoDetails";
import { ManageController } from "../../buisiness_logic/controllers/ManageController";

export class ToDoDetailsViewController extends ViewControllerBlueprint<IApplicationState, ITodoDetailsVM> {
    
    static selectTodo(state: IApplicationState) {
        const id = state.filters.selected;

        if (id) {
            const correspondingToDo = state.toDoList.find((item) => item.id === id);
            return correspondingToDo;
        }

        return null;
    }
    
    mapToVm(state: IApplicationState): ITodoDetailsVM {
        const selectedToDo = ToDoDetailsViewController.selectTodo(state);
        
        const dataVM: ITodoDetailsDataVM = {
            selectedToDo,
        }

        const actionVM: ITodoDetailsActionVM = {
            saveToDo: () => {
                const view = this.view as ToDoDetails;

                const timeNow = Date.now()

                const savedTime = timeNow.valueOf();

                const done = view.getDone();
                const hasMadeDone = selectedToDo.done !== done;
                const doneTime = hasMadeDone ? timeNow : selectedToDo.doneTime; 

                const title = view.getTitle();
                const description = view.getDescription();
                
                const todo: IToDo = {
                    ...selectedToDo,
                    title,
                    description,
                    done,
                    doneTime,
                    savedTime

                }
        
                ManageController.save.use({ todo });
            },
            toggleDone: () => {
                // this toggles done
            },
            removeToDo: () => {
                const id = selectedToDo.id;
                ManageController.remove.use({id});
            },
        }

        const viewModel = {
            ...dataVM,
            ...actionVM,
        };

        return viewModel;
    }

}