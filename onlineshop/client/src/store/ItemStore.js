import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor () {
        this._types = [
            {id: 1, name: 'Big'},
            {id: 2, name: 'CrossBody'},
            {id: 3, name: 'Small'},
            {id: 4, name: 'Shopper'}
        ]
        this._categorys = [
            {id: 1, name: 'Bags'},
            {id: 2, name: 'Shoes'},
        ]
        this._items = [
            {id: 1, name: 'Pink Bag', price: 25000, rating: 5, img: 'https://arnypraht.com/assets/images/resources/12246/448-black-1.jpg'},
            {id: 2, name: 'Black Bag', price: 5000, rating: 3, img: 'https://arnypraht.com/assets/images/resources/12246/448-black-1.jpg'},
            {id: 3, name: 'White Bag', price: 35000, rating: 4, img: 'https://arnypraht.com/assets/images/resources/12246/448-black-1.jpg'},
            
        ]
        this._selectedType = {}
        this._selectedCategory = {}
        makeAutoObservable(this) //mobx следит за изменениями перменных выше и перерендывает
    }

    setTypes(types) { //создадим экшены - функции которые как-то изменяют состояние
        this._types = types
    }
    setCategorys(categorys) { 
        this._categorys = categorys
    }
    setItems(items) { 
        this._items = items
    }

    setSelectedType(type) {
        //this.setPage(1)
        this._selectedType = type
    }

    setSelectedCategory(category) {
        //this.setPage(1)
        this._selectedCategory = category
    }

    //создаем геттеры - чтобы получать какие-то переменные из нашего состояния
    get types() {
        return this._types;
    }

    get categorys() {
        return this._categorys;
    }

    get items() {
        return this._items;
    }

    get selectedType() {
        return this._selectedType;
    }

    get selectedCategory() {
        return this._selectedCategory;
    }

}