import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { IApplicationState, IToDo } from "../../domain_types/types";
import { ManageController } from "../../buisiness_logic/controllers/ManageController";
import { ITodoDetailsVM, ITodoDetailsDataVM, ITodoDetailsActionVM } from "../../view/ToDoDetails/types";

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
            saveToDo: (todoToAdd: IToDo) => {
                const timeNow = Date.now()

                const savedTime = timeNow.valueOf();

                const {done, title, description} = todoToAdd;
                const hasMadeDone = selectedToDo.done !== done;
                const doneTime = hasMadeDone ? timeNow : selectedToDo.doneTime; 

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
            toggleDone: (id) => {
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