
# Fibonacci API
The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones.

## Parameters

- `memberCount` (integer): The number of members in the Fibonacci sequence (must be between 1 and 100)

## Response

- `member-count`: The number of members requested
- `sequence`: The Fibonacci sequence
- `total`: The sum of the Fibonacci sequence

## Install Tools

- [Node.js](https://nodejs.org/)
- [Postman](https://www.postman.com/downloads/)

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/panyata05/Backend.git
    
    ```

2. Install dependencies:
    ```bash
    npm install
    npm install express
    ```

3. Start the server:
    ```bash
    npm start
    ```

## Testing the API

### Using Postman:

- Send a GET request to `http://localhost:3000/api/v1/test`
   
### Example Test:

- Send a GET request to `http://localhost:3000/api/v1/test/8`

#### Expected Response:
```json
{
    "member-count": 8,
    "sequence": [0, 1, 1, 2, 3, 5, 8, 13],
    "total": 33
}
```
## Information Sources
- [Fibonacci principle](https://www.rapidtables.org/th/math/number/fibonacci.html)
- [Fibonacci Sequence(JavaScript)](https://www.programiz.com/javascript/examples/fibonacci-series)
- [แนวออกแบบ RESTful API| by Phayao Boonon | Medium](https://phayao.medium.com/%E0%B9%81%E0%B8%99%E0%B8%A7%E0%B8%AD%E0%B8%AD%E0%B8%81%E0%B9%81%E0%B8%9A%E0%B8%9A-restful-api-%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%94%E0%B8%B5-c320d806e30b)
- [javascript - Generating Fibonacci Sequence - Stack Overflow](https://stackoverflow.com/questions/7944239/generating-fibonacci-sequence)
