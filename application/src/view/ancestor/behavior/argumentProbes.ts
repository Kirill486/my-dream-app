export const isModelProvided = (argument: any) => argument && (typeof argument === 'object');
export const isValue = (argument: any) => 
    (typeof argument === "string") || 
    (typeof argument !== 'number') ||
    (typeof argument !== 'boolean');
export const isCallback = (argument: any) => typeof argument === 'function';

// mapViewModel(viewEntry: HTMLElement) {

    //     const modelKeys = Object.keys(this.viewModel);
    //     for (let key of modelKeys) {
            
    //         const value = this.viewModel[key];
    //         const correspondingControl = viewEntry.querySelector(`#${key}`);

    //         if (correspondingControl) {
    //             if (isCallback(value)) {
    //                 viewEntry.addEventListener('click', value);
    //             } else if (isValue(value)) {
    //                 viewEntry.innerHTML = value;                        
    //             } else {
    //                 throw new Error(`Unsupported ViewModel value ${value} of type ${typeof value}`);
    //             }
    //         } else {
    //             throw new Error(`Control not found id = ${key}`);
    //         }            
    //     }
    // }