import { ObjectId } from "mongodb"

import { collections } from "../services/databaseService.js";


interface address {
    calle: string,
    telf: string,
    CP: string
}

export interface CartItem {
    pid: ObjectId,
    qty: number
}

export class User {
    public _id?: ObjectId;
    public cart: CartItem[] = [];

    constructor(
        public DNI: string,
        public name: string,
        public mail: string,
        public contacto: address,
        cart?: CartItem[],
        id?: string
    ) {
        if (id) this._id = new ObjectId(id);
        cart ? this.cart = cart : this.cart = [];
    }
    async save() {
        const result1 = await collections.users?.findOne({ DNI: this.DNI });
        if (result1) {
            this._id = result1._id;
            return //this;
        }else{
            const result = await collections.users?.insertOne(this);
        console.log(result);
        result
            ? console.log(`Successfully created a new user with id ${result.insertedId}`)
            : console.log("Failed to create a new user.");
        return //this; 
        console.log('Save', this);
        }

        
    }
    static async fetchById(id: string) {
        return await collections.users?.findOne({ _id: new ObjectId(id) });
    }

    async addToCart(id:string){
        const index = this.cart.findIndex( ci => ci.pid.toHexString() === id);
        if(index>=0){
            this.cart[index].qty++;
        }else{
            const prodId = new ObjectId(id);
            this.cart.push({pid: prodId, qty: 1});
        }
        await collections.users?.updateOne({_id: this._id}, {$set: {cart: this.cart}});
    }
}