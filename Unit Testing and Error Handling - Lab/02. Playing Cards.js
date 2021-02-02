function foo(first, second) {
    const suits = { 'S':'\2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' }
    const faces = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']
    function Cards(face , suit) {
        this.check(face, suit)
        this.face = face
        this.suit = suit
        this.toString()
    }
    Cards.prototype.check = function (face, suit) {
        if(!faces.includes(face) || !suits[suit] ){
            throw new Error('Invalid value')
        }
    }
    Cards.prototype.toString = function () {
        console.log(this.face + this.suit);
        return this.face + suits[this.suit]
    }
    return new Cards(first,second)
}

console.log(foo ( 'J', 'D' ));
console.log(foo ( '10', 'H' ));
console.log(foo ( '1', 'C' ));