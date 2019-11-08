// A collection of static methods
// Available everywhere

export class LoggingService {
    public static logToConsole(any) {
        console.log(any);
    }

    public static logToConsoleTable(collection) {
        console.table(collection);
    }
}
