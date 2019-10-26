export const getTemplateById = (id: string): HTMLElement => {
    const template = document.getElementById('id') as HTMLTemplateElement;
    const instance = document.importNode(template.content, true).querySelector('div');
    return instance;
}
