<template>

    <ul 
        v-bind:style="menuStyle"
        class="category-edit__menu"
    >
        <li>Edit</li>
        <li>Delete</li>
        <li>Close</li>
    </ul>

</template>
<script>
export default {
    name: 'categoryMenu',

    props: {
        currentEditCategory: {
            type: Object
        },
        posX: Number,
        posY: Number,
        visible: Boolean
    },

    data() {
        return {

            menuStyle: {
                top: 0,
                left: 0
            }

        }
    },

    watch: {

        visible() {

            if (this.visible) {

                this.setPos()
            }
        }
    },

    methods: {

        setPos() {
            this.menuStyle = {
                top: `${this.posY + 10}px`,
                left: `${this.posX + 20}px`
            }
        }

    },

}
</script>
<style scoped>

</style>