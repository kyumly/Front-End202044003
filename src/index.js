import ReactDOM from 'react-dom';
import React from "react";
import ScoreTable from "./App";

ReactDOM.render(<ScoreTable year={1}/>, document.getElementById("One"))
ReactDOM.render(<ScoreTable year={2}/>, document.getElementById("Two"))
ReactDOM.render(<ScoreTable year={3}/>, document.getElementById("Three"))
