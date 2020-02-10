
<template>

    <transition name="input-toggle">
        <form 
            ref="commandInput"
            v-show="visible"
            class="command-item-body__input">

            <label for="title" class="command-input">
                <input type="text" id="title" placeholder=" ">
                <span class="command-input__placeholder">Title</span>
                <span class="command-input__border"></span>
            </label>

            <label for="subCategory" class="command-input">
                <input type="text" id="subCategory" placeholder=" ">
                <span class="command-input__placeholder">Sub Category</span>
                <span class="command-input__border"></span>
            </label>


            <label for="memo" class="command-textarea">
                <textarea id="memo" placeholder=" "></textarea>
                <span class="command-textarea__placeholder">Memo</span>
                <span class="command-textarea__border"></span>
            </label>

            <input type="submit" 
                value="ADD" class="button--command-add">
        </form>
    </transition>

</template>
<script>
export default {
    name: 'CommandInput',

    props: {
        visible: Boolean // ボタンクリックによって表示・非表示が切り替わる
    },

    watch: {

        /**
         * 表示・非表示が切り替わった後は、入力欄のスペースの確保・余分なスペースの削除を行うため、
         * コマンド一覧の位置を変動させる
         */
        visible() {

            this.$nextTick(() => {

                // 変動後の高さをコンテナに伝播 
                this.$emit('modifyScale', this.$refs.commandInput.clientHeight)
            })

        }
    }
}
</script>

<style>
</style>