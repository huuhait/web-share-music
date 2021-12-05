<template>
<div>
    <Nuxt />
    <ZNotificationGroup/>
</div>
</template>

<script lang="ts">
import {
    Component,
    Vue
} from 'nuxt-property-decorator'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

@Component({
    components: {
        Header,
        Footer
    },
})

export default class Default extends Vue {
    data2 = {
        isMusicDetailPage: true
    }

    head() {
        return {
            title: 'Trang chủ',
        }
    }
}
</script>

<style lang="less">
body {
    font-family: 'Roboto', sans-serif;
}

</style>
