import { ObjectId } from "mongodb";
import { collections } from "../services/databaseService.js";
export class User {
    constructor(DNI, name, mail, contacto, cart, id) {
        this.DNI = DNI;
        this.name = name;
        this.mail = mail;
        this.contacto = contacto;
        this.cart = [];
        if (id)
            this._id = new ObjectId(id);
        cart ? this.cart = cart : this.cart = [];
    }
    async save() {
        var _a, _b;
        const result1 = await ((_a = collections.users) === null || _a === void 0 ? void 0 : _a.findOne({ DNI: this.DNI }));
        if (result1) {
            this._id = result1._id;
            return; //this;
        }
        else {
            const result = await ((_b = collections.users) === null || _b === void 0 ? void 0 : _b.insertOne(this));
            console.log(result);
            result
                ? console.log(`Successfully created a new user with id ${result.insertedId}`)
                : console.log("Failed to create a new user.");
            return; //this; 
            console.log('Save', this);
        }
    }
    static async fetchById(id) {
        var _a;
        return await ((_a = collections.users) === null || _a === void 0 ? void 0 : _a.findOne({ _id: new ObjectId(id) }));
    }
    async addToCart(id) {
        var _a;
        const index = this.cart.findIndex(ci => ci.pid.toHexString() === id);
        if (index >= 0) {
            this.cart[index].qty++;
        }
        else {
            const prodId = new ObjectId(id);
            this.cart.push({ pid: prodId, qty: 1 });
        }
        await ((_a = collections.users) === null || _a === void 0 ? void 0 : _a.updateOne({ _id: this._id }, { $set: { cart: this.cart } }));
    }
}
