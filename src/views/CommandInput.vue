
<template>

    <form class="command-item-body__input">

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

</template>

<script>

export default {
    name: 'commandInput',

}
</script>

<style lang="scss">
</style>