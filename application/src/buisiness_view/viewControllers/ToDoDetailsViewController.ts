import { ViewControllerBlueprint } from "./ancestor/ViewControllerBlueprint";
import { IApplicationState, IToDo } from "../../domain_types/types";
import { ITodoDetailsVM, ITodoDetailsDataVM, ITodoDetailsActionVM } from "../../view/ToDoDetails/types";
import { applicationModel } from "../../model/configureStore";
import { saveAction, removeAction } from "../../buisiness_logic/sagas/actions/manageSagaActions";

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
        
                applicationModel.dispatch(saveAction(todo));
            },
            toggleDone: (id) => {
                // this toggles done
            },
            removeToDo: () => {
                const id = selectedToDo.id;
                applicationModel.dispatch(removeAction(id));
            },
        }

        const viewModel = {
            ...dataVM,
            ...actionVM,
        };

        return viewModel;
    }

}