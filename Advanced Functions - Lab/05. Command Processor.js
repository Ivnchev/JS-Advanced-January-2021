function solution() {
    let text = '';
    return {
        append : x => text += x,
        removeStart : n => text = text.substring(n),
        removeEnd : x => text = text.substring(0, text.length - x),
        print : () => console.log(text),
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
