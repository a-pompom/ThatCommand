/**
 * コマンド本体を格納するクラス
 */
export default class CommandItem {

    /**
     * コンストラクタ
     * 
     * @param {String} id 識別子
     * @param {String} name コマンド名
     * @param {String} memo 備考
     * @param {Object} style 適用されるスタイル メモの表示の有無によって高さを切り替えるために利用
     */
    constructor(id, name, memo, style) {

        this._id = id
        this._name = name
        this._memo = memo
        this._style = style

        this._isMemoVisible = false // メモを表示するか
    }

    // getter setter ------------------------------------------------------------------------------

    get id() {
        return this._id
    }

    get name() {
        return this._name
    }
    set name(value) {
        this._name = value
    }

    get memo() {
        return this._memo
    }
    set memo(value) {
        this._memo = value
    }

    get style() {
        return this._style
    }

    set style(value) {
        this._style = value
    }

    get isMemoVisible() {
        return this._isMemoVisible
    }
    set isMemoVisible(value) {
        this._isMemoVisible = value
    }

}