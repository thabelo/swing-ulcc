<p align="center">
  <a href="#" target="blank"><img src="https://i.pinimg.com/originals/d2/5b/b9/d25bb9cd3fcaf6aa53c64e1ecf2df59a.jpg" width="320" alt="Nest Logo" /></a>
</p>

### About

This is a match making application for different personas by using mathematical algorithms. This is archived by using name matching algorithms, personalities and sexual charactaristics.

The application can be adjusted accordingly using weights for each option to refine the matching criteria. 
In the real world this would need to be tested with different weights and personality qualities. Ongoing training models should be able to givethe best fit for the weith and other characteristics used for match making.

## Assumptions

For calculator 2 and 3 I used random generated number within the defined range.
We are assuming for Bijection that we have collected personality elements and matched the apropriate data clusters to match each individual. 
Also the comparisons not violationg bijection law of the given personas.

The above also applies to dimorphic differeneces.

### Aggregation and weight 
It is makes sense to have the Bijection weight scored higher since personality is more important when matching 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## API Test

API can also be tested here 

http://bluelink.co.za:3000/calculate

```
curl --location --request POST 'http://bluelink.co.za:3000/calculate' \
--header 'Content-Type: application/json' \
--data-raw '{
    "string": "John loves Doe"
}'
```


