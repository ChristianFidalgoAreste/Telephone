import { ICommand } from "../../interfaces/ICommand.js";

export class NoCommand implements ICommand {
    public execute(): void {
        console.log('No command implemented for this button');
    }
}