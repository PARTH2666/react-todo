import {
  Button,
  ButtonGroup,
  InputBase,
  Paper,
  TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

import "./App.css";
import TodoForm from "./components/TodoForm";
import Todotasks from "./components/Todotasks";

function App() {
  const displayData = useSelector((state) => state.displaytask);
  const [completedTab, setCompletedTab] = useState(false);
  const [activeTab, setActiveTab] = useState(false);
  const [allTab, setAllTab] = useState(true);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const [searchedItems, setSearchedItems] = useState([]);

  let completedTask = [...displayData].filter((items) => items.active == false);
  let activeTask = [...displayData].filter((items) => items.active !== false);

  //called when clicking on  completed task filter
  const handleCompleted = () => {
    setActiveTab(false);
    setCompletedTab(true);
    setAllTab(false);
    setSearchDisplay(false);
  };

  // called when clicking on  active task filter
  const handleActive = () => {
    setActiveTab(true);
    setCompletedTab(false);
    setAllTab(false);
    setSearchDisplay(false);
  };

  // called when clicking on  all task filter
  const handleAll = () => {
    if (allTab == true) {
      setAllTab(true);
    } else {
      setAllTab(true);
    }
    setCompletedTab(false);
    setActiveTab(false);
    setSearchDisplay(false);
  };

  //for search feild
  const handleSearchFeildChange = (evt) => {
    if (evt.target.value === "") {
      setAllTab(true);
      setSearchDisplay(false);
    }
    setAllTab(false);
    setCompletedTab(false);
    setActiveTab(false);
    let data = [...displayData].filter((item) =>
      item.task.includes(evt.target.value)
    );
    setSearchedItems([...data]);
    setSearchDisplay(true);
  };

  return (
    <>
      <div className="todo_title">
        <h2>Todo list</h2>
      </div>

      <div className="todo_container">
        <TodoForm />

        <div className="filter_search">
          <ButtonGroup
            variant="text"
            aria-label="Basic button group"
            sx={{
              margin: "3px",
              fontSize: "10px",
              position: "relative",
              left: "-35px",
            }}
          >
            <Button onClick={handleAll}>ALL</Button>
            <Button onClick={handleCompleted}>Completed</Button>
            <Button onClick={handleActive}>Active</Button>
          </ButtonGroup>
          <TextField
            sx={{ position: "relative", right: "-10px", bottom: "10px" }}
            id="standard-search"
            onChange={handleSearchFeildChange}
            label="Search field"
            type="search"
            variant="standard"
          />
        </div>

        {/* for search feild ...............*/}
        {searchDisplay &&
          searchedItems.map((items) => (
            <Todotasks
              key={items.id}
              task={items.task}
              id={items.id}
              active={items.active}
            />
          ))}

        {/* for completed task filter .........*/}
        {completedTab &&
          completedTask.map((items) => (
            // <Todotasks key={items.id} task={items.task} id={items.id} />
            <Paper
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                margin: "4px",
                backgroundColor: "rgb(240, 179, 179)",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                value={items.task}
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
          ))}

        {/* {for All tab handle}............ */}
        {allTab &&
          displayData.map((items) => (
            <Todotasks
              key={items.id}
              task={items.task}
              id={items.id}
              active={items.active}
            />
          ))}

        {/* {for active task filter.......} */}
        {activeTab &&
          activeTask.map((items) => (
            <Paper
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
                margin: "4px",
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                value={items.task}
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Paper>
          ))}
      </div>
    </>
  );
}

export default App;
