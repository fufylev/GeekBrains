const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue( {
    el: '#app',
    data: {
        //userSearch: '',
    },
    methods: {
        getJson( url ) {
            return fetch( url )
                .then( result => result.json() )
                .catch( error => this.$refs.error.showError(error) )
        },
        correctWord( value, words ) {
            let cases = [ 2, 0, 1, 1, 1, 2 ];
            return words[ ( value % 100 > 4 && value % 100 < 20 ) ? 2 : cases[ ( value % 10 < 5 ) ? value % 10 : 5 ] ];
        },
    },
} );