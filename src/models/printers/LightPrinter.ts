import { IPrinter } from "../../interfaces/IPrinter.js";
import { Light } from "../Light.js";

export class LightPrinter implements IPrinter {
    public printProps(light : Light) : void {
        console.log(`${light.getRoom()}'s light is ${light.isOn() ? 'on' : 'off'}`);
    }
}