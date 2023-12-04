import { CeilingFan } from "./models/CeilingFan.js";
import { Light } from "./models/Light.js";
import { Telephone } from "./models/Telephone.js";
import { DecreaseCeilingFanSpeedCommand } from "./models/commands/DecreaseCeilingFanSpeedCommand .js";
import { IncreaseCeilingFanSpeedCommand } from "./models/commands/IncreaseCeilingFanSpeedCommand.js";
import { LightCommand } from "./models/commands/LightCommand.js";
import { CeilingFanPrinter } from "./models/printers/CeilingFanPrinter.js";
import { LightPrinter } from "./models/printers/LightPrinter.js";

const lightPrinter = new LightPrinter();
const ceilingFanPrinter = new CeilingFanPrinter();
const kitchenLight = new Light('Kitchen');
const dinningRoomLight = new Light('Dinning room');
const chrisRoomCeilingFan = new CeilingFan('Chris Room');

const switchKitchenLight = new LightCommand(kitchenLight);
const switchDinningRoomLight = new LightCommand(dinningRoomLight);
const increaseSpeedChrisRoomCeilingFan = new IncreaseCeilingFanSpeedCommand(chrisRoomCeilingFan);
const decreaseSpeedChrisRoomCeilingFan = new DecreaseCeilingFanSpeedCommand(chrisRoomCeilingFan);

const telephone = new Telephone();

telephone.pressButton(0);
telephone.pressButton(1);
telephone.pressButton(2);
telephone.pressButton(3);

telephone.setCommand(0, switchKitchenLight);
telephone.setCommand(1, switchDinningRoomLight);
telephone.setCommand(2, increaseSpeedChrisRoomCeilingFan)
telephone.setCommand(3, decreaseSpeedChrisRoomCeilingFan)

lightPrinter.printProps(kitchenLight);
lightPrinter.printProps(dinningRoomLight);
ceilingFanPrinter.printProps(chrisRoomCeilingFan);

telephone.pressButton(0);
telephone.pressButton(1);
telephone.pressButton(2);

lightPrinter.printProps(kitchenLight);
lightPrinter.printProps(dinningRoomLight);
ceilingFanPrinter.printProps(chrisRoomCeilingFan);

telephone.pressButton(3);

ceilingFanPrinter.printProps(chrisRoomCeilingFan);

telephone.pressButton(2);
telephone.pressButton(2);
telephone.pressButton(2);

ceilingFanPrinter.printProps(chrisRoomCeilingFan);

telephone.pressButton(2);
telephone.pressButton(2);
telephone.pressButton(2);

ceilingFanPrinter.printProps(chrisRoomCeilingFan);

telephone.pressButton(3);
telephone.pressButton(3);
telephone.pressButton(3);

ceilingFanPrinter.printProps(chrisRoomCeilingFan);