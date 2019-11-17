//here we just list our use cases again

const sagaActionPrefix = 'SAGA_';
const manageActionPrefix = 'MANAGE_'
const filterActionPrefix = 'FILTER_';

export const filterSagaActionTypes = Object.freeze({
    select: `${sagaActionPrefix}${filterActionPrefix}SELECT`,
    toggleShowDone: `${sagaActionPrefix}${filterActionPrefix}TOGGLE_SHOW_DONE`,
});

export const manageActionTypes = Object.freeze({
    add: `${sagaActionPrefix}${manageActionPrefix}ADD`,
    remove: `${sagaActionPrefix}${manageActionPrefix}REMOVE`,
    toggleDone: `${sagaActionPrefix}${manageActionPrefix}TOGGLE_DONE`,
    save: `${sagaActionPrefix}${manageActionPrefix}SAVE`,
    restore: `${sagaActionPrefix}${manageActionPrefix}RESTORE`,
})

export const sagaActionTypes = Object.freeze({
    ...filterSagaActionTypes,
    ...manageActionTypes,
});