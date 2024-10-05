import axios from "axios";

const URL = 'http://localhost:8080/products'

const initProducts = [
    {
        id:1,
        name: 'Monitor Samsung 65',
        price: 500,
        description: 'El monitor es increible!'
    },
    {
        id:2,
        name: 'IPhone 14',
        price: 800,
        description: 'El telefono es muy bueno!'
    }
];

export const listProduct = () => {
    return initProducts; 
}

export const findAll = async() => {
    try {
        const response = await axios.get(URL);
        return response;   
    } catch (error) {
        console.log(error)
    }
    return null;
}

export const create = async ({name, description, price}) => {

    try {
        const response = await axios.post(URL, {
            name,
            description,
            price
        })
        return response   
    } catch (error) {
        console.log(error)
    }
    return undefined
}

export const update = async ({id, name, description, price}) => {

    try {
        const response = await axios.put(URL + '/'+ id , {
            name,
            description,
            price
        })
        return response   
    } catch (error) {
        console.log(error)
    }
    return undefined
}