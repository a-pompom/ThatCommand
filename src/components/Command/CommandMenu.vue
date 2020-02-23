<template>

    <!-- コマンド編集メニュー -->
    <div>
        <ul 
            v-bind:style="menuStyle"
            class="command-edit__menu"
        >
            <li
                v-on:click="toggleDialogVisibility"
            >
                Edit
            </li>
            <li>
                Delete
            </li>
            <li
                v-on:click="closeModal"
            >
                Close
            </li>
        </ul>

        <!-- コマンド編集ダイアログ -->
        <modal-component
            v-bind:params="commandEditParams"
            v-bind:visible="commandEditParams.visible"
            v-bind:content="commandEdit"
            v-bind:option="commandEditOption"

            v-on:close="closeModal"
        >
        </modal-component>
        
    </div>


</template>
<script>
import Modal from '../Util/Modal.vue'
import CommandEdit from './CommandEdit.vue'

export default {
    name: 'commandMenu',

    props: {
        currentEdit: {
            type: Object
        },
        menu: {
            type: Object
        }
    },

    components: {
        ModalComponent: Modal
    },

    data() {
        return {

            // メニューの表示位置
            menuStyle: {
                top: 0,
                left: 0
            },

            // コマンド編集ダイアログへ渡すパラメータ
            // id: 編集対象の識別子
            // name: 編集対象のコマンド名
            // visible: ダイアログが表示されているかを制御
            commandEditParams: {
                command: this.currentEdit,
                visible: false
            },
            // コマンドダイアログの表示オプション
            commandEditOption: {
                layer: 2,
            },

            commandEdit: CommandEdit
        }
    },

    watch: {

        /**
         * メニューが表示されたとき、位置を調整
         */
        'menu.visible'() {

            if (this.menu.visible) {

                this.setPos()
            }
        }
    },

    methods: {

        /**
         * クリックされた編集アイコンに隣接する形で
         * メニューを表示できるよう位置を設定
         */
        setPos() {
            // メニューとアイコンの位置関係は、画面上では微妙なずれがあるので、係数を減算してそれっぽく見えるよう補正
            const MenuGapY = 60
            console.log(this.menu)

            this.menuStyle = {
                top: `${this.menu.posY - MenuGapY}px`,
                left: `${this.menu.posX}px`
            }
        },

        /**
         * ダイアログの表示を制御
         */
        toggleDialogVisibility() {
            this.commandEditParams.visible = !this.commandEditParams.visible
        },

        /**
         * モーダルを閉じる
         */
        closeModal() {

            this.commandEditParams.visible = false

            this.$emit('close')
        }

    },

}
</script>
<style scoped>

</style>