<template>

    <!-- カテゴリ編集メニュー -->
    <div>
        <ul 
            v-bind:style="menuStyle"
            class="category-edit__menu"
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

        <!-- カテゴリ編集ダイアログ -->
        <modal-component
            v-bind:params="categoryEditParams"
            v-bind:visible="categoryEditParams.visible"
            v-bind:content="categoryEdit"
            v-bind:option="categoryEditOption"

            v-on:close="closeModal"
        >
        </modal-component>
        
    </div>


</template>
<script>
import Modal from '../Util/Modal.vue'
import CategoryEdit from './CategoryEdit.vue'

export default {
    name: 'categoryMenu',

    props: {
        currentEditCategory: {
            type: Object
        },
        posX: Number, // メニューの表示位置
        posY: Number,
        visible: Boolean
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

            // カテゴリ編集ダイアログへ渡すパラメータ
            // id: 編集対象の識別子
            // name: 編集対象のカテゴリ名
            // visible: ダイアログが表示されているかを制御
            categoryEditParams: {
                editCategory: this.currentEditCategory,
                visible: false
            },
            // カテゴリダイアログの表示オプション
            categoryEditOption: {
                layer: 2,
            },

            categoryEdit: CategoryEdit
        }
    },

    watch: {

        /**
         * メニューが表示されたとき、位置を調整
         */
        visible() {

            if (this.visible) {

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
            const MenuGap = 70

            this.menuStyle = {
                top: `${this.posY - MenuGap}px`,
                left: `${this.posX}px`
            }
        },

        /**
         * ダイアログの表示を制御
         */
        toggleDialogVisibility() {
            this.categoryEditParams.visible = !this.categoryEditParams.visible
        },

        /**
         * モーダルを閉じる
         */
        closeModal() {

            this.categoryEditParams.visible = false

            this.$emit('close')
        }

    },

}
</script>
<style scoped>

</style>