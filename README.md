# React-Vite-Tailwind Project with TanStack Router

Welcome to this React-Vite-Typescript-Tailwind-TanStack Router and Query landing page (yes a mouthfull)

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Junotas/React-Vite-TS-Tailwind-StartPage.git
   ```
2. **Remove Existing Git History**
   If you want to start with a clean Git history (recommended if you plan to push to your own repository), run:
   ```bash
   cd React-Vite-TS-Tailwind-StartPage
   rm -rf .git
   git init
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```

After completing these steps, you should see the project running on `http://localhost:5173`, displaying the initial home page.

## 📜 Routing with TanStack Router

The project utilizes **TanStack Router** for easy, type-safe, and file-based routing:
- Each page corresponds to a file within the `src/routes` folder, making it easy to manage and extend routes.
- Navigation between pages is defined in the root layout file, `__root.tsx`, which includes links for Home and About.
- To add new pages, simply create a new file in the `src/routes` folder, and TanStack Router will automatically pick it up as a new route.

### 🖥 Pages Included
- **Home Page (`index.tsx`)**: The default page with clickable logos, a toggleable list, and data fetched using TanStack Query.
- **About Page (`about.tsx`)**: A fun, animated page with additional info and an interactive button.

## 🔮 Future Enhancements

This project is designed to be easily extensible, so here are some ideas for future enhancements to add extra functionality and make it even more versatile:

- **🔑 Authentication**: Consider adding Firebase Auth, Auth0, or another authentication provider for user login support.
- **🧩 Component Libraries**: Add a library like Material-UI for ready-made components that are customizable and accessible.
- **🔧 Linting & Formatting**: Configure ESLint and Prettier for code consistency and readability.
