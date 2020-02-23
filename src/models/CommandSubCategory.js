/**
 * コマンド一覧のサブカテゴリ
 */
export default class CommandSubCategory {

    /**
     * コンストラクタ
     * 
     * @param {String} name サブカテゴリ名
     * @param {Array} itemList サブカテゴリに紐づくコマンド要素の一覧
     */
    constructor(name, itemList) {

        this._name = name
        this._itemList = itemList
    }

    // getter setter ------------------------------------------------------------------------------

    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }

    get itemList() {
        return this._itemList
    }
    set itemList(value) {
        this._itemList = value
    }
}