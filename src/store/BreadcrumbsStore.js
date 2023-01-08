import {makeAutoObservable} from "mobx";

export default class BreadcrumbsStore {
    constructor(props) {
        makeAutoObservable(this);
    }

    setIsAuth(bool){
        this._isAuth = bool;
    }

    get isAuth(){
        return this._isAuth;
    }

}