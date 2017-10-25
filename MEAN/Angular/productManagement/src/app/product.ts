export class Product {
    id: number = 0;
    title: string;
    price: number;
    imageUrl: string;

    constructor(){
        this.id = Math.floor(Math.random()* 2000);
    }
}
