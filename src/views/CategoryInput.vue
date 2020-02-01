<template>
<div>

    <!-- カテゴリ入力欄 -->
    <transition name="input-toggle">
        <form 
            ref="categoryInput"
            v-show="visible"
            class="command-category-body__input">

            <label for="categoryName" class="category-input">
                <input type="text" id="categoryName" placeholder=" ">
                <span class="category-input__placeholder">Category</span>
                <span class="category-input__border"></span>
            </label>

            <input type="submit" value="ADD" class="button--category-add">
        </form>
    </transition>

</div>
    
</template>

<script>
export default {
    name: 'categoryInput',

    props: {
        visible: Boolean // ボタンクリックによって表示・非表示が切り替わる
    },

    watch: {

        /**
         * 表示・非表示が切り替わった後は、入力欄のスペースの確保・余分なスペースの削除を行うため、
         * カテゴリ一覧の位置を変動させる
         */
        visible() {

            this.$nextTick(() => {

                // 変動後の高さをコンテナに伝播 
                this.$emit('modifyScale', this.$refs.categoryInput.clientHeight)
            })

        }
    }
}
</script>

<style>
</style>