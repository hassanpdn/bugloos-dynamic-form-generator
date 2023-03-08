### Dynamic Form Generator

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Requirements
   - Node.js `^16.3.0`
   - NPM or Yarn

## Installation
   - Clone this repository to your local machine.
   - Run ```npm install``` or ```yarn install``` to install dependencies.
   - Run ```npm run dev``` or ```yarn dev``` to start the development server.
   - Open your web browser and navigate to http://localhost:3000.

## Usage
   1. When you first open the app, you will see a button to set your user role as either admin or staff.
   2. Once you have set your role, the form list table will be displayed, which will be empty initially.
   3. To see the menu, click on the arrow icon in the top left corner.
   4. A sidebar will be displayed with two options - "Forms" and "Create".
   5. Click on the "Create" option to create new form.
   6. Fill in the required fields such as the form title and form access level.
   7. To add a field, click on the "Add Field" button and a modal with a field generator form will be displayed.
   8. Choose the type of field you want to add, such as text, number, textarea, or radio inputs, etc.
   9. Add any required validation for text inputs which are set based on project needs.
   10. Repeat steps 7-9 to add more fields to your form.
   11. Once you are done, click on the "Submit" button to save your form.
   12. To view your saved forms, click on the "Forms" option in the sidebar.
   13. The form actions are dynamic and buttons in the table are rendered by the actions defined for the form except 'View' action which is the default one.
   14. To edit a form, click on the "Edit" button next in actions.
   15. To delete a form, click on the "Delete" button next in actions.
   16. To add a new field to a form, click on the "New" button next in actions.

## Features
   - Create dynamic forms with custom fields
   - Set access levels for each form and field
   - Add various input types such as text, number, dropdown, etc.
   - Edit or delete existing forms and fields
   - Set user role to either admin or staff
   - Add fields to forms using a field generator form

## Contributing
   - Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests.
