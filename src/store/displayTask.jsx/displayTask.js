const initialState = [
  { id: "p1", task: "Complete task", active: true },
  { id: "p2", task: "learn react", active: true },
  { id: "p3", task: "Learn redux", active: true },
];

const displaytask = (state = initialState, action) => {
  console.log(action.payload);
  console.log(
    state.indexOf(
      state.filter((items) => items.active === false).map((item) => item)
    )
  );

  switch (action.type) {
    //Add a task
    case "Add":
      const updatedarr = [...state, { ...action.payload }];
      return updatedarr;
    // delete a task  
    case "delete":
      return (state = state.filter((items) => items.id !== action.payload));
  // update a task
    case "update":
      state
        .filter((items) => items.id === action.payload.id)
        .map((item) => (item.task = action.payload.task));
  //status of task active or completed
    case "active":
      state
        .filter((items) => items.id === action.payload)
        .map((item) => (item.active = !item.active));
    case "all":
      return state;
    default:
      return state;
  }
};
export default displaytask;
