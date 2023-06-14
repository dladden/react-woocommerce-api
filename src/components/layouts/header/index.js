import Head from "next/head";
import Image from "next/image";
import logo from "public/usmle-logo.png";
const Header = ({ header }) => {
  // console.warn("header", header);
  //pulling header items as "header" from headerMenuItems or empty object
  const { favicon, headerMenuItems, siteDescription, siteLogoUrl, siteTitle } =
    header || {};

  return (
    <>
      <Head>
        <title>{siteTitle || ""}</title>
        <link rel="icon" href={favicon || "/favicon.ico"} />
      </Head>
      <div className="header">
        <nav className="bg-white p-4">
          <div className="flex items-center justify-between flex-wrap container mx-auto">
            <div className="flex items-center flex-shrink-0 text-black mr-20">
              {siteLogoUrl ? (
                <img
                  className="w-40"
                  src={siteLogoUrl}
                  alt={`${siteTitle}-logo`}
                />
              ) : (
                <Image src={logo} alt="usmil-rx-logo"></Image>
              )}
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"></path>

              <span className="font-semibold text-xl tracking-tight">
                <a className="" href="/"></a>
              </span>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-black hover:border-black">
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <div className="h-0 w-full overflow-hidden lg:h-full flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm font-medium lg:flex-grow">
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/categories/"
                >
                  Products
                </a>
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/"
                >
                  Pricing
                </a>
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/"
                >
                  Authors
                </a>
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/"
                >
                  Podcast
                </a>
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/"
                >
                  Scholarship
                </a>
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/"
                >
                  Tutoring
                </a>
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/"
                >
                  Support
                </a>
              </div>
              <div className="text-sm font-medium">
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden lg:block m-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="18"
                    height="auto"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
                  Profile
                </a>
                <a
                  href="#responsive-header"
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden lg:block m-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="18"
                    height="auto"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    ></path>
                  </svg>
                  Wishlist
                </a>
                <a
                  className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-black mr-10"
                  href="/cart/"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="hidden lg:block m-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    width="18"
                    height="auto"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                  Bag
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
