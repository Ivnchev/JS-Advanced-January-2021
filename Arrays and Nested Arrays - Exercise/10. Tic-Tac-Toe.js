function foo(input) {
    let field = new Array(3).fill(0).map(x => x = new Array(3).fill(false))
    let player = 'X'
    let win = false

    win = input.some((z) => {
        let [x, y] = z.split(' ').map(Number)
        if (!field[x][y]) {
            field[x][y] = player
            if(checkWinner(field, player)) { return true}
            player = player === 'X' ? 'O' : 'X'
        } else if(field.some( x=> x.includes(false))){ console.log('This place is already taken. Please choose another!'); }
    })
    if( win ){ console.log(`Player ${player} wins!`); } 
    else if (!field.some( x=> x.includes(false))) { console.log(`The game ended! Nobody wins :(`); }
    field.forEach( x=> console.log( x.join('\t') ) )
    

    function checkWinner(field, player) {
        for (let i = 0; i < 3; i++) {
            if (( field[i][0] == player && field[i][1] == player && field[i][2] == player )
                || ( field[0][i] == player && field[1][i] == player && field[2][i] == player ) ){
                return true
            }
        }
        if (( field[0][0] == player && field[1][1] == player && field[2][2] == player )
            || ( field[2][0] == player && field[1][1] == player && field[0][2] == player ) ){
            return true
        }
    }
}
foo([
    '0 1', '0 0', '0 2',
    '2 0', '1 0', '1 1',
    '1 2', '2 2', '2 1',
    '0 0', ''
])
foo([
    '0 0', '0 0', '1 1',
    '0 1', '1 2', '0 2',
    '2 2', '1 2', '2 2',
    '2 1'
  ])
foo([
    '0 1', '0 0', '0 2',
    '2 0', '1 0', '1 2',
    '1 1', '2 1', '2 2',
    '0 0'
  ])