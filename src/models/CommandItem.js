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
     * 
     * @param {Boolean} isMemoVisible メモ欄を表示するか
     * @param {Object} cssClass 適用されるCSSクラス
     */
    constructor(id, name, memo, style, subCategoryName) {

        this._id = id
        this._name = name
        this._memo = memo
        this._style = style
        this._subCategoryName = subCategoryName

        this._isMemoVisible = false // メモを表示するか
        //  メモが表示されているか否かを表す矢印のスタイル
        this._cssClass = {
            'angle-down': true,
        }
    }

    init() {
        this._id = '-1'
        this._name = ''
        this._memo = ''
        this._style = {}
        this._subCategoryName = ''
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

    get subCategoryName() {
        return this._subCategoryName
    }
    set subCategoryName(value) {
        this._subCategoryName = value
    }

    get isMemoVisible() {
        return this._isMemoVisible
    }
    set isMemoVisible(value) {
        this._isMemoVisible = value

        // メモ欄が表示されているか否かによって矢印に適用するCSSクラスを切り替え
        this._cssClass = this._isMemoVisible ? {'angle-up': true} : {'angle-down': true}
    }

    get cssClass() {
        return this._cssClass
    }

}