import { ICommand } from "../../interfaces/ICommand.js";
import { Light } from "../Light.js";

export class LightCommand implements ICommand {
    private light : Light;

    public constructor(light : Light) {
        this.light = light;
    }
    
    public execute(): void {
        this.light.switch();
    }
}