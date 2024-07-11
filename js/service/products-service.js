async function addCard() {
//const url ="http://localhost:3000/products"
const apiUrl = await fetch("https://my-json-server.typicode.com/joserf42/alura-geek-api/db")
const product =  apiUrl.json();
return product;

}

// metodos get, post, delete


async function createProducts(name, price, image){
    return await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            name:name,
            price:price,
            image:image,
        })
    })
};

const deleteProducts = async (id) => {
    try {
        const res = await fetch(`apiUrl${id}`, {
            method: "DELETE",
        });
        return await res.json()
                
    } catch (error) {
        return console.log(error)
        
    }
}

export const servicesProducts = {
    addCard,
    createProducts,
    deleteProducts
}