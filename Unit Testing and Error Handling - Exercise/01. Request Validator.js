function foo(obj) {
    let {method, uri, version, message} = obj
    let methods = ['GET', 'POST', 'DELETE', 'CONNECT']
    let uriPattern = /^([\w.]+)$|\*/g
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0' ]
    let msgPattern = /^([^<>\\&'"]*)$/g
    if(!methods.includes(method) || method === undefined){
        throw new Error('Invalid request header: Invalid Method')
    }
    if(!uriPattern.test(uri) || uri === undefined){
        throw new Error('Invalid request header: Invalid URI')
    }
    if(!versions.includes(version) || version === undefined){
        throw new Error('Invalid request header: Invalid Version')
    }
    if(!msgPattern.test(message) || message === undefined){
        throw new Error('Invalid request header: Invalid Message')
    }
    return obj
}
console.log(
    foo({
        method: 'POST',
        version: 'HTTP/2.0',
        message: 'rm -rf /*'
    })
)