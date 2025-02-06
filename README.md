## Getting Started

Overview:

The Users & Posts Dashboard is a web application built using Next.js that fetches and displays user profiles along with their related posts using the JSONPlaceholder API. This project includes search, sorting, and a detailed view for enhanced usability.
App is server side rendered and user list component is client side that as it needs state.

Installation:

Ensure you have Node.js and npm or yarn installed.
Steps:

1.Clone the repository:
git clone https://github.com/khaire-ankita/article-app

2.Navigate to the project folder:
article-app

3.Install dependency:
```bash
npm install
# or
yarn install
```

4.To run the development server:

```bash
npm run dev
# or
yarn dev
```

Features:

1. Search Functionality

Users can filter the user profiles by name or email.

Real-time filtering updates the displayed list as the user types.

2. Sorting

Users can sort profiles based on:

Name 

Company Name 

Sorting options can be toggled easily.

3. Detail View

Clicking on a user profile navigates to a dynamic route (/users/[id]).

The detail view displays:

User’s complete information (name, email, address, company, etc.).

A list of all posts made by the user.

Technologies Used:

Next.js – Server-side rendering & routing.

React.js – UI development.

Tailwind CSS – Styling.

JSONPlaceholder API – Mock data for users and posts.