### Cash Register App

## Project Overview
The Cash Register App is designed to simulate a traditional cash register, calculating the change due to a customer based on the price of an item, the amount of cash provided by the customer, and the current amount of cash in the cash drawer. The app handles various scenarios to provide appropriate feedback to the user, such as insufficient funds or exact payment.

## Features
- Calculate and display change due to the customer.
- Handle different scenarios:
  - Insufficient funds in the drawer.
  - Exact payment by the customer.
  - Successful transaction with change.
- Display change in highest to lowest order of currency denominations.
- User-friendly alerts and messages for different transaction outcomes.

## User Stories
- **Input Elements:**
  - An input element with an id of "cash".
  - A div, span, or p element with an id of "change-due".
  - A button element with an id of "purchase-btn".

- **Functional Requirements:**
  - When the value in the #cash element is less than the price, an alert should display: "Customer does not have enough money to purchase the item".
  - When the value in the #cash element is equal to the price, the #change-due element should display: "No change due - customer paid with exact cash".
  - When conditions for a successful transaction are met, the #change-due element should display the change due in the highest to lowest order of currency denominations.

- **Example Scenarios:**
  - When the price is 19.5, the value in the #cash element is 20, and the cash drawer is adequately stocked, the #change-due element should display: "Status: OPEN QUARTER: $0.5".
  - When the price is 3.26, the value in the #cash element is 100, and the cash drawer is fully stocked, the #change-due element should display: "Status: OPEN TWENTY: $60 TEN: $20 FIVE: $15 ONE: $1 QUARTER: $0.5 DIME: $0.2 PENNY: $0.04".
  - When the price is 19.5, the value in the #cash element is 20, and the cash drawer lacks sufficient funds, the #change-due element should display: "Status: INSUFFICIENT_FUNDS".
  - When the price is 19.5, the value in the #cash element is 20, and the cash drawer contains exactly the required change, the #change-due element should display: "Status: CLOSED PENNY: $0.5".

## Currency Denominations
- Penny: $0.01 (PENNY)
- Nickel: $0.05 (NICKEL)
- Dime: $0.10 (DIME)
- Quarter: $0.25 (QUARTER)
- Dollar: $1.00 (ONE)
- Five Dollars: $5.00 (FIVE)
- Ten Dollars: $10.00 (TEN)
- Twenty Dollars: $20.00 (TWENTY)
- One Hundred Dollars: $100.00 (ONE HUNDRED)

## Objective
Build an app that is functionally similar to [cash-register.freecodecamp.rocks](https://cash-register.freecodecamp.rocks). Fulfill the user stories and pass all the tests to complete this project. Add your personal style to make it unique and user-friendly. Happy coding!

## Tests
1. HTML file should link to the JavaScript file.
2. Global variable named `price`.
3. Global variable named `cid`.
4. Input element with an id of "cash".
5. Div, span, or p element with an id of "change-due".
6. Button element with an id of "purchase-btn".
7. Alerts and messages for different transaction outcomes.
8. Ensure the app calculates and displays change correctly in various scenarios.

## Usage
1. Enter the price of the item.
2. Enter the amount of cash provided by the customer.
3. Click the "Purchase" button.
4. Observe the message and change due in the designated area.

## Conclusion
This Cash Register App is a simple yet effective tool for managing transactions, calculating change, and providing appropriate feedback to users. By fulfilling the user stories and passing the tests, you will create a functional and user-friendly application. Enjoy coding and enhancing your development skills with this project!
