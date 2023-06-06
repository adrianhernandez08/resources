(function HelloWorld() {
    const add2 = function (num) {
        return num + 2;
    }

    const add3 = num => num + 3;

    console.log(add2(6));
    console.log(add3(6));

    const addition = (x, y) => x + y;
    console.log(addition(4, 5));


    const sayHello = (name = "Dragon") => {
        if (typeof name === "string" && isNaN(name)) {
            return "Hello, " + name + "!"; //return `Hello, ${name} new line "!"
        } else {
            return "Hello, World!";
        }
    }
    console.log(sayHello("Jeff"));
    console.log(sayHello(true));
    console.log(sayHello('.25'));
    console.log(sayHello("Bethany"));
    console.log(sayHello());

// without block scope
    if (true) {
        var myName = 'codeup';
    }
    console.log(myName); // 'codeup'


    //calls function for each element in array
    const arr = ["Bill", "Dale", "Hank", "Boomhauer"];
    arr.forEach(name => console.log(name));
//same benefit and functionality of a loop "for each element of array"
    for (const name of arr) {
        console.log(name);
        if (name === "Dale") {
            console.log("pocket sand!");
            break;
        }
    }
    const mixedVals = [1, "Jim", true];
    for (const val of mixedVals){
        console.log(val);
    }

    const userName = prompt("What is your username?");
    const user ={
        userName : userName,
        id: 1
    }
    console.log(user);

    //object destructuring take properties from objects into variables
    const hamtaro= {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    };

    let {name, heightInMM} = hamtaro
    console.log(name); //let name = hamtaro.name; let heightInMM = hamtaro.heightInMM;
    console.log(heightInMM);
    hamtaro.name = "Gregory";
    console.log(hamtaro.name);

    console.log(Math.pow(4,2)); //return base number to power
    console.log(2 ** 4);
})();

