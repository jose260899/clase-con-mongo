import * as mongoDB from 'mongodb';
import * as dotenv from 'dotenv';


import { Product } from '../models/Product.js';
import { User } from '../models/User.js';

export const collections: {
    products?: mongoDB.Collection<Product>,
    users?: mongoDB.Collection<User>,
} = {};

export async function connectToDatabase(){
    dotenv.config();
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!);
    await client.connect();
    const db: mongoDB.Db = client.db(process.env.DB_NAME);

    collections.products = db.collection<Product>(process.env.PRODUCT_COLLECTION!);
    collections.users = db.collection<User>(process.env.USER_COLLECTION!);
    

    console.log(`Hemos conectado a la base de datos: ${db.databaseName} y la colección: ${collections.products.collectionName}`);
    console.log(`Hemos conectado a la base de datos: ${db.databaseName} y la colección: ${collections.users.collectionName}`);
}



