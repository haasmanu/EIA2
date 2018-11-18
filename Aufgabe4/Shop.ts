namespace Aufgabe4Shop {

    export let tree: Product[] = [{ name: "Fichte", price: 20}, 
                            { name: "Tanne", price: 18}, 
                            { name: "Oregon Pine", price: 22}];
    
    export let treeBall: Product[] = [{ name: "Red-Ball", price: 0.8}, 
                                { name: "Gold-Ball", price: 1.1}, 
                                { name: "Silver-Ball", price: 0.9}];
    
    export let candle: Product[] = [{ name: "Red-Candel", price: 1},
                                { name: "White-Candel", price: 0.8},
                                { name: "Blue-Candel", price: 1.1}];
    
    export let lametta: Product[] = [{ name: "Smal Lametta 1m", price: 0.5},
                                { name: "Medium Lametta 2m", price: 1},
                                { name: "Large Lametta 3m", price: 2}];
    
    export let treeStand: Product[] = [{ name: "Star", price: 20},
                                { name: "Classic", price: 15},
                                { name: "None" , price: 0}];
    
    export let additional: Product[] = [{ name: "Star", price: 3},
                                    { name: "Train", price: 5},
                                    { name: "Angel", price: 6},
                                    { name: "Lil Santa", price: 8},
                                    { name: "Yung Jesus", price: 10}];  
    export let shipment: Product[] = [{ name: "DHL" , price: 25},
                                       { name: "Hermes", price: 20},
                                       { name: "Express" , price: 50},
                                       { name: "Abholung" , price: 0}];  

export interface Product {
        name: string;
        price: number;
    }   
}