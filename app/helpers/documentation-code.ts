export const nodejs = `// This is nodejs program to print Hello world
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log("The Server is running and connected");
});`;

export const python = `# This is python program which prints Hello, world! and second is add Two number

print('Hello, world!')

# This program adds two numbers

num1 = 1.5
num2 = 6.3

# Add two numbers
sum = num1 + num2

# Display the sum
print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))

`;

export const cpp = `// This is C++  Program is to print Hello World and Second is to add Two number

#include<iostream>
int main ()
{

  // To Print Hello World
  cout<<"Hello, World!");

  // To add Two number
  int a;
  int b;
  int c;
  cout<<"Enter First number"<<endl;
  cin>>a;
  
  cout<<"Enter the Second number"<<endl;
  cin>>b;

  int c = a + b;

  cout<<"The Addition of "<<a<<"and "<<b<<"is: "<<c<<endl;


  return 0;
}
`;

export const java = `// This is java program to print hello world and add two number in java

// This program to hello world
public class HelloWorld {
  public static void main(String[] args) {
      System.out.println("Hello, World!");
}

// This program to add two number
import java.util.Scanner;

public class HelloWorldAndAdd {
    public static void main(String[] args) {
        
        // Add two numbers
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the first number: ");
        double num1 = scanner.nextDouble();
        
        System.out.print("Enter the second number: ");
        double num2 = scanner.nextDouble();
        
        double sum = num1 + num2;
        System.out.println("Sum of " + num1 + " and " + num2 + " is " + sum);
        
        scanner.close();
    }
}

}
`;

export const react = `// This is react program to print Hello world and Add two number in react

// using npx to create a react app
npx create-react-app hello-world-app

// To print Hello world
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

export default App;

`

export const javascr = `// This is Javascript program to print hello world and add two number in javascript

// to print hello world
console.log("Hello, World!");

// to add two number
const num1 = 5;
const num2 = 7;
const sum = num1 + num2;
console.log("The sun of num1 and num2 is ",sum);

// you have to run this program in console of browser by using live server
`