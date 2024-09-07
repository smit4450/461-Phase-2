//Used github copilot to write guideline in pseudocode

// 1. Import the necessary modules or libraries for reading the package.json file.
import fs = require('fs');
import minimist = require('minimist');

const args = minimist(process.argv.slice(2));

// 3. Inside the "readDependencies" function:
async function read_dependencies(package_url: string) {
    // a. Read the package.json file from the given path.
    const packageJson = await fs.promises.readFile(package_url, 'utf-8');
    
    // b. Parse the contents of the package.json file into a JSON object.
    const packageData = JSON.parse(packageJson);
    
    // c. Access the "dependencies" property of the JSON object to get the list of dependencies.
    const dependencies = packageData.dependencies;
    
    // 4. Return the list of dependencies.
    return dependencies;
}
//     a. Read the package.json file from the given path.
//     b. Parse the contents of the package.json file into a JSON object.
//     c. Access the "dependencies" property of the JSON object to get the list of dependencies.

// 4. Return the list of dependencies.

// 5. Call the "readDependencies" function with the path to the npm module as an argument.

// 6. Store the returned list of dependencies in a variable for further processing or display.

// 7. Handle any errors that may occur during the process, such as file not found or invalid JSON format.

// 8. Optionally, you can perform additional operations on the list of dependencies, such as filtering, sorting, or displaying them in a specific format.

// 9. End the program or continue with other tasks as needed.

//test read_dependencies with sample package


const commands = {
    hello: () => {
        const dependencies = read_dependencies('https://www.npmjs.com/package/browserify');
        console.log('Hello, world!');
        console.log(dependencies);
    },
    greet: () => {
        const name = args._[1] || 'Anonymous';
        console.log(`Hello, ${name}!`);
    },
};

const command = args._[0] as keyof typeof commands;
if (command && commands[command]) {
    commands[command]();
} else {
    console.log('Invalid command. Available commands: hello, greet');
}