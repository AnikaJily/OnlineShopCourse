import {makeAutoObservable} from "mobx";

export default class ItemStore {
    constructor () {
        this._types = []
        this._categorys = []
        this._items = []
        this._selectedType = {}
        this._selectedCategory = {}
        this._totalCount = 0
        this._limit = 3
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
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedCategory(category) {
        this.setPage(1)
        this._selectedCategory = category
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
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

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }

}