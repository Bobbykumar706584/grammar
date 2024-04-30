/** @format */

const Footer = () => {
	return (
		<div className="w-full md:h-[200px] bg-[#04aa6d] text-white">
			<div className="md:grid md:grid-cols-3">
				<div className="col-span-1 p-2 border-r-2">
					<div className="grid grid-rows-2">
						<div className="md:text-2xl p-2 m-2">
							<a className="mt-15px" href="/">
								GrammarGuide
							</a>
						</div>
						<div className="grid grid-cols-1">
							<input
								type="text"
								placeholder="Email..."
								id="subscribe"
								// value={searchWord}
								// onChange={(e) => {
								// 	setSearchWord(e.target.value);
								// }}
								class="bg-gray-50 border span w-full border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
							<button className="mt-2 bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
								Subscribe
							</button>
						</div>
					</div>
				</div>
				<div className="col-span-2">
					<div className="flex justify-around mt-20">
						<div>Privacy Policy</div>
						<div>Contact</div>
						<div>About Us</div>
					</div>
					<div className="text-center mt-10">
						Copyright © 2024 | Powered by <a href="/">GrammarGuide.com</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
