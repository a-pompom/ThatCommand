export default class Menu {

    constructor(option) {
        this.init()

        this._option = option
    }

    init() {

        this._posX = -1
        this._posY = -1
        this._visible = false
    }

    setPos(x, y) {
        this._posX = x
        this._posY = y
    }

    toggleVisibility() {
        this._visible = !this._visible
    }

    // getter setter ------------------------------------------------------------------------------

    get posX() {
        return this._posX
    }
    get posY() {
        return this._posY
    }
    get visible() {
        return this._visible
    }
    get option() {
        return this._option
    }

}