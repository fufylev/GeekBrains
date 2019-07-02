import Vue from 'vue'
import app from './component.js'

describe( 'Calculator', () => {
    //const defaultData = app.data();
    const vm = new Vue( app ).$mount();
    let a = 2, b = 5;
    let increment = '+';
    let decrement = '-';
    let multiplication = '*';
    let dividing = '/';
    let pow = '^';
    
    it( 'increment 2 + 5 = 7', () => {
        expect( vm.calculate( a, b, increment ) ).toBe( 7 )
    } );
    it( 'decrement 2 - 5 = -3', () => {
        expect( vm.calculate( a, b, decrement ) ).toBe( -3 )
    } );
    it( 'multiplication 2 * 5 = 10', () => {
        expect( vm.calculate( a, b, multiplication ) ).toBe( 10 )
    } );
    it( 'dividing 2 / 5 = 0.4', () => {
        expect( vm.calculate( a, b, dividing ) ).toBe( 0.4 )
    } );
    it( 'pow 2 ^ 5 = 32', () => {
        expect( vm.calculate( a, b, pow ) ).toBe( 32 )
    } );
    it( 'input of STRING, NULL or UNDEFINED should return NaN', () => {
        expect( vm.calculate( 'text', b, increment ) ).toBe( NaN );
        expect( vm.calculate( 'text', b, decrement ) ).toBe( NaN );
        expect( vm.calculate( null, b, decrement ) ).toBe( NaN );
        expect( vm.calculate( undefined, b, decrement ) ).toBe( NaN );
    } );
} );