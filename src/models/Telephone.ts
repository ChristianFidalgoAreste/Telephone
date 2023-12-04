import { ICommand } from "../interfaces/ICommand.js";
import { NoCommand } from "./commands/NoCommand.js";

export class Telephone {
    private commands : ICommand[];

    public constructor() {
        this.commands = new Array<ICommand>(10);

        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i] = new NoCommand();
        }
    }

    public setCommand(button : number, command : ICommand) {
        this.commands[button] = command;
    }

    public pressButton(button : number) {
        this.commands[button].execute();
    }
}