const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/calculate', (req, res) => {
  const { firstNumber, operator, secondNumber } = req.body;

  const num1 = parseFloat(firstNumber);
  const num2 = parseFloat(secondNumber);

  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'ინფორმაცია არასწორედ არის გადმოცემული შეასწორე!!';
  }

  res.send(`შედეგი: ${firstNumber} ${operator} ${secondNumber} = ${result}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
