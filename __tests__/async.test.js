function async_func() {
    return new Promise(resolve => {
        console.log("start async_func")
        setTimeout(function() {
            console.log('end async_func')
            resolve('done')
        }, 100)
    })
}

test('async_func test', done => {
    async_func().then(msg => {
        expect(msg).toBe('done')
        done()
    })
})