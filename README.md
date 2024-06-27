# Personal Finance Tracker

## Overview

The Personal Finance Tracker is a web application built with React, Redux, TypeScript, and Chakra UI. It helps users manage their personal finances by allowing them to add, filter, and view transactions.

## Features

- Add income and expense transactions
- Filter transactions by category
- View a summary of total income, expenses, and balance
- Responsive design using Chakra UI

## Technologies Used

- React
- Redux
- TypeScript
- Chakra UI
- Jest (for testing)
- Redux Toolkit

## Setup

To set up the application locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd personal-finance-tracker

2. **Install dependencies:**

    ```
    npm install
    ```

3. ***Start the development server:***
    ```
    npm start
    ```
    **The application will be available at http://localhost:3000.**

4. **Run Test:**

    ```
    npm test
    ```
## File Structure

- **src/components**: Contains React components such as `Header`, `CategoryFilter`, `Summary`, `TransactionForm`, `TransactionList`, and `TransactionDetails`.
- **src/redux**: Contains Redux setup including actions (`transactionActions.ts`), reducers (`transactionReducer.ts`), and store configuration (`store.ts`).
- **src/types**: TypeScript types used in the application.

## Usage

1. **Add a Transaction:**

   - Fill in the transaction details (description, amount, type, category, and date) in the `TransactionForm` and click "Add Transaction".

2. **Filter Transactions:**

   - Use the `CategoryFilter` to filter transactions by category.

3. **View Summary:**

   - The `Summary` component displays the total income, expenses, and balance.

4. **View Transaction Details:**

   - Click on a transaction in the `TransactionList` to view its details in a modal.

