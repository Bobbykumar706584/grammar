/** @format */

import { React, useState } from "react";
import Axios from "axios";
import Header from "./Nav/Header";
import Banner from "./Nav/Banner";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const Home = () => {
	const [data, setData] = useState("");
	const [searchWord, setSearchWord] = useState("");

	// Function to fetch information on button
	// click, and set the data accordingly
	function getMeaning() {
		Axios.get(
			`https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
			// `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
		).then((response) => {
			setData(response.data[0]);
		});
	}

	// Function to play and listen the
	// phonetics of the searched word
	function playAudio() {
		let audio = new Audio(data.phonetics[0].audio);
		audio.play();
	}
	return (
		<>
			<Header />
			<div className="font-serif mt-[100px] p-10 text-[#231f45]">
				<div class="grid md:grid-cols-3 text-center gap-5 border border-gray-600 p-2">
					<div className="col-start-1 col-span-1">
						<h1 for="search_word" class="text-center text-3xl p-2">
							Dictionary
						</h1>
						<input
							type="text"
							placeholder="Search..."
							id="search_word"
							value={searchWord}
							onChange={(e) => {
								setSearchWord(e.target.value);
							}}
							class="bg-gray-50 border span w-full border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						/>
						<button
							className="bg-blue-500 p-2.5 mt-5 md:w-full w-[200px] rounded-md"
							onClick={() => {
								getMeaning();
							}}>
							Search
						</button>
					</div>
					<div className="col-span-2 text-center border border-gray-600">
						{/* {data && ( */}
						<h1 className="text-2xl font-bold">Result:</h1>

						{/* )} */}
						{data && (
							<div className="showResults col-span-2">
								<h2 className="text-2xl">
									{data.word}
									<button
										onClick={() => {
											playAudio();
										}}>
										<HiOutlineSpeakerWave className="mx-3 mt-6" size="30px" />
									</button>
								</h2>
								<h4>Parts of speech:</h4>
								<p>{data.meanings[0].partOfSpeech}</p>
								<h4>Definition:</h4>
								<p>{data.meanings[0].definitions[0].definition}</p>
								<h4>Example:</h4>
								<p>{data.meanings[0].definitions[0].example}</p>
							</div>
						)}
					</div>
				</div>
				<h1 className="md:text-5xl text-3xl text-center font-bold mt-[50px]">
					Welcome to GrammerGuide
				</h1>
				<h4 className="md:text-4xl mt-5 text-center text-2xl">
					Want to learn English Speaking Easily
				</h4>
				<p className="p-2 md:text-xl font-sans text-justify">
					Welcome to our comprehensive grammar guide! Whether you're a student,
					a professional, or simply someone looking to improve their language
					skills, understanding grammar is essential for effective
					communication. This guide is designed to provide you with a clear and
					concise overview of grammar principles, rules, and concepts.
				</p>
				<p className="p-2 md:text-xl font-sans text-justify">
					हमारी व्यापक व्याकरण मार्गदर्शिका में आपका स्वागत है! चाहे आप एक छात्र
					हों, एक पेशेवर हों, या बस ऐसे व्यक्ति हों जो अपने भाषा कौशल में सुधार
					करना चाहते हों, प्रभावी संचार के लिए व्याकरण को समझना आवश्यक है। यह
					मार्गदर्शिका आपको व्याकरण सिद्धांतों, नियमों और अवधारणाओं का स्पष्ट और
					संक्षिप्त अवलोकन प्रदान करने के लिए डिज़ाइन की गई है।
				</p>

				<div className="grid md:grid-cols-4 text-cente p-2 gap-5 mx-5">
					<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
						<a href="/verb">Verb (क्रिया)</a>
					</button>
					<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
						<a href="/tense">Tenses (काल)</a>
					</button>
					<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
						<a href="/modal">Modals (मोडाल्स)</a>
					</button>
					<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
						<a href="/speech">Parts of Speech (शब्दभेद)</a>
					</button>
				</div>
			</div>

			{/* <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
   <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<aside id="sidebar-multi-level-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
      <ul class="space-y-2 font-medium">
         <li>
            <button type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sidebar" data-collapse-toggle="dropdown-sidebar">
                  <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                     <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
                  </svg>
                  <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Tense</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                  </svg>
            </button>
            <ul id="dropdown-sidebar" class="hidden py-2 space-y-2">
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Present Tense</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Past Tense</a>
                  </li>
                  <li>
                     <a href="#" class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Future Tense</a>
                  </li>
            </ul>
         </li>
      </ul>
   </div>
</aside> */}
		</>
	);
};
export default Home;
