

const products: Product[] = [];

export class Product {
    constructor(
        public title: string,
        public imageUrl: string,
        public description: string,
        public price: number
    ){

    }
    save(){
        products.push(this);
    };

    static fetchAll(){
        return products;
    };
}