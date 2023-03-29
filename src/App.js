import React, { useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import NavBar from "./Components/Navbar";
// import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";


function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  })

  return (
    <div className="App">
      <NavBar />
      <Container maxWidth="xl" sx={{marginTop:4}}>
        <Grid>
          <SliderSelect data={data} setData={setData} />
          <TenureSelect data={data} setData={setData} />
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Result /> */}
        </Grid>
      </Container>
    </div>
  )
};

export default App;

// Additional notes on the MaterialUI components being used:
  // Container: On the Container we wrote something called sx={{marginTop:4}}. This is the way to add inline-style to a component in Material UI.
  // Grid: The Grid component is used to create a responsive layout that adapts to different screen sizes. Grid container represents the parent element and Grid item represents the child element.
    // On the Grid component we wrote something called spacing={5}. This is the way to add spacing between the grid items.
    // On the Grid component we also wrote xs={12} which means that the grid item will take up the entire width of the screen on extra small screens. Similarly, md={6} means that the grid item will take up half of the screen on medium and bigger screens. That's how we made our components responsive.

// Additional notes when using 'useState' hook:
  //  Declaring a state to store the value of the sliders using the useState hook. 
  //  We will be passing the initial value of the state as {} inside the useState hook, because we are storing our data as an object.
  //  Using the useState hook to create a new state variable called data and a function called setData that we can use to update the state.
    // Passing values as default values for the slider component.
    // Then passing the 'data' and 'setData' state as a prop to the SliderSelect component