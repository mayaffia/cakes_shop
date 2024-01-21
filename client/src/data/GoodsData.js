import { makeAutoObservable } from "mobx";

export default class GoodsData {
  constructor() {
    this._types = [];
    this._goods = [];
    makeAutoObservable(this);
  }

  set types(value) {
    this._types = value;
  }

  get types() {
    return this._types;
  }

  set goods(value) {
    this._goods = value;
  }

  get goods() {
    return this._goods;
  }
}
