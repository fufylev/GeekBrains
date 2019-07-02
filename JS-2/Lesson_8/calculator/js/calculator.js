const app2 = new Vue( {
    el: '#app2',
    data: {
        input: '',
        mathOp: null,
        operations: {
            "-": ( a, b ) => a - b,
            "+": ( a, b ) => a + b,
            "*": ( a, b ) => a * b,
            "/": ( a, b ) => a / b,
            "^": ( a, b ) => Math.pow( a, b )
        },
    },
    computed: {
        output() {
            if ( this.input.length ) {
                let split = this.input.replace( ( /(\d+\.\d+)(\D)(\d+\.\d+)/g ), '$1 $2 $3' );
                let str = split.split( ' ' );
                let a = str[ 0 ], op = str[ 1 ], b = str[ 2 ];
                return this.calculate( +a, +b, op );
            }
        }
    },
    methods: {
        addNumber( number ) {
            this.input += number;
        },
        addSymbol( simbol ) {
            if (this.mathOp ) {
                return
            }
            this.input += ` ${ simbol } `;
            this.mathOp = simbol;
        },
        calculate( a, b, op ) {
            if ( isNaN( a ) || isNaN( b ) || a === null || b === null || b===0) {
                return NaN;
            } else if ( !this.operations[ op ] ) {
                return NaN;
            }
            
            return this.operations[ op ]( +a, +b );
        },
        clear() {
            this.mathOp = null;
            this.input = '';
        },
        // оставляем лазейку добавить метод в будущем
        addMethod( name, func ) {
            this.operations[ name ] = func
        }
    }
} );