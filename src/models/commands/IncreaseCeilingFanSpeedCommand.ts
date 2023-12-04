import { ICommand } from "../../interfaces/ICommand.js";
import { CeilingFan } from "../CeilingFan.js";

export class IncreaseCeilingFanSpeedCommand implements ICommand {
    private ceilingFan : CeilingFan;

    public constructor(ceilingFan : CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    public execute(): void {
        const actualSpeed = this.ceilingFan.getSpeed();

        this.ceilingFan.setSpeed((actualSpeed === 3) ? 0 : actualSpeed + 1);
    }
}