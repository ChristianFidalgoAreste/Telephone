export class Light {
    private room : string;
    private on = false;

    public constructor(room : string) {
        this.room = room;
    }

    public switch() {
        this.on = !this.on;
    }

    public getRoom() : string {
        return this.room;
    }

    public isOn() : boolean {
        return this.on;
    }
}