export const isModelProvided = (argument: any) => argument && (typeof argument === 'object');
export const isValue = (argument: any) => 
    (typeof argument === "string") || 
    (typeof argument !== 'number') ||
    (typeof argument !== 'boolean');
export const isCallback = (argument: any) => typeof argument === 'function';
