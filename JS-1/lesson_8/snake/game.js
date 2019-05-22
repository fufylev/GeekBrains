"use strict";

let game = {
    settings,
    renderer,
    snake,
    food,
    tickInterval: null,
    status,
    score,
    
    init( userSettings = {} ) {
        Object.assign( this.settings, userSettings );
        
        if ( !this.settings.validate() ) {
            return;
        }
        
        this.renderer.renderMap( this.settings.rowsCount, this.settings.colsCount );
        
        this.setEventHandlers();
        
        this.snake.init( this.getStartSnakePoint(), 'up' );
        this.food.setFoodCoordinates( this.getRandomCoordinates() );
        this.score.eraser();
        this.reset();
    },
    
    reset() {
        this.stop();
        this.snake.init( this.getStartSnakePoint(), 'up', this.settings.colsCount - 1, this.settings.rowsCount - 1 );
        this.food.setFoodCoordinates( this.getRandomCoordinates() );
        this.render();
    },
    
    render() {
        this.renderer.render( this.snake.body, this.food.getFoodCoordinates() );
    },
    
    play() {
        this.status.setPlaying();
        this.tickInterval = setInterval( () => game.tickHandler(), 1000 / this.settings.speed );
        this.changePlayButton( 'Стоп' );
    },
    
    tickHandler() {
        if ( !this.canSnakeMakeStep() ) {
            this.finish();
            return;
        }
        
        if ( this.food.isFoodPoint( this.snake.getNextStepHeadPoint() ) ) {
            this.snake.incrementBody();
            this.score.increment();
            this.food.setFoodCoordinates( this.getRandomCoordinates() );
            if ( this.isGameWon() ) {
                this.finish();
            }
        }
        
        this.snake.makeStep();
        this.render();
    },
    
    isGameWon() {
        return this.snake.body.length >= this.settings.winLength;
    },
    
    finish() {
        //ставим статус в финиш
        this.status.setFinished();
        //останавливаем шаги змейки
        clearInterval( this.tickInterval );
        //меняем кнопку игры, сделаем серой и напишем игра закончена
        this.changePlayButton( 'Игра закончена', true );
    },
    
    stop() {
        this.status.setStopped();
        clearInterval( this.tickInterval );
        this.changePlayButton( 'Старт' );
    },
    
    getStartSnakePoint() {
        return {
            x: Math.floor( this.settings.colsCount / 2 ),
            y: Math.floor( this.settings.rowsCount / 2 )
        }
    },
    
    changePlayButton( textContent, isDisabled = false ) {
        let playButton = document.getElementById( 'playButton' );
        playButton.textContent = textContent;
        isDisabled ? playButton.classList.add( 'disabled' ) : playButton.classList.remove( 'disabled' );
    },
    
    getRandomCoordinates() {
        let exclude = [ ...this.snake.body, this.food.getFoodCoordinates() ];
        
        while ( true ) {
            let rndPoint = {
                x: Math.floor( Math.random() * this.settings.colsCount ),
                y: Math.floor( Math.random() * this.settings.rowsCount ),
            };
            
            let excludeContainsRndPoint = exclude.some( function ( elem ) {
                return rndPoint.x === elem.x && rndPoint.y === elem.y;
            } );
            
            if ( !excludeContainsRndPoint ) {
                return rndPoint;
            }
        }
    },
    
    playClickHandler() {
        if ( this.status.isPlaying() ) {
            this.stop();
        } else if ( this.status.isStopped() ) {
            this.play();
        }
    },
    
    setEventHandlers() {
        document.getElementById( 'playButton' ).onclick = function () {
            game.playClickHandler();
        };
        document.addEventListener( 'keydown', () => this.keyDownHandler( event ) );
        document.getElementById( 'newGameButton' ).addEventListener( 'click', () => this.newGameClickHandler() );
    },
    
    newGameClickHandler() {
        this.reset();
    },
    
    keyDownHandler( event ) {
        if ( !this.status.isPlaying() ) {
            return;
        }
        
        let direction = this.getDirectionByCode( event.code );
        if ( this.canSetDirection( direction ) ) {
            this.snake.setDirection( direction )
        }
    },
    
    canSetDirection( direction ) {
        return direction === 'up' && this.snake.lastStepDirection !== 'down' ||
            direction === 'right' && this.snake.lastStepDirection !== 'left' ||
            direction === 'down' && this.snake.lastStepDirection !== 'up' ||
            direction === 'left' && this.snake.lastStepDirection !== 'right';
    },
    
    getDirectionByCode( code ) {
        switch ( code ) {
            case 'KeyW':
            case 'ArrowUp':
                return 'up';
            case 'KeyD':
            case 'ArrowRight':
                return 'right';
            case 'KeyS':
            case 'ArrowDown':
                return 'down';
            case 'KeyA':
            case 'ArrowLeft':
                return 'left';
            default:
                return '';
        }
    },
    
    canSnakeMakeStep() {
        let nextHeadPoint = this.snake.getNextStepHeadPoint();
        
        return !this.snake.isBodyPoint( nextHeadPoint ); /*&&
            nextHeadPoint.x < this.settings.colsCount &&
            nextHeadPoint.y < this.settings.rowsCount &&
            nextHeadPoint.x >= 0 &&
            nextHeadPoint.y >= 0;*/
    },
};

window.onload = function () {
    game.init( { speed: 3, winLength: 5 } );
};

