new Vue({
    el: '#app',
    data: {
        currentTab: 'one',
        tabs: ['one', 'two', 'three']
    },
    computed: {
        currentComp() {
            return `comp-${this.currentTab}`
        }
    }
})

// const app = new Vue({
//     el: '#app',
//     data: {
//         text: 'Hello World!',
//         counter: 0
//     },
//     // components: {
//     //     'some-el': someEl,
//     // },
//     // methods: {
//     //     some(){
//     //         console.log('instance')
//     //     }
//     // }
// })