<template>

    <!-- コマンド編集ダイアログ -->
    <div class="command-edit__dialog">

        <header class="command-edit__dialog__header">
            <h3>Edit</h3>
            <h3 v-on:click="closeDialog">×</h3>
        </header>

        <form class="command-edit__dialog__input hidden">

            <label for="editTitle" class="command-update">
                <input type="text" id="editTitle" placeholder=" " v-model="command.name">
                <span class="command-update__placeholder">Title</span>
                <span class="command-update__border"></span>
            </label>

            <label for="editSubCategory" class="command-update">
                <input type="text" id="editSubCategory" placeholder=" " v-model="command.subCategoryName">
                <span class="command-update__placeholder">Sub Category</span>
                <span class="command-update__border"></span>
            </label>


            <label for="editMemo" class="command-textarea--update">
                <textarea id="editMemo" placeholder=" " v-model="command.memo"></textarea>
                <span class="command-textarea--update__placeholder">Memo</span>
                <span class="command-textarea--update__border"></span>
            </label>

            <input type="submit" 
                value="Update Command" class="button--command-update">

        </form>
    </div>    

</template>

<script>

export default {

    name: 'commandEdit',

    props: {
        command: Object,
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