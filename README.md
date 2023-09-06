# AK Dev

## Features
- CRUD courses
- Search course by ID
- Sort courses

## Usage
### Sort
#### Sort Courses
1. In controller
     - require `handleEjs.js`
       ```js
       const { sortable } = require('~/helpers/handleEjs')
       ``` 
     - Push `sortable` into view by `res.render()` method
  
2. In view .ejs
    Render the corresponding sort icon
    ```js
    <%- sortable('<field_name>', sort, courses.length) %>
    ```
