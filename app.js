function createGame(document) {
    const states = {
        observers: []
    }

    function subscribe(observerFunction) {
        states.observers.push(observerFunction)
    }

    function unsubscribeAll() {
        states.observers = []
    }

    function notifyAll(command) {
        for(observerId in states.observers) {
            states.observers[observerId](command)
        }
    }

    return {
        subscribe,
        unsubscribeAll,
        notifyAll
    }
}

const game = createGame(document)

game.subscribe(andar)
game.subscribe(correr)

function andar(command) {
    console.log('andar...', command)
}

function correr(command) {
    console.log('correr...', command)
}

document.addEventListener('keydown', (event) => {
    game.notifyAll(event.key)
})

