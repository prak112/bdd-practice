# Overview
 Behavior-Driven Development practice application developed through hands-on exercises from [Cucumber School](https://school.cucumber.io/courses/bdd-with-cucumber-javascript) using `cucumber-js`

<hr>
<br>

# Usage
## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/prak112/bdd-practice.git
    ```
2. Navigate to the project directory:
    ```sh
    cd bdd-practice
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Running Tests

Run the tests:
```sh
npm test
```

## Running Specific Features

To run specific feature files, use the following command:
```sh
npx cucumber-js path/to/your/feature/file.feature
```

## Additional Scripts

- To run tests with a specific tag:
    ```sh
    npx cucumber-js --tags "@yourTag"
    ```
- To generate a report:
    ```sh
    npx cucumber-js --format json:report.json
    ```


<hr>
<br>

# Credits
- [Cucumber School](https://school.cucumber.io/collections)
