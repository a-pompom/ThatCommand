export default class CommandService {

    constructor(vue) {

        this.vue = vue

        this.categoryInput =  vue.$refs.categoryInput
        this.commandInput = vue.$refs.commandInput
    }

    test() {
        console.log('test')
    }



}