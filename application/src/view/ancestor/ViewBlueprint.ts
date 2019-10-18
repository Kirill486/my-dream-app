export abstract class ViewBlueprint<ViewModel> {
    public abstract setViewModel(model: ViewModel): void;
    public abstract render(): void;
}