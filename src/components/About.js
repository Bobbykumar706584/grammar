import Footer from "./Nav/Footer";
import Header from "./Nav/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="font-serif mt-[100px] p-6 border border-gray-200 m-10 text-[#231f45] bg-gray-200/20 rounded-md shadow-lg shadow-blue-500">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          At GrammarGuide, your privacy is our priority. This Privacy Policy
          outlines the types of information we collect, how we use it, and the
          steps we take to ensure your information remains secure.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          Information We Collect
        </h2>
        <p className="mb-4">
          We may collect information such as your email address when you
          subscribe to our newsletter or contact us. Additionally, we may
          collect usage data to improve our services.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>To provide updates and information about our services</li>
          <li>To improve user experience</li>
          <li>To respond to inquiries or support requests</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Data Security</h2>
        <p className="mb-4">
          We implement industry-standard measures to ensure your data is
          protected. However, no method of transmission over the internet is
          100% secure.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at
          <a
            href="mailto:info.grammarguide@gmail.com"
            className="text-blue-500 underline ml-1"
          >
            info.grammarguide@gmail.com
          </a>
          .
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
