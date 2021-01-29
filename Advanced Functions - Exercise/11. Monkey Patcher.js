solution = (() => {
    const cmd = {
        'upvote': o => o.upvotes++,
        'downvote': o => o.downvotes++,
        'score': o => {
            "use strict";
            let { upvotes, downvotes } = o;
            // let balance = upvotes - downvotes;
            let obfuscated = Math.ceil(0.25 * Math.max(upvotes, downvotes))
            let balance = (upvotes + obfuscated) - (downvotes + obfuscated)
            let rating = () => {
                if ((upvotes + downvotes) < 10) return 'new';
                else if (upvotes > (upvotes + downvotes) * 0.66) return 'hot';
                else if (balance >= 0 && (upvotes > 100 || downvotes > 100)) return 'controversial';
                else if (balance <= 10) return 'unpopular';
                return 'new'
            }
            if (upvotes + downvotes > 50) {
                upvotes += obfuscated;
                downvotes += obfuscated;
                return [upvotes, downvotes, balance, rating()]
            }
            return [upvotes, downvotes, balance, rating()]
        }
    }
    return { call: (post, command) => cmd[command](post) }
})()


let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

console.log(solution.call(post, 'upvote'))
console.log(solution.call(post, 'downvote'))
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
console.log(score);
solution.call(post, 'downvote');        // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
