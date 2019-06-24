export default {
    data() {
        return {
            operand1: 2,
            operand2: 5,
            actions: '^',
            operations: {
                "-": ( a, b ) => a - b,
                "+": ( a, b ) => a + b,
                "*": ( a, b ) => a * b,
                "/": ( a, b ) => a / b,
                "^": ( a, b ) => Math.pow( a, b )
            },
            isIncorrectMathOperation: false,
            isIncorrectOperand: false,
        }
    },
    computed: {
        result() {
            return this.calculate( this.operand1, this.operand2, this.actions )
        }
    },
    methods: {
        calculate( a, b, op ) {
            
            if ( isNaN( a ) || isNaN( b ) || a === null || b === null ) {
                this.isIncorrectOperand = true;
                return NaN;
            } else if ( !this.operations[ op ] ) {
                this.isIncorrectMathOperation = true;
                return NaN;
            } else {
                this.isIncorrectMathOperation = false;
                this.isIncorrectOperand = false;
            }
            
            return this.operations[ op ]( +a, +b );
        },
        // оставляем лазейку добавить метод в будущем
        addMethod( name, func ) {
            this.operations[ name ] = func
        }
    }
};