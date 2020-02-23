<template>

    <div class="command-container"> 
    
        <!-- カテゴリ一覧 -->
        <category-container></category-container>

        <!-- コマンド一覧 -->
        <command-container></command-container>


    </div><!-- /container -->
</template>

<script>
import CategoryContainer from '../components/Category/CategoryContainer.vue'
import CommandContainer from '../components/Command/CommandContainer.vue'

export default {
    name: 'command',
    
    components: {
        categoryContainer: CategoryContainer,
		commandContainer: CommandContainer
    },

}
</script>

<style lang="scss">
</style>