function extract(content) {
    return document.getElementById(content).textContent.match(/\((?<name>[\s\w]+)\)/gmi)
        .map( x => /\((?<name>[\s\w]+)\)/gmi.exec(x).groups.name)
        .join('; ')
}

let text = extract("content");

// function extract(content) {
//     return document.getElementById(content).textContent
//         .match(/\(\w+\s*\w*\s*\w*\)/g)
//         .filter(x => x !== /[\(\)]/g)
//         .join('; ')
// }