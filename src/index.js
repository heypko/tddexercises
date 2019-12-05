import React from "react";
import ReactDOM from "react-dom";

// Example 1 UNCOMMENT LINES 7 and 8
// Create a single line of text and check to see if it exists
import CurrentApp from "./example1/example_index_1";

// // Example 2 UNCOMMENT LINES 10 and 11
// // Create a button that takes in a function, see that it is called
// import CurrentApp from "./example2/example_index_2";

// // Example 3 WIP
// import CurrentApp from "./quickchat";

const rootElement = document.getElementById("root");

// Example 1
ReactDOM.render(<CurrentApp />, rootElement);
