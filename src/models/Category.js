/**
 * カテゴリを表すクラス
 * 
 * @property {Number} id 識別子
 * @property {String} name カテゴリ名
 */
export default class Category {

    constructor(id, name) {

        this._id = id
        this._name = name

    }

    init() {
        this._id = -1
        this._name = ''
    }

    // getter setter ------------------------------------------------------------------------------

    get id() {
        return this._id
    }
    set id(value) {
        this._id = value
    }

    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }

}