import { CeilingFan } from "../models/CeilingFan.js";
import { Light } from "../models/Light.js";

export interface IPrinter {
    printProps(appliance : Light | CeilingFan) : void;
}