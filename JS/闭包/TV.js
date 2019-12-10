

function createTV() {
    let count = 0;
    let tid;
    function play() {
        tid = setInterval(function() {
            count++;
            console.log('正在播放', count);
        }, 1000);
    }

    function stopPlay() {
        clearInterval(tid);
    }

    return {
        turnOn() {
            console.log('正在开机...');
            play();
        },

        turnOff() {
            console.log('正在关机...')
            stopPlay();
        }
    }
}



let count = 0;
let tid;
function createTV222() {
    function play() {
        tid = setInterval(function() {
            count++;
            console.log('正在播放', count);
        }, 1000);
    }

    function stopPlay() {
        clearInterval(tid);
    }

    return {
        turnOn() {
            console.log('正在开机...');
            play();
        },

        turnOff() {
            console.log('正在关机...')
            stopPlay();
        }
    }
}