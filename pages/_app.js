import "../src/styles/index.scss"; //importing my own scss
// _app.js file is a special file used to override the default behavior of the Next.js App component.
//It serves as the entry point for your Next.js application and allows you to customize the global
//layout and behavior that applies to all pages in your application. In short it is global thought out the App.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
