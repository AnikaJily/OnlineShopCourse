import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor () {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this) //mobx следит за изменениями перменных выше и перерендывает
    }

    setIsAuth(bool) { //создадим экшены - функции которые как-то изменяют состояние
        this._isAuth = bool
    }
    setUser(user) { 
        this._user = user
    }

    //создаем геттеры - чтобы получать какие-то переменные из нашего состояния
    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}