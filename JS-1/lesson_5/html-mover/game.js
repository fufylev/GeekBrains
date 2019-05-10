renderer.renderBoard();

window.addEventListener( 'keyup', function ( event ) {
    //console.dir(event);
    mover.makeStep( event );
} );
