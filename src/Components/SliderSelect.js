import React from "react";
import SliderComponent from "./Common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
    const bank_limit = 10000;
    return (
      <div>

        {/* slider for home value */}
        <SliderComponent
            onChange={(e, value) => {
            setData({
                ...data,
                homeValue: value.toFixed(0),
                downPayment: (0.2 * value).toFixed(0),
                loanAmount: (0.8 * value).toFixed(0),
            });
            }}
            defaultValue={data.homeValue}
            min={1000}
            max={bank_limit}
            steps={100}
            unit="$"
            amount={data.homeValue}
            label="Home Value"
            value={data.homeValue}
        />

        {/* slider for down payment */}
        <SliderComponent
            onChange={(e, value) =>
            setData({
                ...data,
                downPayment: value.toFixed(0),
                loanAmount: (data.homeValue - value).toFixed(0),
            })
            }
            defaultValue={data.downPayment}
            min={0}
            max={data.homeValue}
            steps={100}
            unit="$"
            amount={data.downPayment}
            label="Down Payment"
            value={data.downPayment}
        />

        {/* slider for loan amount */}
        <SliderComponent
            onChange={(e, value) =>
            setData({
                ...data,
                loanAmount: value.toFixed(0),
                downPayment: (data.homeValue - value).toFixed(0),
            })
            }
            defaultValue={data.loanAmount}
            min={0}
            max={data.homeValue}
            steps={100}
            unit="$"
            amount={data.loanAmount}
            label="Loan Amount"
            value={data.loanAmount}
        />

        {/* slider for interest rate */}
        <SliderComponent
            onChange={(e, value) =>
            setData({
                ...data,
                interestRate: value,
            })
            }
            defaultValue={data.interestRate}
            min={2}
            max={18}
            steps={0.5}
            unit="%"
            amount={data.interestRate}
            label="Interest Rate"
            value={data.interestRate}
        />

      </div>
    );
  };
  
  export default SliderSelect;

// Notes:
  // Destructuring the props that being received from App.js. 
  // And also, creating a variable called bank_limit and assign it a value of 10000. 
  // This represents the maximum amount of money a person can borrow from our bank.

  // Also passing props to the SliderComponent components: house value, down payment, loan amount, & interest rate.