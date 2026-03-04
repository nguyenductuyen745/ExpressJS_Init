**Hi guys 👋**

You can visit this project here: https://express-course-eight.vercel.app/

You can now buy me a coffee!: https://www.buymeacoffee.com/TuyenNguyen

**Project Summary**

This is a Course Learning Platform backend built with Node.js and Express:

🏗️ **Architecture**

Framework: Express.js (Node.js)
Database: MongoDB with Mongoose ODM and MongoDB Atlas
View Engine: Handlebars (hbs)
Styling: SCSS
Logging: Morgan

📚 **Core Features**

1. Course Management
Create, Read, Update, Delete (CRUD) operations for courses
Soft delete functionality (courses can be moved to trash)
Force delete (permanent deletion)
Auto-generated course slug from name
Video ID with auto-generated thumbnail from YouTube
Course levels and descriptions

2. Pagination & Sorting
Custom middleware for pagination support
Sortable queries (ascending/descending by any column)
Query string filtering for sorting and pagination

3. Course Browsing
View all stored courses with pagination
View individual course details by slug
View trashed courses separately
Display course statistics (total count, deleted count)

🛣️ **Route Structure**

/courses - Course CRUD operations
/me/stored/courses - View user's saved courses
/me/trash/courses - View deleted courses
/news - News management routes
/ - Site/home routes

🔧 **Key Technologies**

mongoose-slug-updater (auto-generate URL slugs)
mongoose-delete (soft delete support)
mongoose-sequence (auto-increment IDs)
Body-parser & method-override (HTTP handling)
dotenv (environment variables)

📁 **Project Structure**

Well-organized with separation of concerns:
Controllers for business logic
Models for database schemas
Middleware for cross-cutting concerns
Routes for API endpoints
Views for templating
Utils for helper functions
