# React-Vite-Tailwind Project with TanStack Router

Welcome to this React-Vite project styled with Tailwind CSS and enhanced with TypeScript. This setup also includes **TanStack Router** for file-based routing, making it easy to add new pages with minimal configuration.

## 🚀 Getting Started

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Junotas/React-Vite-TS-Tailwind-StartPage.git
   ```
2. **Remove Existing Git History (Optional)**
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

After completing these steps, you should see the project running on `http://localhost:5173`, displaying the initial home page with Tailwind styling.

## 📁 Project Structure

This project is organized with TanStack Router’s file-based routing. Here’s a quick overview of the core files:

- **`index.tsx`**
- **`about.tsx`** 

To add new pages, simply create a new file in the `src/routes` folder, and TanStack Router will automatically pick it up as a new route.

## 📜 Routing with TanStack Router

The project utilizes **TanStack Router** for easy, type-safe, and file-based routing:
- Each page corresponds to a file within the `src/routes` folder, making it easy to manage and extend routes.
- Navigation between pages is defined in the root layout file, `__root.tsx`, which includes links for Home and About.

### 🖥 Pages Included
- **Home Page (`index.tsx`)**: The default page with clickable logos, styled buttons, and a playful counter.
- **About Page (`about.tsx`)**: A fun, animated page with additional info and an interactive button.

To explore or extend the routing, check out the `src/routes` folder and `__root.tsx` file.

## 📦 Additional Commands

- **Build for Production**: `npm run build`
- **Preview Production Build**: `npm run preview`
