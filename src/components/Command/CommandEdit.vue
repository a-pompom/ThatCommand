<template>

    <!-- コマンド編集ダイアログ -->
    <div class="command-edit__dialog">

        <header class="command-edit__dialog__header">
            <h3>Edit</h3>
            <h3 v-on:click="closeDialog">×</h3>
        </header>

        <form class="command-edit__dialog__input hidden">

            <label for="editCommandName" class="command-update">
                <input type="text" id="editCommandName" placeholder=" ">
                <span class="command-update__placeholder">Command</span>
                <span class="command-update__border"></span>
            </label>

            <input type="submit" 
                value="Update Command" class="command-button--update">

        </form>
    </div>    

</template>

<script>

export default {

    name: 'commandEdit',

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