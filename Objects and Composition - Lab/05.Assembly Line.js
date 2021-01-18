function foo() {
    return {
        hasClima(obj) {
            obj.temp = 21
            obj.tempSettings = 21
            obj.adjustTemp = function () {
                if (this.temp < this.tempSettings) {
                    this.temp += 1
                } else if (this.temp > this.tempSettings) {
                    this.temp -= 1
                }
            }
        },
        hasAudio(obj) {
            obj.currentTrack = null
            obj.nowPlaying = function () {
                if (this.currentTrack !== null) {
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            }
        },
        hasParktronic(obj) {
            obj.checkDistance = function (x) {
                let r
                if(x < 0.1) { r = 'Beep! Beep! Beep!'}
                else if(0.1 <= x && x < 0.25 ) { r = "Beep! Beep!" }
                else if(0.25 <= x && x < 0.5 ) { r = "Beep!" }
                console.log(r);
            }
        },

    }
}
const assemblyLine = foo();
const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);