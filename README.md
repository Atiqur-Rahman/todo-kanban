# Todo List Application

A simple Todo List Application built using React.js featuring a Kanban-style interface with three distinct columns: New, Ongoing, and Done. This application allows users to manage tasks through different stages of completion.

## Features

- **Three Columns for Todo Management:**

  - **New:** The first column where new todo items are created.
  - **Ongoing:** The second column where tasks that are currently being worked on are moved.
  - **Done:** The third column where completed tasks are placed.

- **Todo Item Creation:**

  - Users can create new todo items in the New column.
  - Each todo item has a title, description, and status label with distinct colors:
    - Blue for New
    - Orange for Ongoing
    - Green for Done

- **Moving Items:**

  - Implemented a right-click context menu for each todo item to move the item to other columns, excluding the current column.
  - Context menu options:
    - If the todo item is in the New column, options for Ongoing and Done.
    - If the todo item is in the Ongoing column, options for New and Done.
    - If the todo item is in the Done column, options for New and Ongoing.

- **Task Management:**

  - New Column: Users can add new tasks at the top of the column.
  - Ongoing Column: Users can move tasks from the New column and set a due date to track if the task is overdue.
  - Done Column: Users can move tasks from the Ongoing column and display tasks in the order they were completed.

- **Responsive Design:** The application is responsive and looks good on different screen sizes.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Atiqur-Rahman/todo-kanban.git
   ```

2. Navigate to the project directory:

   ```bash
   cd todo-kanban
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:
   ```bash
   npm start
   ```

## Project Structure

```plaintext
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Column.js
│   │   ├── Column.css
│   │   ├── ContextMenu.js
│   │   ├── ContextMenu.css
│   │   ├── TodoItem.js
│   │   ├── TodoItem.css
│   │   └── ...
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```
