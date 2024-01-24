

const products: Product[] = [];

export class Product {
    constructor(
        public title: string,
        public imageUrl: string,
        public description: string,
        public price: number,
        public id?: number
    ){
    }
    save(){
        if(!this.id){
            this.id = Math.round(Math.random()*1000000);
            products.push(this);
        }else{
            const index = products.findIndex( p => p.id === this.id );
            if(this.id>=0){
                products[index]=this; //{...this};
            }
        }
    };

    static fetchAll(){
        return products;
    };
    static findById(productId: number){
        return products.find( p => p.id === productId );
    }
    //static deleteById(productId: number){}
}