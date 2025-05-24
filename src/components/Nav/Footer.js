/** @format */

const Footer = () => {
  return (
    <footer className="w-full bg-orange-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Subscription Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            <a href="/">GrammarGuide</a>
          </h2>
          <p className="mb-2">Subscribe to our newsletter</p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button className="mt-3 w-full hover:text-orange-800 bg-white text-black hover:bg-gray-100 font-semibold py-2 px-4 rounded-md transition duration-300">
            Subscribe
          </button>
        </div>

        {/* Links Section */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </h3>
            <p className="text-sm">
              Learn how we handle your data. Visit our{" "}
              <a href="/policy" className="text-white underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-1">
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:info.grammarguide@gmail.com"
                className="text-white underline"
              >
                info.grammarguide@gmail.com
              </a>{" "}
              <br />
              Phone: (+91) 7065847364
            </p>
          </div>
        </div>

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-1">
            <a href="/" className="hover:underline">
              About Us
            </a>
          </h3>
          <p className="text-sm">
            Learn more about our mission to enhance grammar education at{" "}
            <a href="/" className="text-white underline">
              GrammarGuide
            </a>
            .
          </p>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm mt-8">
        © 2024 GrammarGuide.com — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
