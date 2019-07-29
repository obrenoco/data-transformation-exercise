# Data transformation exercises

## Today we practice & expand upon: `map`, `filter`, `reduce`, `find` 

Why? Because in JavaScript we often have to deal with arrays of objects. 

In that case: Use `map`, `filter`, `reduce` and `find`! --


![](https://media.giphy.com/media/iz0gAwkJzWg8g/giphy.gif)

## This repo has exercises with tests

- There are test files set up that check the functionality of the functions you have to write.
- Test files end with .test.js, write your code in the corresponding .js file. 
- 1.map-filter-find.js are exercises that recap map, filter and find. Choose the appropriate method for each function.
- 2.reduce.js are exercises that recap reduce and expand on more powerful ways to use it (it's super effective!).
- 3.data-mining.js are exercises where you have to combine different pieces of data, (gyms, trainers and pokemon) to get the information you need. That can mean nesting maps & find or chaining array methods together in a multi-step process.

## Solutions

The solutions to these exercises can be found on the [feature/solutions](https://github.com/Codaisseur/dataTransFormationExercises/tree/feature/solutions) branch


## How to do these exercises:

```bash
# Clone the repo
git clone git@github.com:kerenKi/dataTransFormationExercises.git
# change directory
cd dataTransFormationExercises
# Install dependencies
npm install
# Run the exercises
# 1.)
npm run exercise1
# 2.)
npm run exercise2
# 3.) 
npm run exercise3
# all
npm run test
```

Running the exercises this way will make use of the `--watch` functionality of jest. 

- That means that when you change your code, the tests will be run again (It's super ef.. well you get the idea).
- To stop running the tests you can press `ctrl + c`


# This part is for the teachers
In this forked repo from https://github.com/Codaisseur/dataTransFormationExercises there are some changes:

1. [Package.json](https://github.com/kerenKi/dataTransFormationExercises/blob/master/package.json)

The script for jest includes a default reporter coming from the root directory

2. [customSequencer.js](https://github.com/kerenKi/dataTransFormationExercises/blob/master/customSequencer.js)

Make sure the tests are running by order

3. [customReporter.js](https://github.com/kerenKi/dataTransFormationExercises/blob/master/customReporter.js)

The reporter tracks changes in the tests. the first time the student will run the tests there will be no record of it.
After the student makes a change in the files and run the tests again the reporter will start sending reports to Heroku database every time the tests run.

More details about the customReporter:

- The variable `createKey` takes the name of the test and adds a key, based on the alphabet.

- The variable `createReport` checks per test (question) if the student attempted, failed or passed. ancestorTitles refer to the test file where it uses describe. E.g. 'Array methods: map, filter & find'

- The variable `getDayNameAndVersion: name` refers to the name of the whole day, e.g. dataTransformations and version refers to the version in the package.json, e.g. 1.0.0

- The variable `getGitDetails` - don't confuse the gitName with your gitUsername. The gitName is the one you created once on your own computer. It could be the same but it could be different.

- The variable `output` posts all data to the database using the axios post request to /evaluations.

Example of data output:
```
          { day:'data-transformations@1.2.0',
            gitName:'Rein',
            gitEmail:'Rein@gmail.com',
            evaluation:[
                         {
                            exercise: 'Array methods: map, filter & find: 1.1 ',
                            attempted: true,
                            passed: true,
                            key:
                            '[A] getPokeNames: Transforms an array of pokemons into an array of pokemon names',
                            failureMessages: [],
                            meta: { learning_goals: [Array] } 
                        },
                        { 
                            exercise: 'Array methods: map, filter & find: 1.1 ',
                            attempted: true,
                            passed: true,
                            key: '[B] getPokemonById: Gets a pokemon object by their id',
                            failureMessages: [],
                            meta: { learning_goals: [Array] } 
                        },
                        { 
                            exercise: 'Array methods: reduce: 1.1',
                            attempted: true,
                            passed: true,
                            key:
                            '[C] calculateTotalEggDistance: calculates how for you have to walk to hatch one of each pokemon egg',
                            failureMessages: [],
                            meta: [Object] 
                        },
                        { 
                            exercise: 'Array methods: reduce:',
                            attempted: true,
                            passed: false,
                            key:
                                '[D] getHeaviestPokemon: returns the heaviest pokemon from an array of pokemons',
                            failureMessages: [],
                            meta: [Object] 
                        },
                        { 
                            exercise: 'Array methods: map, filter & find: ',
                            attempted: false,
                            passed: false,
                            key:
                                '[E] getAdultPokemons: Transforms an array of pokemon into an array of pokemon who cannot be found in eggs',
                            failureMessages: [],
                            meta: [Object] },
                    ]
        }

```

### `other relevant repos`

The teacher can see a dashboard with 4 charts displaying the students progress during the day:  

front-end of the app is available [here](https://github.com/ajvanliere/Continuous-Testing-Client/).

back-end of the app is available [here](https://github.com/rafaelrolivares/continuous-student-testing-server)


## contributors
This continuous testing project was developed by 
- [Andrea Van Liere](https://github.com/ajvanliere)
- [Keren Kinberg](https://github.com/kerenki)
- [Rafael Olivares](https://github.com/rafaelrolivares)
- [Pedro Abel Diaz](https://github.com/coderHook)

As graduates of the Codaisseur Academy in Amsterdam we developed this tool with the help of Rein op ‘t Land and Kelley van Evert -  teachers and developers at Codaisseur. 

