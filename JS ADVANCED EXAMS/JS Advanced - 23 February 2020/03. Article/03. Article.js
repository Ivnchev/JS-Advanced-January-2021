class Article {
    constructor(title, creator) {
        this.title = title
        this.creator = creator
        this._comments = []
        this._likes = []
        this._counter = 1
    }
    get likes() {
        return {
            [this._likes.length === 0]: `${this.title} has 0 likes`,
            [this._likes.length === 1]: `${this._likes[0]} likes this article!`,
            [this._likes.length > 1]: `${this._likes[0]} and ${this._likes.length - 1} others like this article!`
        }[true]
    }
    like(username) {
        if (this._likes.find(x => x === username)) {
            throw new Error('You can\'t like the same article twice!')
        }
        if (username === this.creator) {
            throw new Error('You can\'t like your own articles!')
        }
        this._likes.push(username)
        return `${username} liked ${this.title}!`
    }
    dislike(username) {
        if (!this._likes.find(x => x === username)) {
            throw new Error('You can\'t dislike this article!')
        }
        this._likes.splice(this._likes.indexOf(username), 1)
        return `${username} disliked ${this.title}`
    }
    comment(username, content, id) {
        let foundUserId = this._comments.find(o => o.id === id)

        if (foundUserId === undefined) {
            this._comments.push({ 'id': this._counter++, 'username': username, 'content': content, 'replies': [] })
            return `${username} commented on ${this.title}`
        }
            let postReplies = Array.from(foundUserId.replies).find(o => o.id === id)
            if (!postReplies) {
                foundUserId.replies.push({ id: `${id}.${foundUserId.replies.length + 1}`, 'username': username, 'content': content })
            }
            return `You replied successfully`
    }

    toString(type) {
        let sortType = {
            'asc': () => {
                return this._comments.sort((a, b) => a.id - b.id)
                    .map(x => {
                        return `-- ${x.id}. ${x.username}: ${x.content}${
                            x.replies.length < 1
                                ? ''
                                : x.replies.sort((a, b) => a.id - b.id)
                                    .map(x => `\n--- ${x.id}. ${x.username}: ${x.content}`).join('')
                            }`
                    }).join('\n')
            },
            'desc': () => {
                return this._comments.sort((a, b) => b.id - a.id)
                    .map(x => {
                        return `-- ${x.id}. ${x.username}: ${x.content}${
                            x.replies.length < 1
                                ? ''
                                : x.replies.sort((a, b) => b.id - a.id)
                                    .map(x => `\n--- ${x.id}. ${x.username}: ${x.content}`).join('')
                            }`
                    }).join('\n')
            },
            'username': () => {
                return this._comments.sort((a, b) => a.username.localeCompare(b.username))
                    .map(x => {
                        return `-- ${x.id}. ${x.username}: ${x.content}${
                            x.replies.length < 1
                                ? ''
                                : x.replies.sort((a, b) => a.username.localeCompare(b.username))
                                    .map(x => `\n--- ${x.id}. ${x.username}: ${x.content}`).join('')
                            }`
                    }).join('\n')
            },
        }

        return [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:`,
            `${sortType[type]()}`
        ].join('\n').trim()
    }
}

let art = new Article("My Article", "Anny");
art.like("John")
console.log(art.likes)
art.like("Ivan")
art.like("Steven")
console.log(art.likes)
art.comment("Anny", "Some Content")
art.comment("Ammy", "New Content", 1)
art.comment("Zane", "Reply", 2)
art.comment("Jessy", "Nice :)")
console.log(art.comment("SAmmy", "Reply@", 2));
console.log(art.toString('asc'))

// let art = new Article("My Article", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));


// [
//     {
//         id: 123,
//         username: 'asd',
//         content: 'asdasdas',
//         replies: [
//         {
//             id: 123,
//             username: 'asd',
//             content: 'asdasdasd,'
//         },
//        ]
//     }
// ]