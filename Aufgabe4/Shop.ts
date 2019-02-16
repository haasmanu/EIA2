namespace Aufgabe4Shop {

    export let tree: Product[] = [{ name: "Fichte", price: 20}, 
                            { name: "Tanne", price: 18}, 
                            { name: "Oregon Pine", price: 22}];
    
    export let treeBall: Product[] = [{ name: "None", price: 0},
                                { name: "Red-Balls", price: 0.99}, 
                                { name: "Gold-Balls", price: 1.49}, 
                                { name: "Silver-Balls", price: 1.99}];
    
    export let candle: Product[] = [{ name: "None", price: 0},
                                { name: "Red-Candels", price: 0.49},
                                { name: "White-Candels", price: 0.99},
                                { name: "Blue-Candels", price: 1.49}];
    
    export let lametta: Product[] = [{ name: "None", price: 0},
                                { name: "Lametta White", price: 0.5},
                                { name: "Lametta Silver", price: 1},
                                { name: "Lametta Gold", price: 2}];
    
    export let treeStand: Product[] = [{ name: "None" , price: 0},
                                { name: "Star", price: 20},
                                { name: "Classic", price: 15}];
    
    export let additional: Product[] = [{ name: "None" , price: 0},
                                    { name: "Star", price: 3},
                                    { name: "Train", price: 5},
                                    { name: "Angel", price: 6},
                                    { name: "Lil $anta", price: 8},
                                    { name: "Yung Je$u$", price: 10}]; 
     
    export let shipment: Product[] = [{ name: "DHL" , price: 25},
                                       { name: "Hermes", price: 20},
                                       { name: "Express" , price: 50},
                                       { name: "Abholung" , price: 0}];  

export interface Product {
        name: string;
        price: number;
    }   
}