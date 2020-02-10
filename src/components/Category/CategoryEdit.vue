<template>

    <!-- カテゴリ編集ダイアログ -->
    <div class="category-edit__dialog">

        <header class="category-edit__dialog__header">
            <h3>Edit</h3>
            <h3 v-on:click="closeDialog">×</h3>
        </header>

        <form class="category-edit__dialog__input hidden">

            <label for="editCategoryName" class="category-update">
                <input type="text" id="editCategoryName" placeholder=" ">
                <span class="category-update__placeholder">Category</span>
                <span class="category-update__border"></span>
            </label>

            <input type="submit" 
                value="Update Category" class="category-button--update">

        </form>
    </div>    

</template>

<script>

export default {

    name: 'categoryEdit',

    props: {
        id: Number,
        name: String,
        visible: Boolean
    },

    methods: {

        closeDialog() {
            this.$emit('close')
        }
    }

}
</script>

<style>
</style>