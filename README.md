This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# React and WooCommerce Integration with REST API

This project demonstrates the integration of React with the popular WordPress plugin WooCommerce. It showcases the benefits of combining the flexibility and interactivity of React with the powerful e-commerce capabilities provided by WooCommerce.

## Why React with WooCommerce?

### Enhanced User Experience

By using React for the frontend of your WooCommerce-powered website, you can create highly interactive and dynamic user interfaces. React's virtual DOM and component-based architecture allow for efficient updates and seamless rendering of UI elements. This leads to a smoother and more engaging user experience, enhancing the overall satisfaction of your customers.

### Real-time Updates

React's ability to handle real-time updates and data synchronization makes it an excellent choice for e-commerce applications. With WooCommerce's support for webhooks and real-time notifications, you can leverage React to display real-time changes such as inventory updates, order status changes, and pricing modifications. This ensures that customers have up-to-date information and a seamless shopping experience.

### Customizability and Scalability

React's modular and component-driven approach makes it easier to build and maintain complex e-commerce websites. You can create reusable components that encapsulate specific functionality, making it simpler to manage and scale your application. Additionally, React's vibrant ecosystem of libraries and tools allows for rapid development and customizations tailored to your specific business needs.

## Examples

This project provides examples of integrating React with WooCommerce in the following scenarios:

1. Product Listing: Display a grid of products retrieved from the WooCommerce backend API. Each product is represented as a React component, showcasing its image, title, price, and rating. Users can filter and sort the product list based on different criteria.

2. Shopping Cart: Implement a shopping cart functionality using React components. Users can add products to their cart, view the cart contents, update quantities, and proceed to checkout. The shopping cart seamlessly synchronizes with WooCommerce's cart functionality for a cohesive experience.

3. Product Details: Create a product detail page that fetches detailed information about a specific product from WooCommerce's API. The page leverages React's state management to handle different views such as product variations, descriptions, and related products.

# PROJECT TECHNOLOGIES:

## Styling:

### Tailwind

Tailwind CSS is a utility-first CSS framework that seamlessly integrates with React, providing developers with a highly efficient and flexible styling solution. With Tailwind's extensive collection of utility classes, developers can leverage pre-defined styles directly within their React components, eliminating the need for manual CSS authoring. This approach significantly reduces development time and effort, allowing developers to focus on building functionality rather than wrestling with complex styling. Tailwind's responsive design utilities enable developers to create responsive layouts effortlessly by applying responsive classes based on screen breakpoints.

### Sass

Syntactically Awesome Style Sheets is a CSS preprocessor that extends the capabilities of CSS. It introduces features that are not available in traditional CSS, making it easier and more efficient to write and maintain stylesheets.

### PostCSS

PostCSS is a popular tool used in modern web development to transform and enhance CSS stylesheets. It operates as a "post-processor" for CSS, meaning it takes CSS as input, performs various transformations and optimizations, and generates modified CSS as output. In the context of PostCSS, a PostCSS config refers to a configuration file that specifies how PostCSS should process and transform CSS stylesheets. The config file defines the plugins, options, and other settings that will be used by PostCSS during the processing of CSS.

## Wordpress

### Plugins:

### Headless CMS

# Installing Wordpress Locally

This project utilizes MAMP to set local Apache website SQL and PHP for local development. You can set up a local development environment using tools like XAMPP, WAMP, or MAMP. These tools create a local server environment that allows you to run WordPress on your own computer.
Here are the general steps to start WordPress locally:

1. Install a local development environment: Download and install a local server environment tool like XAMPP (for Windows, macOS, or Linux), WAMP (for Windows), or MAMP (for macOS). These tools provide a package that includes Apache, MySQL, and PHP, which are required to run WordPress.
2. Download and install WordPress: Download the latest version of WordPress from the official website (wordpress.org). Extract the downloaded file and move it to the web server directory of your local development environment (e.g., the "htdocs" folder in XAMPP).
3.

## Network Locations:

Once MAMP installed these are the locations where it is accessed:<br>
http://localhost/MAMP/?language=English

http://localhost/phpmyadmin5/

Login:
http://localhost/wordpress/wp-admin/

Backend:
http://localhost/wordpress/
