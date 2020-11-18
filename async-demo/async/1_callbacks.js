//This is called pyramid of DOOM, callback DEAD
describe('Callback', () => {
    it('test file', () => 
    {
        const fs = require("fs");
    fs.readFile('./async-demo/async/data/1.json', {encoding: "UTF8"}, function (
    err,
    contentFirst
    ) 
    {
        if (err)
        {
            throw err;
        }
        console.log("Got first file", contentFirst);
        fs.readFile('./async-demo/async/data/2.json', {encoding: "UTF8"}, function (
            err, contentSecond
        ) {
            if(err) {
                throw err;
            }
            console.log("Got second file", contentSecond);
            fs.readFile('./async-demo/async/data/3.json',
            {encoding: "UTF8"},
            function (err, contentThird)
            {
                if (err) {
                    throw err;
                }
                console.log("Got third file", contentThird)
            });
    });
    });
    browser.url('/create_account');
    browser.refresh()
    browser.refresh()
    })
})
