Vue.component('comp-one', {
    template: `<p>1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequuntur, cumque dicta, earum est et, exercitationem explicabo harum quod sequi totam. Accusamus architecto, aut dignissimos fugiat quasi sunt tenetur.</p>`
});
Vue.component('comp-two', {
    template: `<p>2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequuntur, cumque dicta, earum est et, exercitationem explicabo harum quod sequi totam. Accusamus architecto, aut dignissimos fugiat quasi sunt tenetur.</p>`
});
Vue.component('comp-three', {
    template: `<p>3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda consectetur consequuntur, cumque dicta, earum est et, exercitationem explicabo harum quod sequi totam. Accusamus architecto, aut dignissimos fugiat quasi sunt tenetur.</p>`
})


// Докальная регистрация
// const error = {
//     template: `<p>Error component</p>`
// };
//
// const someEl = {
//     props: ['title', 'counter'],
//     // data(){
//     //   return {
//     //       counter: 0
//     //   }
//     // },
//     components: {
//         'error': error,
//     },
//     methods: {
//         increase(){
//             this.counter++
//         },
//         some(){
//             console.log('component');
//         }
//     },
//     template: `<div class="wrap">
//                     <h2 @click="some">{{ title }}</h2>
//                     <button @click="$emit('increase')">Increase</button>
//                     <slot></slot>
//                     <h2>Counter {{ counter }}</h2>
//                     <error></error>
//                 </div>`
// };



// Глобальная регистрация
// Vue.component('some-el', {
//     props: ['title', 'counter'],
//     // data(){
//     //   return {
//     //       counter: 0
//     //   }
//     // },
//     methods: {
//         increase(){
//             this.counter++
//         },
//         some(){
//             console.log('component');
//         }
//     },
//     template: `<div class="wrap">
//                     <h2 @click="some">{{ title }}</h2>
//                     <button @click="$emit('increase')">Increase</button>
//                     <slot></slot>
//                     <h2>Counter {{ counter }}</h2>
//                     <error></error>
//                 </div>`
// });

// Vue.component('error', {
//     template: `<p>Error component</p>`
// })