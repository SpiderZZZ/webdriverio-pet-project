# webdriver-pet-project

Pet project after Heisenbug 2020

### Installing

First install all dependenices:
```
npm install
```

You will need running selenium server on `localhost:4444`, run it with webdriver-manager:
```
npm install -g webdriver-manager
webdriver-manager update
webdriver-manager start
```

Switch to new terminal tab, and run tests:
```
npm test
```

To run repl mode use this:

```
npm run repl
```