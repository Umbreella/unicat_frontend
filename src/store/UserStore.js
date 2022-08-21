import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor(props) {
        this._isAuth = false;
        makeAutoObservable(this);
    }

    setIsAuth(value){
        this._isAuth = value;
    }

    get isAuth(){
        return this._isAuth;
    }

}