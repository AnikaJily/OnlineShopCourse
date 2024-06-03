import {$host, $authHost} from "./index";
import jwtDecode from "jwt-decode"; 

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategorys = async () => {
    const {data} = await $host.get('api/category')
return data
}

export const createItem = async (item) => {
    const {data} = await $authHost.post('api/item', item)
    return data
}

export const fetchItems = async (typeId, categoryId, page, limit= 5) => {
    const {data} = await $host.get('api/item', {params: {
        typeId, categoryId, page, limit
    }})
    console.log(data);
    return data
}

export const fetchOneItem = async (id) => {
    const {data} = await $host.get('api/item/' + id)
    return data
}