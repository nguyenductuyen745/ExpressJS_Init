**Hi guys 👋**

You can visit this project here: https://express-course-eight.vercel.app/<br>
You can now buy me a coffee!: https://www.buymeacoffee.com/TuyenNguyen

**Project Summary**

This is a Course Learning Platform backend built with Node.js and Express:

🏗️ **Architecture**

Framework: Express.js (Node.js)<br>
Database: MongoDB with Mongoose ODM and MongoDB Atlas<br>
View Engine: Handlebars (hbs)<br>
Styling: SCSS<br>
Logging: Morgan

📚 **Core Features**

1. Course Management
Create, Read, Update, Delete (CRUD) operations for courses<br>
Soft delete functionality (courses can be moved to trash)<br>
Force delete (permanent deletion)<br>
Auto-generated course slug from name<br>
Video ID with auto-generated thumbnail from YouTube<br>
Course levels and descriptions<br>

2. Pagination & Sorting
Custom middleware for pagination support<br>
Sortable queries (ascending/descending by any column)<br>
Query string filtering for sorting and pagination<br>

3. Course Browsing
View all stored courses with pagination<br>
View individual course details by slug<br>
View trashed courses separately<br>
Display course statistics (total count, deleted count)<br>

🛣️ **Route Structure**

/courses - Course CRUD operations<br>
/me/stored/courses - View user's saved courses<br>
/me/trash/courses - View deleted courses<br>
/news - News management routes<br>
/ - Site/home routes

🔧 **Key Technologies**

mongoose-slug-updater (auto-generate URL slugs)<br>
mongoose-delete (soft delete support)<br>
mongoose-sequence (auto-increment IDs)<br>
Body-parser & method-override (HTTP handling)<br>
dotenv (environment variables)

📁 **Project Structure**

Well-organized with separation of concerns:<br>
Controllers for business logic<br>
Models for database schemas<br>
Middleware for cross-cutting concerns<br>
Routes for API endpoints<br>
Views for templating<br>
Utils for helper functions
