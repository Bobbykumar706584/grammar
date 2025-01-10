/** @format */

const Footer = () => {
  return (
    <div className="w-full md:h-[250px] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% text-white">
      <div className="md:grid md:grid-cols-3">
        {/* Subscription Section */}
        <div className="col-span-1 p-2 border-r-2">
          <div className="grid grid-rows-2">
            <div className="md:text-2xl p-2 m-2">
              <a className="mt-15px" href="/">
                GrammerGuide
              </a>
            </div>
            <div className="grid grid-cols-1">
              <input
                type="text"
                placeholder="Email..."
                id="subscribe"
                className="bg-gray-50 border span w-full border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <button className="mt-2 bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="col-span-2">
          <div className="flex justify-around gap-2 m-10 px-2">
            <div>
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
              <p className="text-sm mt-2">
                Learn about how we handle your data responsibly and respect your
                privacy. For more details, visit our{" "}
                <a href="/policy" className="text-black underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
              <p className="text-sm mt-2">
                Have questions? Reach out to us at{" "}
                <a
                  href="mailto:support@grammerguide.com"
                  className="text-black underline"
                >
                  support@grammerguide.com
                </a>{" "}
                or call us at (+91) 7065847364.
              </p>
            </div>
            <div>
              <a href="/about-us" className="hover:underline">
                About Us
              </a>
              <p className="text-sm mt-2">
                Discover more about GrammerGuide and our mission to enhance
                grammar education. Visit our{" "}
                <a href="/about-us" className="text-black underline">
                  About Us
                </a>
                .
              </p>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="text-center mt-10">
            Copyright © 2024 | Powered by{" "}
            <a href="/" className="hover:underline">
              GrammerGuide.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
