import { ICommand } from "../../interfaces/ICommand.js";
import { CeilingFan } from "../CeilingFan.js";

export class DecreaseCeilingFanSpeedCommand implements ICommand {
    private ceilingFan : CeilingFan;

    public constructor(ceilingFan : CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    public execute(): void {
        const actualSpeed = this.ceilingFan.getSpeed();

        this.ceilingFan.setSpeed((actualSpeed === 0) ? 3 : actualSpeed - 1);
    }
}