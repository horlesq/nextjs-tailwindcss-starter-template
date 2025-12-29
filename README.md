# Next.js + Tailwind CSS Starter Template

---

## Table of Contents

-   [Features](#features)
-   [Usage](#usage)
-   [Technologies](#technologies)
-   [Installation](#installation)
-   [Customization](#customization)
-   [Folder Structure](#folder-structure)
-   [License](#license)
-   [Contact](#contact)

---

## Features

-   **Next.js 16 (App Router):** Leveraging the latest Next.js features for optimal performance and developer experience.
-   **Tailwind CSS 4:** Modern utility-first styling with the newest Tailwind CSS version.
-   **Motion (Framer Motion):** Smooth, high-performance animations for a premium feel.
-   **React 19:** Utilizing the latest React features and improvements.
-   **EmailJS Integration:** Built-in contact form functionality without the need for a backend server.
-   **TypeScript:** Type-safe development for better maintainability and fewer bugs.
-   **Responsive Design:** Fully responsive components that work on all devices.
-   **SEO Optimized:** Pre-configured metadata and semantic HTML.

## Usage

This template is designed to be a quick start for modern web applications.

1. **Contact Form:** Configure your EmailJS service ID, template ID, and public key in `.env.local`.
2. **Sections:** New sections can be added in `src/components/sections`.
3. **Icons:** Use `react-icons` for a wide variety of icon sets.

## Technologies

-   [Next.js](https://nextjs.org/)
-   [React](https://reactjs.org/)
-   [Tailwind CSS](https://tailwindcss.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Motion](https://motion.dev/)
-   [EmailJS](https://www.emailjs.com/)
-   [React Icons](https://react-icons.github.io/react-icons/)
-   [Vercel Analytics](https://vercel.com/analytics)

## Installation

To get started with this template, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/horlesq/nextjs-tailwindcss-starter-template your-project-name
    cd your-project-name
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Environment Variables:**

    Create a `.env.local` file and add your EmailJS and Vercel Analytics keys:

    ```env
    NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

5. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.**

## Customization

-   **Theming:** Customize colors and typography in `src/app/globals.css`.
-   **Content:** Update the main content in `src/lib/content.ts` (if applicable) or directly in the components.
-   **Tailwind:** Modify `tailwind.config.js` for custom Tailwind settings.

## Folder Structure

```text
src/
├── app/            # Next.js App Router (routes, layouts, globals)
├── components/     # Reusable UI components and sections
│   ├── motion/     # Motion-wrapped components
│   └── sections/   # Major page sections
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and data
└── public/         # Static assets
```

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, feel free to reach out via:

-   GitHub: [Horlesq](https://github.com/horlesq)
-   Linkedin: [Adrian Horlescu](https://www.linkedin.com/in/adrian-horlescu/)
-   Website: [horly.dev](https://horly.dev)

---

For questions or suggestions, feel free to open an issue or submit a pull request.
