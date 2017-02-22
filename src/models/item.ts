export class Item {

    public name: string;
    public quantity: number;

    // Default constructor will initialize a start string from the current time it's constructed.
    constructor(name: string, quantity: number) {
        this.name = name;
        this.quantity = quantity;
    }
}
