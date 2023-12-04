import { IPrinter } from "../../interfaces/IPrinter.js";
import { CeilingFan } from "../CeilingFan.js";

export class CeilingFanPrinter implements IPrinter {
    public printProps(ceilingFan : CeilingFan) : void {
        const speeds = ['low', 'medium', 'high', 'turbo'];

        console.log(`${ceilingFan.getRoom()}'s fan is set in ${speeds[ceilingFan.getSpeed()]} mode`);
    }
}