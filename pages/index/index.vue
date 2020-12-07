<template>
    <scroll-view style="padding: 15px;box-sizing: border-box;">
       <text style="color: #666; font-size: 15px;">（ uniCloud admin 当前版本号 1.1.7, 可在 package.js 中查看 ）</text>
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
    </scroll-view>
</template>

<script>
    export default {
        data() {
            return {}
        },
        onLoad() {},
        methods: {}
    }
</script>

<style>
	/* #ifndef H5 */
	page {
		padding-top: 85px;
	}
	/* #endif */
</style>
