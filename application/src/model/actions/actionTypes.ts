export const toDoListActionPrefix = 'LIST_';
export const filtersActionPrefix = 'FILTERS_';
export const miscActionPrefix = 'MISC_';

export const toDoListActionTypes = Object.freeze({
    SET: `${toDoListActionPrefix}SET`,
});

export const filtersActionTypes = Object.freeze({
    TOGGLE_SHOW_DONE: `${filtersActionPrefix}TOGGLE_SHOW_DONE`,
    SET_SELECTED: `${filtersActionPrefix}SET_SELECTED`,
});
