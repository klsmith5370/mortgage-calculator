import React from "react";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const SliderComponent = ({
    defaultValue,
    min,
    max,
    label,
    unit,
    onChange,
    amount,
    value,
    steps
  }) => {
    return (
      <Stack my={1.4}>
        <Stack gap={1}>
            <Typography variant="subtitle2">{label}</Typography>
            <Typography variant="h5">
                {unit} {amount}
            </Typography>
        </Stack>
        <Slider
            min={min}
            max={max}
            defaultValue={defaultValue}
            aria-label="Default"
            valueLabelDisplay="auto"
            onChange={onChange}
            value={value}
            marks
            step={steps}
        />
        <Stack direction="row" justifyContent="space-between">
            <Typography variant="caption" color="text.secondary">
                {unit} {min}
            </Typography>
            <Typography variant="caption" color="text.secondary">
                {unit} {max}
            </Typography>
        </Stack>
      </Stack>
    )
  }
  
  export default SliderComponent;

// Additional notes:
  // Using the Stack component from MUI to stack the components vertically. 
    // my is the shorthand for marginY [margin-top & margin-bottom]. 
    // Using the Typography component from MUI to display the label, unit, and other data. 
    // Using the Slider component from MUI to display the slider.

  // The props are destructured and are passed to the Slider MaterialUI component

  // Displaying min and max values on the slider
    // using the Stack component from MUI to stack the components horizontally. 
    // direction="row" is the shorthand for flex-direction: row. 
    // justifyContent="space-between" is the shorthand for justify-content: space-between.