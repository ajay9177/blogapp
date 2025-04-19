import React from "react";

const articles = [
    {
        name: "learn-react",
        title: "The fastest way to learn React",
        thumbnail: "/images/blog1.jpeg",
        content: [
            `React is a JavaScript library used to build user interfaces, especially for single-page applications. It's maintained by Facebook and makes it easy to build reusable UI components.`,
            `To get started quickly, create a new React app using Create React App: 
            \`npx create-react-app my-app\`. Then navigate to the folder with \`cd my-app\` and start the server using \`npm start\`.`,
            `Example: A simple React component looks like this:
            \n\nfunction Welcome() {\n  return <h1>Hello, React!</h1>;\n}`,
            `React uses a concept called "JSX", which allows you to write HTML inside JavaScript. It makes the code easy to read and understand.`,
            `Practice building small apps like a to-do list, counter app, or weather app to strengthen your React skills.`
        ]
    },
    {
        name: "learn-mongodb",
        title: "The fastest way to learn MongoDB",
        thumbnail: "/images/blog2.jpeg",
        content: [
            `MongoDB is a NoSQL database that stores data in JSON-like documents. It’s widely used in full-stack development, especially with Node.js.`,
            `Unlike SQL databases, MongoDB doesn’t require a predefined schema. This makes it very flexible and great for handling unstructured data.`,
            `Example: A document in MongoDB looks like this:
            \n\n{\n  "name": "John",\n  "age": 25,\n  "email": "john@example.com"\n}`,
            `You can interact with MongoDB using the MongoDB Compass GUI or command-line tools. Common commands include:
            \n- \`db.collection.find()\` to fetch data\n- \`db.collection.insertOne()\` to insert data`,
            `Practice by creating a simple database for a blog, to-do list, or product catalog.`
        ]
    },
    {
        name: "learn-html",
        title: "The fastest way to learn HTML",
        thumbnail: "/images/blog3.jpeg",
        content: [
            `HTML stands for HyperText Markup Language. It's the foundation of all websites and is used to create and structure web pages.`,
            `Web pages are built using HTML elements like headings, paragraphs, links, and images. These elements are enclosed in angle brackets.`,
            `Example:
            \n\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>My First Page</title>\n  </head>\n  <body>\n    <h1>Hello World!</h1>\n    <p>This is a paragraph.</p>\n  </body>\n</html>`,
            `Start by learning common tags like <h1> to <h6>, <p>, <a>, <img>, <div>, and <span>. Try building a basic personal website.`,
            `Use free online editors like CodePen or JSFiddle to experiment and learn HTML by doing.`
        ]
    }
];

export default articles;
