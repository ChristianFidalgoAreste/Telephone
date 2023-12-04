export class CeilingFan {
    private room : string;
    private speed : number = 0;

    public constructor(room : string) {
        this.room = room;
    }

    public getRoom() : string {
        return this.room;
    }

    public getSpeed() : number {
        return this.speed;
    }

    public setSpeed(speed : number) {
        this.speed = speed;
    } 
}