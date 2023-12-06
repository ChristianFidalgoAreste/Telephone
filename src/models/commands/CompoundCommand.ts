import { ICommand } from "../../interfaces/ICommand.js";

export class CompoundCommand implements ICommand {
    private commands : ICommand[];

    public constructor (commands : ICommand[]) {
        this.commands = commands;
    }

    public add(command : ICommand) {
        this.commands.push(command);
    }

    public execute(): void {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].execute();
        }
    }
}