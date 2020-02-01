<template>

    <div class="command-container"> 
    
        <!-- カテゴリ一覧 -->
        <category-container></category-container>

        <!--コマンド エリア -->
        <article class="command-item">

            <!-- ヘッダ -->
            <header class="command-item-header">
                <h2>Item</h2>
                <h2 v-on:click="toggleCommandInputVisibility" class="command-item-header__button button--round new-command"></h2>
            </header>

            <main class="command-item-body">

                <!-- 入力欄 -->
                <transition name="input-toggle">
					<command-input ref="commandInput" v-show="isCommandInputVisible"></command-input>
                </transition>

                <!-- コマンド一覧 -->
                <ul v-bind:style="commandListTranslate" class="command-item-body__list">
                    <li v-for="(subCategory,index) in commandList" v-bind:key="subCategory.subCategoryName">

                        <ul v-bind:title="subCategory.subCategoryName" class="command-list" >

                            <span><i class="fas fa-cog command-edit"></i></span>

                            <li v-for="(item, itemIndex) in subCategory.subCategoryItemList"
                                v-bind:key="item.itemId"
                                v-bind:ref="`subCategoryItem-${index}`"
								v-bind:style="commandList[index].subCategoryItemList[itemIndex].style" 

								class="command-list__item">
                                {{ item.itemName }}

                                <span v-on:click="toggleCommandMemoVisibility(index, itemIndex)" class="angle-down command-list__item--opener"></span>
                                <div 
									v-bind:ref="`itemMemo-${index}`"
									v-show="commandList[index].subCategoryItemList[itemIndex].isMemoVisible"
									class="command-list__item--memo">

										<pre class="command-memo">test1</pre>

                                </div>

                            </li>
                        </ul>

                    </li>
                    
                </ul>

            </main>

        </article>


    </div><!-- /container -->
</template>

<script>
import CommandService from '../service/commandService.js'
import CategoryContainer from './CategoryContainer.vue'
import CommandInput from './CommandInput.vue'

const ORIGIN_COMMAND_HEIGHT = 40
let commandService = null

export default {
    name: 'command',
    
    components: {
        categoryContainer: CategoryContainer,
		commandInput: CommandInput
    },

    data() {

        return {
            isCommandInputVisible: false,

            isCommandMemoVisible: false,

            commandListTranslate: {
                transform: ''
            },

            itemHeight: {
                height: ''
            },

			
			commandList: [
				{
					subCategoryName: 'SubCategory1',
					subCategoryItemList: [
						{
							itemId: '0',
							itemName: 'item1',
							memo: '',
							isMemoVisible: false,
							style: {
								height: ''
							}
						},
						{
							itemId: '1',
							itemName: 'item2',
							height: 40,
							memo: '',
							isMemoVisible: false,
							style: {
								height: ''
							}
						}
					]
				},
				{
					subCategoryName: 'SubCategory2',
					subCategoryItemList: [
						{
							itemId: '2',
							itemName: 'item1',
							memo: '',
							isMemoVisible: false,
							style: {
								height: ''
							}
						},
						{
							itemId: '3',
							itemName: 'item2',
							memo: '',
							isMemoVisible: false,
							style: {
								height: ''
							}
						}
					]
				}

			]
        }

    },

    methods: {

        toggleCommandInputVisibility() {
            this.isCommandInputVisible = !this.isCommandInputVisible

            this.$nextTick(() => {
				const commandListHeight = this.$refs.commandInput.$el.clientHeight
                this.commandListTranslate.transform = `translateY(${commandListHeight}px)`

            })
        },

        toggleCommandMemoVisibility(subCategoryIndex, itemIndex) {
			const commandItem = this.commandList[subCategoryIndex]["subCategoryItemList"][itemIndex]
            commandItem.isMemoVisible = !commandItem.isMemoVisible

            this.$nextTick(() => {

                const itemHeight = this.$refs[`subCategoryItem-${subCategoryIndex}`][itemIndex].clientHeight
				const memoHeight = this.$refs[`itemMemo-${subCategoryIndex}`][itemIndex].clientHeight

                if (memoHeight === 0) {
                    commandItem.style.height = `${ORIGIN_COMMAND_HEIGHT}px`

                    return

                }
				commandItem.style.height = `${memoHeight + itemHeight}px`
            })

        }
    },

    mounted() {

        commandService = new CommandService(this)
        commandService.test()

    }
}
</script>

<style lang="scss">
</style>