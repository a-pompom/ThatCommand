<template>
    <!--コマンド エリア -->
    <article class="command-item">

        <!-- ヘッダ -->
        <header class="command-item-header">
            <h2>Item</h2>
            <h2 v-on:click="toggleCommandInputVisibility" class="command-item-header__button button--round new-command"></h2>
        </header>

        <main class="command-item-body">

            <!-- 入力欄 -->
            <command-input
                v-on:modifyScale="modifyCommandInputScale"
                v-bind:visible="isCommandInputVisible"
            ></command-input>

            <command-list
                v-bind:commandInputScale="commandInputScale"
            ></command-list>

        </main>

    </article>
</template>
<script>
import CommandInput from './CommandInput.vue'
import CommandList from './CommandList.vue'

export default {
    name: 'commandContainer',

    components: {
        CommandInput: CommandInput, // コマンド入力欄
        CommandList: CommandList // コマンド一覧
    },

    data() {
        return {
            isCommandInputVisible: false,  // コマンド入力欄の表示・非表示を管理
            commandInputScale: 0  // コマンド入力欄の大きさ(高さ)
        }
    },

    methods: {

        /**
         * コマンド入力欄の表示/非表示を切り替え
         */
        toggleCommandInputVisibility() {

            this.isCommandInputVisible = !this.isCommandInputVisible
        },

        /**
         * コマンド入力欄の大きさの変更を反映
         * @param {Number} scale 変動後の大きさ
         */
        modifyCommandInputScale(scale) {
            this.commandInputScale = scale
        }
    }
    
}
</script>

<style>
</style>