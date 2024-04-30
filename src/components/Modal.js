/** @format */

import React from "react";
import Header from "./Nav/Header";
import Data from "../JsonData/Common.json";

const Modal = () => {
	return (
		<>
			<Header />
			<div className="font-serif mt-[100px] p-10">
				<h1 className="md:text-5xl text-3xl text-center font-bold">
					Modals (मोडाल्स)
				</h1>
				<p className="p-2 md:text-xl text-justify">
					“Modals are such auxiliary verbs which are used with the main verb in
					the sentence to express capability, possibility, certainty, permission
					and necessity of the action to be done.”
				</p>
				<p className="p-2 md:text-xl text-justify">
					“Modals ऐसी सहायक क्रियाएँ होती हैं जिनका प्रयोग वाक्य में मुख्य
					क्रिया के साथ किया जाता है ताकि किये जाने वाले कार्य की समर्थता,
					सम्भावना, निश्चितता, इजाज़त और आवश्यकता व्यक्त की जा सके।”
				</p>
				<p className="p-2 md:text-xl mt-5 text-justify">
					Modal Helping verbs are used with main verbs of the sentence to
					express ability, possibility, certainty, permission and necessity.”
					Following table lets you know about modals helping verbs, their
					negatives and also the form of main verbs to be used with that
					particular modal. <br /> (क्षमता, संभावना, निश्चितता, अनुमति और
					आवश्यकता को व्यक्त करने के लिए मोडल हेल्पिंग क्रियाओं का उपयोग वाक्य
					की मुख्य क्रियाओं के साथ किया जाता है। निम्नलिखित तालिका आपको क्रियाओं
					की मदद करने वाले मोडल्स, उनके नकारात्मक, और उस विशेष मोडल के साथ उपयोग
					की जाने वाली मुख्य क्रियाओं के रूप के बारे में बताती है।)
				</p>
				<div className="grid grid-cols-3 border text-center border-black p-2 md:mx-5">
					<div>
						Modals सहायक क्रियाएँ <br />
						Modal Helping Verbs
					</div>
					<div>
						नकारात्मक वाक्य में कहाँ पर not लगाना है – <br />
						Where to use ‘not’ in negatives
					</div>
					<div>
						मुख्य क्रिया की कौन सी form लगानी है – <br />
						Which form of main verb to be used
					</div>
				</div>
				{Data.modal.map((item) => (
					<div className="grid grid-cols-3 border text-center border-black p-2 md:mx-5">
						<div>{item.modalName}</div>
						<div>{item.negativeModalName}</div>
						<div>{item.form}</div>
					</div>
				))}
			</div>
			<div className="m-10 text-center p-10 border border-gray-300 bg-gray-200">
				<h1 className="md:text-3xl text-xl font-bold text-center hover:text-[#04aa6d]">
					1. Can (सकता है)
				</h1>
				<h2 className="md:text-2xl text-md font-bold">
					(Subject + Can + 1st form verb + Object)
				</h2>
				<p className="text-justify">
					The modal verb can is generally used to show ability or probability
					but it has more functions. To learn more, take a look: <br></br>
					मोडल क्रिया Can का उपयोग आम तौर पर क्षमता या संभावना दिखाने के लिए
					किया जाता है लेकिन इसमें अधिक कार्य होते हैं। अधिक जानने के लिए, एक
					नज़र डालें:
				</p>
				<div className="grid md:grid-cols-2 text-center bg-slate-400">
					<div className="border border-black p-2 font-bold">USAGE</div>
					<div className="border border-black p-2 font-bold uppercase">
						Examples
					</div>
				</div>
				<div className="grid md:md:grid-cols-2 text-center">
					<div className="border border-black p-2">Ability (क्षमता)</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">I can run. (मैं दौड़ सकता हुँ)</div>
						<div className="col-span-2">
							My friend can speak many languages (मेरा दोस्त कई भाषाएँ बोल सकता
							है)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Possibility/Probability (संभावना)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							Smoking can harm your brain. (धूम्रपान आपके मस्तिष्क को नुकसान
							पहुंचा सकता है)
						</div>
						<div className="col-span-2">
							It can sunset. (सूर्यास्त हो सकता है)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Asking or Giving permission (अनुमति माँगना या देना)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							Can I go to the park? (क्या मैं पार्क जा सकता हूँ?){" "}
						</div>
						<div className="col-span-2">
							You can use my laptop if you want. (तुम चाहो तो मेरा लैपटॉप
							इस्तेमाल कर सकते हो.)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Requesting someone to do something (किसी से कुछ करने का अनुरोध करना)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							Can you call my mom for food? (क्या आप मेरी माँ को भोजन के लिए
							बुला सकते हैं?)
						</div>
						<div className="col-span-2">
							Can you give me your pen to write a note? (क्या आप मुझे नोट लिखने
							के लिए अपनी कलम दे सकते हैं?)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Giving offers (प्रस्ताव देना)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							Can I do that for you? (क्या मैं आपके लिए ऐसा कर सकता हूँ?)
						</div>
						<div className="col-span-2">
							Can I help you? (क्या मैं आपकी मदद कर सकता हूं)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Making suggestions (सुझाव देना)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							We can go for a walk this morning. (आज सुबह हम लोग घूमने जा सकते
							हैं.)
						</div>
						<div className="col-span-2">
							You can start learning English/French before your trip to Paris.
							(आप पेरिस की यात्रा से पहले अंग्रेजी/फ़्रेंच सीखना शुरू कर सकते
							हैं){" "}
						</div>
					</div>
				</div>

				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Talk about scientific facts (वैज्ञानिक तथ्यों के बारे में बात करें)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							Tigers can run as fast as lions. (बाघ शेर की तरह तेज़ दौड़ सकते
							हैं।)
						</div>
						<div className="col-span-2">
							Mammals can live up to 90 years. (स्तनधारी 90 वर्ष तक जीवित रह
							सकते हैं।)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Show the potential in someone or something (किसी व्यक्ति या वस्तु
						में क्षमता दिखाना )
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							That can be the most difficult part for you to do. (ऐसा करना आपके
							लिए सबसे कठिन हिस्सा हो सकता है।)
						</div>
						<div className="col-span-2">
							That book can win the prize of the best-seller of the year. (वह
							किताब साल की बेस्ट-सेलर का पुरस्कार जीत सकती है।)
						</div>
					</div>
				</div>
			</div>
			{/* Could */}
			<div className="m-10 text-center p-10 border border-gray-300 bg-gray-200">
				<h1 className="md:text-3xl text-xl font-bold text-center hover:text-[#04aa6d]">
					2. Could (सका/सकी/पाया " या " सकता/सकती + था/है/हैं/हूँ/थी)
				</h1>
				<h2 className="md:text-2xl text-md font-bold">
					(Subject + Could + 1st form verb + Object)
				</h2>

				<p className="text-justify">
					'Could' is used to express: possibility, past ability, and to make
					suggestions and requests. 'Could' is also used in conditional
					sentences as the conditional form of 'can'. <br></br>('Can' का उपयोग
					व्यक्त करने के लिए किया जाता है: संभावना, और पिछली क्षमता, और सुझाव और
					अनुरोध करने के लिए। 'Can' का प्रयोग सशर्त वाक्यों में 'can' के सशर्त
					रूप के रूप में भी किया जाता है।)
				</p>
				<div className="grid md:grid-cols-2 text-center bg-slate-400">
					<div className="border border-black p-2 font-bold">USAGE</div>
					<div className="border border-black p-2 font-bold uppercase">
						Examples
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Past Ability or Capability (अतीत की क्षमता)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							When I was young, I could swim across the lake. (जब मैं छोटा था,
							मैं झील को तैरकर पार कर सकता था।)
						</div>
						<div className="col-span-2">
							My friend could speak many languages. (मेरा दोस्त कई भाषाएँ बोल
							सकता था।)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Polite Requests (विनम्र निवेदन)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							Could you please pass me the salt? (क्या आप कृपया मुझे नमक दे सकते
							हैं?)
						</div>
						<div className="col-span-2">
							Could I borrow your car for a moment? (क्या मैं एक पल के लिए आपकी
							कार उधार ले सकता हूँ?")
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">Conditional Statements</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							If I had more time, I could finish the project. (यदि मेरे पास अधिक
							समय होता तो मैं इस परियोजना को पूरा कर सकता था।){" "}
						</div>
						<div className="col-span-2">
							If he studied harder, he could pass the exam. (यदि वह अधिक मेहनत
							से अध्ययन करता, तो वह परीक्षा उत्तीर्ण कर सकता था)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Possibility/Probability (संभावना)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							It could rain later. (बाद में बारिश हो सकती है.)
						</div>
						<div className="col-span-2">
							She could be at home right now.(वह अभी घर पर हो सकती है।)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Making Suggestions (सुझाव देना)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							You could try the new restaurant downtown. (आप शहर में नया
							restaurant आज़मा सकते हैं)
						</div>
						<div className="col-span-2">
							You could take a break and relax for a while. (आप कुछ देर के लिए
							ब्रेक ले सकते हैं और आराम कर सकते हैं।)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Expressing Politeness (विनम्रता व्यक्त करना)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							Could you possibly help me with this problem? (क्या आप संभवतः इस
							समस्या में मेरी मदद कर सकते हैं?)
						</div>
						<div className="col-span-2">
							Could you kindly repeat that? (क्या आप कृपया इसे दोहरा सकते हैं?){" "}
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Indirect Question (अप्रत्यक्ष सवाल)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							Could you tell me where the nearest ATM is? (क्या आप मुझे बता सकते
							हैं कि निकटतम एटीएम कहाँ है?)
						</div>
						<div className="col-span-2">
							Could you explain how this works? (क्या आप बता सकते हैं कि यह कैसे
							काम करता है?)
						</div>
					</div>
				</div>
			</div>

			{/* Could have */}
			<div className="m-10 text-center p-10 border border-gray-300 bg-gray-200">
				<h1 className="md:text-3xl text-xl font-bold text-center hover:text-[#04aa6d]">
					3. Could have (सका/सकी/पाया + था/थी/थे)
				</h1>
				<h2 className="md:text-2xl text-md font-bold">
					(Subject + Could have + 3rd form verb + Object)
				</h2>

				<p className="text-justify">
					"Could have" is a modal phrase in English that is used to express past
					ability, past possibility, or past permission. Here's how it is
					typically used: <br></br>("हो सकता था" अंग्रेजी में एक मॉडल वाक्यांश
					है जिसका उपयोग पिछली क्षमता, पिछली संभावना या पिछली अनुमति को व्यक्त
					करने के लिए किया जाता है। यहां बताया गया है कि इसका आमतौर पर उपयोग
					कैसे किया जाता है:)
				</p>
				<div className="grid md:grid-cols-2 text-center bg-slate-400">
					<div className="border border-black p-2 font-bold">USAGE</div>
					<div className="border border-black p-2 font-bold uppercase">
						Examples
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Past Ability or Capability (अतीत की क्षमता)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							She could have solved the problem if she had more time. (यदि उसके
							पास अधिक समय होता तो वह समस्या का समाधान कर सकती थी।)
						</div>
						<div className="col-span-2">
							You could have turned on the tap but you didn’t. (तुम नल खोल सकते
							थे पर तुमने नहीं खोला।)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Past Possibility/Probability (अतीत की संभावना)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							He could have missed the bus. (उसकी बस छूट सकती थी.)
						</div>
						<div className="col-span-2">
							She could have failed the exam.(वह परीक्षा में असफल हो सकती थी।)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Past Permission (अतीत की अनुमति)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							You could have borrowed my car if you had asked. (अगर तुमने कहा
							होता तो तुम मेरी कार उधार ले सकते थे।)
						</div>
						<div className="col-span-2">
							He could have been promoted, but he decided to leave the company.
							(उनका प्रमोशन हो सकता था, लेकिन उन्होंने कंपनी छोड़ने का फैसला
							किया।)
						</div>
					</div>
				</div>
			</div>

			{/* May/Might */}
			<div className="m-10 text-center p-10 border border-gray-300 bg-gray-200">
				<h1 className="md:text-3xl text-xl font-bold text-center hover:text-[#04aa6d]">
					4. May/Might (सकता/सकती + हूँ)
				</h1>
				<h2 className="md:text-2xl text-md font-bold">
					(Subject + May/Might + 1st form verb + Object)
				</h2>
				<p className="text-justify">
					"may" is a modal verb that is used to express possibility, permission,
					or probability. Here are the main uses of "may": <br></br>("हो सकता
					है" एक मोडल क्रिया है जिसका उपयोग संभावना, अनुमति या संभाव्यता व्यक्त
					करने के लिए किया जाता है। यहां "हो सकता है" के मुख्य उपयोग दिए गए
					हैं:)
				</p>
				<div className="grid md:grid-cols-2 text-center bg-slate-400">
					<div className="border border-black p-2 font-bold">USAGE</div>
					<div className="border border-black p-2 font-bold uppercase">
						Examples
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">Permission (अनुमति)</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							"May I borrow your pen, please? ("क्या मैं आपकी कलम उधार ले सकता
							हूँ, कृपया?)
						</div>
						<div className="col-span-2">
							You may leave the room when you have finished your test. (जब आपका
							परीक्षण समाप्त हो जाए तो आप कमरा छोड़ सकते हैं।)
						</div>
						<div className="col-span-2">
							May I sit? (क्या मैं बैठ सकता हूँ ?)
						</div>
						<div className="col-span-2">
							You might leave the meeting early if you need to. (यदि आपको
							आवश्यकता हो तो आप बैठक को जल्दी छोड़ सकते हैं।)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">Possibility (संभावना)</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							It may/might rain later, so you should bring an umbrella. (बाद में
							बारिश हो सकती है, इसलिए आपको छाता लेकर आना चाहिए।)
						</div>
						<div className="col-span-2">
							It may/might also happen to you. (ये तुम्हारे साथ भी तो हो सकता
							है।)
						</div>
						<div className="col-span-2">
							I might go to the party tonight, depending on how I feel. (मैं आज
							रात पार्टी में जा सकता हूं, यह इस पर निर्भर करता है कि मैं कैसा
							महसूस करता हूं।)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Wishes or Prayers (इच्छाएँ या प्रार्थनाएँ)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							May you have a prosperous year ahead. (आपका आने वाला वर्ष मंगलमय
							हो।){" "}
						</div>
						<div className="col-span-2">
							May peace prevail on Earth. (धरती पर शांति कायम हो।)
						</div>
						<div className="col-span-2">
							May you live long! (तुम्हें मेरी उम्र लग जाये।)
						</div>
						<div className="col-span-2">
							May God forgive us! (भगवान हमें माफ करे।)
						</div>
					</div>
				</div>
			</div>

			{/* May have/Might have */}
			<div className="m-10 text-center p-10 border border-gray-300 bg-gray-200">
				<h1 className="md:text-3xl text-xl font-bold text-center hover:text-[#04aa6d]">
					5. May have/Might have(सकता/सकती/सकते + था/थी/थे)
				</h1>
				<h2 className="md:text-2xl text-md font-bold">
					(Subject + May have/Might have + 3rd form verb + Object)
				</h2>
				<p className="text-justify mt-2">
					"may have" and "might have" are modal phrases used to express
					possibility or uncertainty about past events. Here's how they are
					typically used: <br></br>("हो सकता है" और "हो सकता है" ऐसे मोडल
					वाक्यांश हैं जिनका उपयोग पिछली घटनाओं के बारे में संभावना या
					अनिश्चितता व्यक्त करने के लिए किया जाता है। यहां बताया गया है कि उनका
					आम तौर पर कैसे उपयोग किया जाता है:)
				</p>
				<p className="text-justify mt-2">
					"May have" is used to suggest a possibility or likelihood of something
					happening or having happened in the past. It indicates a higher degree
					of possibility compared to "might have." <br></br>("हो सकता है" का
					उपयोग किसी चीज़ के घटित होने या अतीत में घटित होने की संभावना या
					संभावना का सुझाव देने के लिए किया जाता है। यह "हो सकता है" की तुलना
					में उच्च स्तर की संभावना को इंगित करता है।)
				</p>
				<p className="text-justify mt-2">
					"Might have" is also used to express possibility or uncertainty about
					past events. It suggests a lower degree of possibility compared to
					"may have." <br></br>("हो सकता है" का प्रयोग पिछली घटनाओं के बारे में
					संभावना या अनिश्चितता व्यक्त करने के लिए भी किया जाता है। यह "हो सकता
					है" की तुलना में संभावना की कम डिग्री का सुझाव देता है।)
				</p>
				<div className="grid md:grid-cols-2 text-center bg-slate-400">
					<div className="border border-black p-2 font-bold">USAGE</div>
					<div className="border border-black p-2 font-bold uppercase">
						Examples
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">Speculation (अनुमान)</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							I may have left my keys at home.(हो सकता है कि मैंने अपनी चाबियाँ
							घर पर ही छोड़ दी हों।)
						</div>
						<div className="col-span-2">
							She might have lost her phone. (हो सकता है उसने अपना फोन खो दिया
							हो.)
						</div>
						<div className="col-span-2">
							She might have missed the bus, which is why she's late. (शायद उसकी
							बस छूट गई होगी, इसलिए उसे देर हो गई।)
						</div>
						<div className="col-span-2">
							She may have taken the wrong turn and gotten lost. (हो सकता है कि
							उसने गलत मोड़ ले लिया हो और खो गई हो।)
						</div>
						<div className="col-span-2">
							I may have left my phone in the car; I'll go check. (हो सकता है कि
							मैंने अपना फ़ोन कार में छोड़ दिया हो; मैं जाँच करने जाऊँगा।)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">
						Uncertainty (अनिश्चितता)
					</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							I might have left my book at home; I can't find it in my bag.
							(शायद उसकी बस छूट गई होगी, इसलिए उसे देर हो गई।)
						</div>
						<div className="col-span-2">
							They might have already eaten dinner; that's why they're not
							hungry (हो सकता है कि वे पहले ही रात का खाना खा चुके हों; इसीलिए
							वे भूखे नहीं हैं)
						</div>
						<div className="col-span-2">
							The meeting may have been canceled; I haven't received any
							updates. (हो सकता है कि बैठक रद्द कर दी गई हो; मुझे कोई अपडेट नहीं
							मिला है.)
						</div>
						<div className="col-span-2">
							He may have misunderstood the instructions, leading to the
							mistake. (हो सकता है कि उसने निर्देशों को गलत समझा हो, जिसके कारण
							यह गलती हुई।)
						</div>
					</div>
				</div>
				<div className="grid md:grid-cols-2 text-center">
					<div className="border border-black p-2">Possibility (संभावना)</div>
					<div className="grid md:grid-cols-2 grid-rows-2 border border-black p-2">
						<div className="col-span-2">
							The package might have arrived while we were out. (जब हम बाहर थे
							तब शायद पैकेज आ गया होगा।)
						</div>
						<div className="col-span-2">
							She might have finished the report by now. (हो सकता है कि उसने अब
							तक रिपोर्ट पूरी कर ली हो।)
						</div>
						<div className="col-span-2">
							The keys may have fallen out of my pocket while I was jogging. (जब
							मैं जॉगिंग कर रहा था तब चाबियाँ मेरी जेब से गिर गई होंगी।)
						</div>
						<div className="col-span-2">
							She may have already left for the airport. (वह शायद पहले ही
							एयरपोर्ट के लिए निकल चुकी होगी.)
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Modal;
