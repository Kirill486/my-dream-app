export const makeStringOfTime =
(time?: number): string => {
    let result = '';
    if (time) {
        result = new Date(time).toLocaleString();
    }
    return result;
}