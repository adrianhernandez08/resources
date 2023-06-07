
// fetch('https://api.github.com/users');
// myPromise.then(response => console.log(response));
// myPromise.catch(error => console.error(error));


// $.ajax('https://api.github.com/users').done(function(data){
//     console.log("Jquery");
//     console.log(data);
//     console.log(data.name);
// });
//
// fetch('httsp://pokeapi.co/api/v2/pokemon/charmander').then(data => data.json()).then(function(data){
//     console.log("fetch");
//     console.log(data);
//     console.log(data.name);
// });

// fetch('httsp://pokeapi.co/api/v2/pokemon/charmander').then(function(data){
//     console.log("fetch");
//     console.log(data);
//     console.log(data.name);
// });

// const myPromise = fetch('https://api.github.com/users');
// myPromise.then(response => console.log(response));
// myPromise.catch(error => console.error(error));

// const githubPromise = fetch('https://api.github.com/repositories');
// const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
//
// Promise.all([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         // here data is an array of the resolved values from each promise
//         // we can now do something with both pieces of data
//     })
//     .catch(function(error) {
//         // handle errors
//     });


Promise.resolve('one').then((one) => {
    console.log(one);
    return 'two';
}).then((two) => {
    console.log(two);
    return 'three';
}).then((three) => {
    console.log(three);
});


