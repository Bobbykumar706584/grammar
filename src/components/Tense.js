/** @format */

import React from "react";
import Header from "./Nav/Header";
import Footer from "./Nav/Footer";

const Tenses = () => {
	return (
		<>
			<Header />
			<div className="font-serif mt-[100px] p-10 text-justify text-[#231f45]">
				<h1 className="md:text-5xl text-3xl text-center font-bold">
					Tenses (काल)
				</h1>
				<p className="p-2 md:text-xl text-justify">
					Tenses refer to the grammatical structures in languages that indicate
					the time at which an action or state of being occurs. They help to
					establish the timing of events or actions in relation to the present,
					past, or future. Tenses are an integral part of language syntax and
					are used to convey information about when something happens, happened,
					or will happen. They allow speakers and writers to provide clarity and
					context to their communication. In English and many other languages,
					tenses are often categorized into different forms such as simple,
					continuous, perfect, and perfect continuous, each serving specific
					purposes in expressing time-related information.
				</p>
				<p className="p-2 md:text-xl text-justify">
					काल भाषाओं में व्याकरणिक संरचनाओं को संदर्भित करता है जो उस समय को
					इंगित करता है जब कोई क्रिया या होने की स्थिति होती है। वे वर्तमान,
					अतीत या भविष्य के संबंध में घटनाओं या कार्यों का समय स्थापित करने में
					मदद करते हैं। काल भाषा वाक्यविन्यास का एक अभिन्न अंग हैं और इसका उपयोग
					इस बारे में जानकारी देने के लिए किया जाता है कि कब कुछ होता है, हुआ
					है, या होगा। वे वक्ताओं और लेखकों को अपने संचार में स्पष्टता और संदर्भ
					प्रदान करने की अनुमति देते हैं। अंग्रेजी और कई अन्य भाषाओं में, काल को
					अक्सर विभिन्न रूपों में वर्गीकृत किया जाता है जैसे कि सरल, निरंतर,
					पूर्ण और पूर्ण निरंतर, प्रत्येक समय-संबंधी जानकारी व्यक्त करने में
					विशिष्ट उद्देश्यों की पूर्ति करता है।
				</p>
				<p className="p-2 md:text-xl text-justify">
					Tenses are typically categorized into three main types: past, present,
					and future. Within these categories, there are various forms or
					aspects of tenses. Here's a breakdown of the types of tenses: <br />
					(काल को आम तौर पर तीन मुख्य प्रकारों में वर्गीकृत किया जाता है: अतीत,
					वर्तमान और भविष्य। इन श्रेणियों के अंतर्गत काल के विभिन्न रूप या पहलू
					होते हैं। यहां काल के प्रकारों का विवरण दिया गया है:)
				</p>
				<div className="grid border text-center md:text-2xl mt-2 border-black p-2 md:mx-5 bg-slate-400 font-bold">
					<div className="">
						Type of Tenses <br />
						(काल के प्रकार)
					</div>
				</div>
				<div className="grid grid-cols-3 border text-center border-black p-2 md:mx-5">
					<div className="md:p-2 font-bold">Past Tense (भूतकाल)</div>
					<div className="md:p-2 font-bold">Present Tense (वर्तमान - काल)</div>
					<div className="md:p-2 font-bold">Future Tense (भविष्यकाल)</div>
				</div>
				<div className="grid grid-cols-3 text-center border border-black md:p-2 md:mx-5">
					<div className="col-span-1 bg-slate-200">
						<div className="grid gap-3 border border-black md:p-3">
							<div>Simple Past Tense (सरल भूतकाल)</div>
							<div>Past Continuous Tense (भूत अपूर्ण काल)</div>
							<div>Past Perfect Tense(पूर्ण भूत काल)</div>
							<div>Past Perfect Continuous Tense (भूतकाल पूर्ण सतत काल)</div>
						</div>
					</div>
					<div className="col-span-1 bg-slate-200">
						<div className="grid gap-3 border border-black md:p-3">
							<div>Simple Present Tense (साधारण वर्तमान काल)</div>
							<div>Present Continuous Tense (वर्तमान निरंतर काल)</div>
							<div>Present Perfect Tense (वर्तमान पूर्ण काल)</div>
							<div>
								Present Perfect Continuous Tense (वर्तमान पूर्ण सतत काल)
							</div>
						</div>
					</div>
					<div className="col-span-1 bg-slate-200">
						<div className="grid gap-3 border border-black md:p-3">
							<div>Simple Future Tense (सरल भविष्य काल)</div>
							<div>Future Continuous (भविष्य सतत काल)</div>
							<div>Future Perfect Tense (भविष्य पूर्ण काल)</div>
							<div>Future Perfect Continuous Tense (भविष्य पूर्ण सतत काल)</div>
						</div>
					</div>
				</div>
			</div>
			{/* singular and plural */}
			<div className="m-10 text-center bg-gray-200">
				<h1 className="font-bold text-2xl underline p-5">
					Singular and Plural
				</h1>
				<div className="grid grid-cols-3 bg-slate-400">
					<div className="col-span-1 border border-black font-bold text-xl p-3">
						Person
					</div>
					<div className="col-span-1 font-bold border border-black text-xl p-3">
						Singular
					</div>
					<div className="col-span-1 font-bold border border-black text-xl p-3">
						Plural
					</div>
				</div>
				<div className="grid grid-cols-3">
					<div className="col-span-1 border border-black font-bold">
						1st Person
					</div>
					<div className="col-span-1 font-bold border border-black p-3">
						I (मैं)
					</div>
					<div className="col-span-1 font-bold border border-black p-3">
						We (हम)
					</div>
				</div>
				<div className="grid grid-cols-3">
					<div className="col-span-1 border border-black font-bold">
						2nd Person
					</div>
					<div className="col-span-1 font-bold border border-black p-3">
						You (तु)
					</div>
					<div className="col-span-1 font-bold border border-black p-3">
						You (तुम, आप)
					</div>
				</div>
				<div className="grid grid-cols-3">
					<div className="col-span-1 border border-black font-bold">
						3rd Person
					</div>
					<div className="col-span-1 font-bold border border-black p-3">
						He, She, it, Ram (वह, वह, यह, राम)
					</div>
					<div className="col-span-1 font-bold border border-black p-3">
						They, Govind and Harshit (वे, गोविंद और हर्षित)
					</div>
				</div>
			</div>
			{/* Present tense */}
			<div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
				<h1 className="md:text-3xl text-xl font-bold text-center hover:text-[#04aa6d]">
					Present Tense (वर्तमानकाल)
				</h1>
				<p className="text-justify mt-2">
					Present tense refers to the form of a verb that indicates an action or
					state that is happening now, at the present time. It is used to
					describe actions that are ongoing, habitual, or generally true.
				</p>
				<p className="text-justify mt-2">
					वर्तमान काल से तात्पर्य क्रिया के उस रूप से है जो किसी क्रिया या
					स्थिति को इंगित करता है जो अभी, वर्तमान समय में घटित हो रही है। इसका
					उपयोग उन कार्यों का वर्णन करने के लिए किया जाता है जो चल रहे हैं,
					अभ्यस्त हैं, या आम तौर पर सत्य हैं।{" "}
				</p>
				{/* simple present tense */}
				<div className="mt-5">
					<h2 className="md:text-2xl font-bold mb-2 hover:text-[#04aa6d]">
						1. Simple Present Tense (सरल वर्तमानकाल):-
					</h2>
					<p className="text-justify font-serif">
						Used to describe habitual actions, general truths, and scheduled
						events. <br /> आदतन कार्यों, सामान्य सत्य और निर्धारित घटनाओं का
						वर्णन करने के लिए उपयोग किया जाता है।
						<p>
							In the simple present tense, the verb remains in its base form
							(infinitive) for all subjects, except for the third person
							singular (he, she, it), where '-ता/ती/ते हैं' is added to the verb
							root for masculine, feminine, and plural subjects, respectively.{" "}
							<br /> सरल वर्तमान काल में, तीसरे व्यक्ति एकवचन (वह, वह, यह) को
							छोड़कर, सभी विषयों के लिए क्रिया अपने मूल रूप (infinitive) में
							रहती है, जहां क्रिया मूल में <strong>(ता/ती/ते हैं)</strong> जोड़ा
							जाता है। क्रमशः पुल्लिंग, स्त्रीलिंग और बहुवचन विषयों के लिए।
						</p>
					</p>
					<h4 className="font-bold">
						Subject 1:- I, You, We, They, Ram and Raju.
					</h4>
					<h4 className="font-bold">Subject 2:- He, She, It, Ram.</h4>
					<h4 className="font-bold">Rules:-</h4>
					<ul className="list-disc ml-10">
						<li>
							To regular verbs just add an s (नियमित क्रियाओं में बस एक s
							जोड़ें) <br />{" "}
							<strong>
								Ex: travel {"->"} travels, give {"->"} gives, play {"->"} plays.
							</strong>
						</li>
						<li>
							When the verb ends in -ch, o, -ss, -sh, -x or -zz and the subjects
							our (Subject 2), we add -es. (जब क्रिया -ch, o, -ss, -sh, -x या
							-zz में समाप्त होती है और विषय हमारे (Subject 2) होते हैं, तो हम
							-es जोड़ते हैं) <br /> <strong>Ex :- buzz {"->"} buzzes</strong>{" "}
						</li>
						<li>
							When the verb ends in a consonant + -y we change y to i and add
							-es. (जब क्रिया एक व्यंजन + -y में समाप्त होती है तो हम y को i में
							बदलते हैं और -es जोड़ते हैं।) <br />{" "}
							<strong>Ex :- Reply {"->"} Replies</strong>
						</li>
					</ul>
					<div className="grid md:grid-cols-2 gap-8 mt-4 text-sm">
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">1. Affirmative (सकारात्मक वाक्य) </h4>
							<div className="md:font-bold">
								Rule 1: - Subject 1 + 1st form verb + Object
							</div>
							<div className="md:font-bold">
								Rule 2: - Subject 2 + 1st form verb + s/es + Object
							</div>
							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										She/He plays tennis every Sunday. (वह हर रविवार को टेनिस
										खेलती है।)
									</div>
									<div className="col-span-2">
										I like to read books. (मैं किताबें पढ़ना पसंद करता हूं।)
									</div>
									<div className="col-span-2">
										The sun rises in the east. (सूरज पूर्व में उगता है।)
									</div>
									<div className="col-span-2">
										They go to school together. (वे एक साथ स्कूल जाते हैं।)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">2. Negative (नकारात्म क वाक्य) </h4>
							<div className="md:font-bold">
								Rule 1: - Subject 1 + do not + 1st form verb + Object
							</div>
							<div className="md:font-bold">
								Rule 2: - Subject 2 + does not + 1st form verb + Object
							</div>
							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										She/He does not play tennis every Sunday. (वह/वह प्रत्येक
										रविवार को टेनिस नहीं खेलता/खेलती है।)
									</div>
									<div className="col-span-2">
										I do not like to read books. (मैं किताबें पढ़ना पसंद नहीं
										करता हूं।)
									</div>
									<div className="col-span-2">
										The sun does not rise in the east. (सूर्य पूर्व दिशा में
										नहीं उगता।)
									</div>
									<div className="col-span-2">
										They do not go to school together. (वे एक साथ स्कूल नहीं
										जाते)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">Interrogative (प्रश्नवाचक वाक्य)</h4>
							<div className="md:font-bold">
								Rule 1: - Do + Subject 1 + 1st form verb + Object?
							</div>
							<div className="md:font-bold">
								Rule 2: - Does + Subject 2 + 1st form verb + Object?
							</div>
							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										Does She/He play tennis every Sunday? (क्या वह/वह प्रत्येक
										रविवार को टेनिस खेलता/खेलती है?)
									</div>
									<div className="col-span-2">
										Do I like to read books? (क्या मुझे किताबें पढ़ना पसंद है?)
									</div>
									<div className="col-span-2">
										Does The sun rise in the east? (क्या सूर्य पूर्व में उगता
										है?)
									</div>
									<div className="col-span-2">
										Do They go to school together? (क्या वे एक साथ स्कूल जाते
										हैं?)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">
								Negative Interrogative (नकारात्मक प्रश्नवाचक वाक्य)
							</h4>
							<div className="md:font-bold">
								Rule 1: - Do + Subject 1 + not + 1st form verb + Object?
							</div>
							<div className="md:font-bold">
								Rule 2: - Does + Subject 2 + not + 1st form verb + Object?
							</div>
							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										Does She/He not play tennis every Sunday? (क्या वह/वह
										प्रत्येक रविवार को टेनिस नहीं खेलता/खेलती है?)
									</div>
									<div className="col-span-2">
										Do I not like to read books? (क्या मुझे किताबें पढ़ना नहीं
										पसंद है?)
									</div>
									<div className="col-span-2">
										Does The sun not rise in the east? (क्या सूर्य पूर्व में
										नहीं उगता है?)
									</div>
									<div className="col-span-2">
										Do They not go to school together? (क्या वे एक साथ स्कूल
										नहीं जाते हैं?)
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<h1 className="font-bold md:text-2xl">Practice (अभ्यास) :-</h1>
						<p className="md:text-xl">
							Hindi to English Translate (हिंदी से अंग्रेजी अनुवाद)
						</p>
						<p className="font-bold">Example:-</p>
						<ul className="list-disc ml-10">
							<li>वह हर रोज़ अपने बच्चों को स्कूल भेजती है।</li>
							<li>वे अपने दोस्तों के साथ गाना गाते हैं।</li>
							<li>वह रोज़ सुबह व्यायाम करती है। </li>
							<li>मेरे भाई किताबें पढ़ते हैं।</li>
							<li>मेरा बेटा स्कूल जाता है।</li>
							<li>हम हर शुक्रवार मंदिर जाते हैं।</li>
							<li>मेरे दोस्त फुटबॉल नहीं खेलते।</li>
							<li>वह अब किताब नहीं पढ़ता।</li>
							<li>वह नहीं बोलता।</li>
							<li>क्या वे इस किताब को पढ़ते हैं?</li>
							<li>क्या वह तुम्हें प्यार करता है?</li>
						</ul>
					</div>
					<hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
				</div>
				{/* present continuous tense */}
				<div className="mt-5">
					<h2 className="md:text-2xl font-bold hover:text-[#04aa6d]">
						2. Present Continuous Tense (वर्तमान काल):-
					</h2>
					<p>
						The present continuous tense, also known as the present progressive
						tense, is used to describe actions that are happening at the moment
						of speaking or actions that are currently in progress. In this
						tense, the action is ongoing and not yet completed. <br />
						वर्तमान निरंतर काल, जिसे वर्तमान प्रगतिशील काल के रूप में भी जाना
						जाता है, का उपयोग उन कार्यों का वर्णन करने के लिए किया जाता है जो
						बोलने के समय हो रहे हैं या जो कार्य वर्तमान में प्रगति पर हैं। इस
						काल में, कार्रवाई जारी है और अभी तक पूरी नहीं हुई है।
					</p>
					<h4 className="font-bold">Subject 1:- He, She, It, Ram.</h4>
					<h4 className="font-bold">
						Subject 2:- You, We, They, Ram and Raju.
					</h4>
					<div className="grid md:grid-cols-2 gap-8 mt-4">
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">1. Affirmative (सकारात्मक वाक्य) </h4>
							<div className="md:font-bold">
								Rule 1: - I + am + 1st form verb + ing + Object
							</div>
							<div className="md:font-bold">
								Rule 2: - Subject 1 + is + 1st form verb + ing + Object
							</div>
							<div className="md:font-bold">
								Rule 3: - Subject 2 + are + 1st form verb + ing + Object
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										I am eating lunch. (मैं दोपहर का खाना खा रहा हूँ)
									</div>
									<div className="col-span-2">
										She is reading a book. (वह किताब पढ़ रही है।)
									</div>
									<div className="col-span-2">
										They are playing football. (वे फुटबॉल खेल रहे हैं।)
									</div>
									<div className="col-span-2">
										He is studying for his exam. (वह अपनी परीक्षा के लिए पढ़ाई
										कर रहा है.)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">2. Negative (नकारात्म क वाक्य) </h4>
							<div className="md:font-bold">
								Rule 1: - I + am + not + 1st form verb + ing + Object
							</div>
							<div className="md:font-bold">
								Rule 2: - Subject 1 + is + not + 1st form verb + ing + Object
							</div>
							<div className="md:font-bold">
								Rule 3: - Subject 2 + are + not + 1st form verb + ing + Object
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										I am not eating lunch. (मैं दोपहर का खाना नहीं खा रहा हूँ)
									</div>
									<div className="col-span-2">
										She is not reading a book. (वह किताब नहीं पढ़ रही है।)
									</div>
									<div className="col-span-2">
										They are not playing football. (वे फुटबॉल नहीं खेल रहे हैं.)
									</div>
									<div className="col-span-2">
										He is not studying for his exam. (वह अपनी परीक्षा के लिए
										पढ़ाई नहीं कर रहा है.)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">Interrogative (प्रश्नवाचक वाक्य)</h4>
							<div className="md:font-bold">
								Rule 1: - Am + I + 1st form verb + ing + Object?
							</div>
							<div className="md:font-bold">
								Rule 2: - Is + Subject 1 + 1st form verb + ing + Object?
							</div>
							<div className="md:font-bold">
								Rule 3: - Are + Subject 2 + 1st form verb + ing + Object?
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										Am i eating lunch? (क्या मैं दोपहर का खाना खा रहा हूँ?)
									</div>
									<div className="col-span-2">
										Is she reading a book? (क्या वह किताब पढ़ रही है?)
									</div>
									<div className="col-span-2">
										Are they playing football? (क्या वे फ़ुटबॉल खेल रहे हैं?)
									</div>
									<div className="col-span-2">
										Is he studying for his exam? (क्या वह अपनी परीक्षा के लिए
										पढ़ाई कर रहा है?)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">
								Negative Interrogative (नकारात्मक प्रश्नवाचक वाक्य)
							</h4>
							<div className="md:font-bold">
								Rule 1: - Am + I + not + 1st form verb + ing + Object?
							</div>
							<div className="md:font-bold">
								Rule 2: - Is + Subject 1 + not + 1st form verb + ing + Object?
							</div>
							<div className="md:font-bold">
								Rule 3: - Are + Subject 2 + not + 1st form verb + ing + Object?
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										Am i not eating lunch? (क्या मैं दोपहर का खाना खा रहा हूँ?)
									</div>
									<div className="col-span-2">
										Is she not reading a book? (क्या वह किताब पढ़ रही है?)
									</div>
									<div className="col-span-2">
										Are they not playing football? (क्या वे फ़ुटबॉल खेल रहे
										हैं?)
									</div>
									<div className="col-span-2">
										Is he not studying for his exam? (क्या वह अपनी परीक्षा के
										लिए पढ़ाई कर रहा है?)
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<h1 className="font-bold md:text-2xl">Practice (अभ्यास) :-</h1>
						<p className="md:text-xl">
							Hindi to English Translate (हिंदी से अंग्रेजी अनुवाद)
						</p>
						<p className="font-bold">Example:-</p>
						<ul className="list-disc ml-10">
							<li>मैं एक किताब पढ़ रहा हूँ।</li>
							<li>वह ईमेल लिख रही है।</li>
							<li>वह रात का खाना पका रहा है।</li>
							<li>हम अपनी परीक्षा के लिए पढ़ रहे हैं।</li>
							<li>बच्चे टीवी देख रहे हैं।</li>
							<li>कारीगर एक नया पुल बना रहे हैं।</li>
							<li>वह कोर में गाती है।</li>
							<li>वह मैराथन दौड़ रहा है।</li>
							<li>वे दीवारों को नीला रंग लगा रहे हैं।</li>
							{/* "I am reading a book."
"She is writing an email."
"They are playing football."
"He is cooking dinner."
"We are studying for our exams."
"The children are watching TV."
"The workers are building a new bridge."
"She is singing in the choir."
"He is running a marathon."
"They are painting the walls blue." */}
						</ul>
					</div>
					<hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
				</div>
			</div>
			{/* past tense */}
			<div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
				<h1 className="md:text-3xl text-xl font-bold text-center hover:text-[#04aa6d]">
					Past Tense (भूतकाल)
				</h1>
				<p className="text-justify mt-2">
					Past tense is a grammatical form used to indicate actions, events, or
					states that have already occurred or happened in the past. In English
					grammar, verbs can be conjugated to express past tense. The past tense
					form of regular verbs is typically formed by adding "-ed" to the base
					form of the verb (e.g., walked, talked, played), while irregular verbs
					have unique past tense forms (e.g., went, ate, saw).
				</p>
				<p className="text-justify mt-2">
					भूतकाल एक व्याकरणिक रूप है जिसका उपयोग उन कार्यों, घटनाओं या अवस्थाओं
					को इंगित करने के लिए किया जाता है जो पहले ही घटित हो चुके हैं या अतीत
					में घटित हो चुके हैं। अंग्रेजी व्याकरण में, क्रियाओं को भूतकाल को
					व्यक्त करने के लिए संयोजित किया जा सकता है। नियमित क्रियाओं का भूतकाल
					रूप आमतौर पर क्रिया के आधार रूप में "-ed" जोड़कर बनता है (जैसे, चला,
					बात की, खेला), जबकि अनियमित क्रियाओं के अद्वितीय भूतकाल रूप होते हैं
					(जैसे, गया, खाया, देखा) .
				</p>
				{/* simple past tense */}
				<div className="mt-5">
					<h2 className="md:text-2xl font-bold mb-2 hover:text-[#04aa6d]">
						1. Simple Past Tense (सरल भूतकाल):-
					</h2>
					<p className="text-justify font-serif">
						In this tense, the auxiliary verbs "गया" (gaya), "लिया" (liya),
						"दिया" (diya), "सोया" (soya), "दी" (di), "ली" (li), "की" (ki), etc.
						are used with the main verb. In this tense, "है" (hai), "हैं"
						(hain), "हो" (ho), "हूँ" (hoon) or "था" (tha), "थे" (the), "थी"
						(thi) are never used. <br />
						इस काल में सहायक क्रिया "गया" (गया), "लिया" (लिया), "दिया" (दीया),
						"सोया" (सोया), "दी" (दी), "ली" (ली), " मुख्य क्रिया के साथ की" (की)
						आदि का प्रयोग किया जाता है। इस काल में, "है" (है), "हैं" (हैं), "हो"
						(हो), "हूं" (हूं) या "था" (था), "थे" (द), "थी" ( थी) का कभी भी उपयोग
						नहीं किया जाता है।
					</p>
					<div className="grid md:grid-cols-2 gap-8 mt-4 md:text-sm">
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">1. Affirmative (सकारात्मक वाक्य) </h4>
							<div className="md:font-bold">
								Rule: - Subject + 2nd form verb + Object
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										She wrote a letter. (उसने एक ख़त लिखी।)
									</div>
									<div className="col-span-2">
										Govind ate an apple. (गोविंद ने एक सेब खाया)
									</div>
									<div className="col-span-2">
										I slept at 9. (वे 9 बजे सोये)
									</div>
									<div className="col-span-2">
										we loved him/her (मैंने उसे प्यार किया।)
									</div>
									<div className="col-span-2">
										He/she made a mistake. (उसने गलती की)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">2. Negative (नकारात्म क वाक्य) </h4>
							<div className="md:font-bold">
								Rule: Subject + did not + 1st form verb + Object.
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										She did not write a letter. (उसने कोई ख़त नहीं लिखी।)
									</div>
									<div className="col-span-2">
										Govind did not eat an apple.(गोविंद ने एक सेब नहीं खाया)
									</div>
									<div className="col-span-2">
										I did not sleep at 9. (मैं 9 बजे सोया नहीं)
									</div>
									<div className="col-span-2">
										I did not love him/her. (मैंने उसे प्यार नहीं किया।)
									</div>
									<div className="col-span-2">
										He/she did not make a mistake. (उसने कोई गलती नहीं की।)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">Interrogative (प्रश्नवाचक वाक्य)</h4>
							<div className="md:font-bold">
								Rule: + did + subject + 1st form verb + Object?
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										Did she write a letter? (क्या उसने कोई पत्र लिखा?)
									</div>
									<div className="col-span-2">
										{" "}
										Did Govind eat an apple? (क्या गोविंद ने सेब खाया?)
									</div>
									<div className="col-span-2">
										Did I sleep at 9? (क्या मैं 9 बजे सो गया?)
									</div>
									<div className="col-span-2">
										Did I love him/her (क्या मैंने उसे प्यार किया?)
									</div>
									<div className="col-span-2">
										Did he/she make a mistake? (क्या उसने कोई गलती की है?)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">
								Negative Interrogative (नकारात्मक प्रश्नवाचक वाक्य)
							</h4>
							<div className="md:font-bold">
								Rule: + Did + Subject + not + 1st form verb + Object?
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										Did she not write a letter? (क्या उसने पत्र नहीं लिखा?)
									</div>
									<div className="col-span-2">
										Did Govind not eat an apple? (क्या गोविंद ने सेब नहीं खाया?)
									</div>
									<div className="col-span-2">
										Did I not sleep at 9? (क्या मैं 9 बजे नहीं सोया?)
									</div>
									<div className="col-span-2">
										Did I not love him/her (क्या मैंने उसे प्यार नहीं किया?)
									</div>
									<div className="col-span-2">
										Did he/she not make a mistake? (क्या उसने कोई गलती नहीं की
										है?)
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<h1 className="font-bold md:text-2xl">Practice (अभ्यास) :-</h1>
						<p className="md:text-xl">
							Hindi to English Translate (हिंदी से अंग्रेजी अनुवाद)
						</p>
						<p className="font-bold">Example:-</p>
						<ul className="list-disc ml-10">
							<li>उसने किताब पढ़ी।</li>
							<li>मैंने कल फिल्म देखी।</li>
							<li>लोग स्टेज़ पर नहीं गये।</li>
							<li>राम घूमने नहीं गया।</li>
							<li>क्या आपने अपना होमवर्क पूरा किया?</li>
							<li>क्या वे पार्क गए थे?</li>
							<li>उसने ऐसा क्यों नहीं किया?</li>
							<li>क्या मैंने बोतल से पानी नहीं पिया?</li>
						</ul>
					</div>
					<hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
				</div>
				{/* past continuous tense */}
				<div className="mt-5">
					<h2 className="md:text-2xl font-bold hover:text-[#04aa6d]">
						2. Past Continuous Tense (भूत अपूर्ण काल):-
					</h2>
					<p className="text-justify font-serif">
						Past Continuous Tense, also known as the past progressive tense, is
						used to describe ongoing or continuous actions that were happening
						at a specific point in the past. In this tense, the action is
						depicted as being in progress over a period of time in the past.{" "}
						<br />
						भूत अपूर्ण काल का उपयोग किसी निश्चित समय में गतिशील या लगातार
						कार्यों का वर्णन करने के लिए किया जाता है जो पिछले में किसी निश्चित
						समय में हो रहे थे। इस काल में, क्रिया को पिछले समय के दौरान चल रहे
						के रूप में दिखाया जाता है।
					</p>
					<h4 className="font-bold">Subject 1:- I, He, She, It, Ram.</h4>
					<h4 className="font-bold">
						Subject 2:- You, We, They, Ram and Raju.
					</h4>
					<div className="grid md:grid-cols-2 gap-8 mt-4">
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">1. Affirmative (सकारात्मक वाक्य) </h4>
							<div className="md:font-bold">
								Rule 1: - Subject 1 + was + 1st form verb + ing + Object
							</div>
							<div className="md:font-bold">
								Rule 2: - Subject 2 + were + 1st form verb + ing + Object
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										She was reading a book. (वह किताब पढ़ रही थी।)
									</div>
									<div className="col-span-2">
										They were playing in the garden. (वे बगीचे में खेल रहे थे।)
									</div>
									<div className="col-span-2">
										He was cooking dinner. (वह रात का खाना बना रहा था।)
									</div>
									<div className="col-span-2">
										I was watching T.V (मैं टीवी देख रहा था।)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">2. Negative (नकारात्म क वाक्य) </h4>
							<div className="md:font-bold">
								Rule 1: - Subject 1 + was + not + 1st form verb + ing + Object
							</div>
							<div className="md:font-bold">
								Rule 2: - Subject 2 + were + not + 1st form verb + ing + Object
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										She was not reading a book. (वह किताब नहीं पढ़ रही थी।)
									</div>
									<div className="col-span-2">
										They were not playing in the garden. (वे बगीचे में नहीं खेल
										रहे थे।)
									</div>
									<div className="col-span-2">
										He was not cooking dinner. (वह रात का खाना नहीं बना रहा था।)
									</div>
									<div className="col-span-2">
										I was not watching T.V (मैं टीवी नहीं देख रहा था।)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">Interrogative (प्रश्नवाचक वाक्य)</h4>
							<div className="md:font-bold">
								Rule 1: - Was + (Subject 1) + 1st form verb + ing + Object?
							</div>
							<div className="md:font-bold">
								Rule 2: - Were + (Subject 2) + 1st form verb + ing + Object?
							</div>
							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										Was she reading a book? (क्या वह किताब पढ़ रही थी?)
									</div>
									<div className="col-span-2">
										Were they playing in the garden? (क्या वे बगीचे में खेल रहे
										थे?)
									</div>
									<div className="col-span-2">
										Was he cooking dinner? (क्या वह रात का खाना बना रहा था?)
									</div>
									<div className="col-span-2">
										Was I watching TV? (क्या मैं टीवी देख रहा था?)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">
								Negative Interrogative (नकारात्मक प्रश्नवाचक वाक्य)
							</h4>
							<div className="md:font-bold">
								Rule 1: - Was + (Subject 1) + not + 1st form verb + ing +
								Object?
							</div>
							<div className="md:font-bold">
								Rule 2: - Were + (Subject 2) + not + 1st form verb + ing +
								Object?
							</div>
							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										Was she not reading a book? (क्या वह किताब नहीं पढ़ रही थी?)
									</div>
									<div className="col-span-2">
										Were they not playing in the garden? (क्या वे बगीचे में नहीं
										खेल रहे थे?)
									</div>
									<div className="col-span-2">
										Was he not cooking dinner? (क्या वह रात का खाना नहीं बना रहा
										था?)
									</div>
									<div className="col-span-2">
										Was I not watching TV? (क्या मैं टी.वी नहीं देख रहा था?)
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-5">
						<h1 className="font-bold md:text-2xl">Practice (अभ्यास) :-</h1>
						<p className="md:text-xl">
							Hindi to English Translate (हिंदी से अंग्रेजी अनुवाद)
						</p>
						<p className="font-bold">Example:-</p>
						<ul className="list-disc ml-10">
							<li>
								रात के दो बजे वह अपनी किताब पढ़ रहा था।
								{/* (He was reading his book at two in the night.) */}
							</li>
							<li>
								तुम्हारा दोस्त टेनिस खेल रहा था जब हम पहुँचे।
								{/* (Your friend was playing tennis when we arrived.) */}
							</li>
							<li>
								हम टीवी नहीं देख रहे थे।
								{/* (We were not watching TV.) */}
							</li>
							<li>
								वह बहार नहीं जा रही थी।
								{/* (She was not going outside.) */}
							</li>
							<li>
								क्या तुम अपना काम कर रहे थे?
								{/* (Were you doing your work?) */}
							</li>
							<li>
								क्या तुम उससे बात कर रहे थे?
								{/* (Were you talking to him?) */}
							</li>
							<li>
								क्या तुम खाना नहीं बना रहे थे?
								{/* (Were you not cooking dinner?) */}
							</li>
							<li>
								क्या वह बाहर नहीं जा रही थी?
								{/* (Was she not going outside?) */}
							</li>
						</ul>
					</div>
					<hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
				</div>
			</div>

			{/* future tense */}
			<div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
				<h1 className="md:text-3xl text-xl font-bold text-center hover:text-[#04aa6d]">
					Future Tense (भविष्यकाल)
				</h1>
				<p className="text-justify m-2">
					In simple terms, the future tense is a way of talking about things
					that haven't happened yet, but are expected to happen in the future.
					It's like predicting or planning for what will come next. For example,
					saying "I will go to the park tomorrow" or "She is going to study
					later" are both examples of sentences in the future tense. It's all
					about talking about what will happen later on.
				</p>
				<p className="text-justify m-2">
					सरल शब्दों में, भविष्य काल उन चीजों के बारे में बात करने का एक तरीका
					है जो अभी तक नहीं हुई हैं, लेकिन भविष्य में होने की उम्मीद है। यह आगे
					क्या होगा इसकी भविष्यवाणी करने या योजना बनाने जैसा है। उदाहरण के लिए,
					यह कहना कि "मैं कल पार्क जाऊँगा" या "वह बाद में पढ़ने जा रही है" दोनों
					भविष्य काल में वाक्यों के उदाहरण हैं। यह सब इस बारे में बात करने के
					बारे में है कि बाद में क्या होगा।
				</p>
				{/* simple past tense */}
				<div className="mt-5">
					<h2 className="md:text-2xl font-bold mb-2 hover:text-[#04aa6d]">
						1. Simple Future Tense (सरल भविष्यकाल):-
					</h2>
					<p className="text-justify font-serif">
						The simple future is a verb tense that's used to talk about things
						that haven't happened yet. <br />
						सरल भविष्य एक क्रिया काल है जिसका उपयोग उन चीजों के बारे में बात
						करने के लिए किया जाता है जो अभी तक नहीं हुई हैं।
					</p>
					<div className="grid md:grid-cols-2 gap-8 mt-4 md:text-sm">
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">1. Affirmative (सकारात्मक वाक्य) </h4>
							<div className="md:font-bold">
								Rule: - Subject + will + 1st form verb + Object
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										She wrote a letter. (उसने एक ख़त लिखी।)
									</div>
									<div className="col-span-2">
										Govind ate an apple. (गोविंद ने एक सेब खाया)
									</div>
									<div className="col-span-2">
										I slept at 9. (वे 9 बजे सोये)
									</div>
									<div className="col-span-2">
										we loved him/her (मैंने उसे प्यार किया।)
									</div>
									<div className="col-span-2">
										He/she made a mistake. (उसने गलती की)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">2. Negative (नकारात्म क वाक्य) </h4>
							<div className="md:font-bold">
								Rule: Subject + will + 1st form verb + Object
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										She did not write a letter. (उसने कोई ख़त नहीं लिखी।)
									</div>
									<div className="col-span-2">
										Govind did not eat an apple.(गोविंद ने एक सेब नहीं खाया)
									</div>
									<div className="col-span-2">
										I did not sleep at 9. (मैं 9 बजे सोया नहीं)
									</div>
									<div className="col-span-2">
										I did not love him/her. (मैंने उसे प्यार नहीं किया।)
									</div>
									<div className="col-span-2">
										He/she did not make a mistake. (उसने कोई गलती नहीं की।)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">Interrogative (प्रश्नवाचक वाक्य)</h4>
							<div className="md:font-bold">
								Rule: + will + subject + 1st form verb + Object?
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										Did she write a letter? (क्या उसने कोई पत्र लिखा?)
									</div>
									<div className="col-span-2">
										Did Govind eat an apple? (क्या गोविंद ने सेब खाया?)
									</div>
									<div className="col-span-2">
										Did I sleep at 9? (क्या मैं 9 बजे सो गया?)
									</div>
									<div className="col-span-2">
										Did I love him/her (क्या मैंने उसे प्यार किया?)
									</div>
									<div className="col-span-2">
										Did he/she make a mistake? (क्या उसने कोई गलती की है?)
									</div>
								</div>
							</div>
						</div>
						<div className="cols-span-1 text-center">
							<h4 className="font-bold">
								Negative Interrogative (नकारात्मक प्रश्नवाचक वाक्य)
							</h4>
							<div className="md:font-bold">
								Rule: + Will + Subject + not + 1st form verb + Object?
							</div>

							<div className="grid grid-cols-1 bg-slate-400">
								<div className="border border-black p-2 font-bold uppercase">
									Examples
								</div>
							</div>
							<div className="grid grid-cols-1">
								<div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
									<div className="col-span-2">
										Did she not write a letter? (क्या उसने पत्र नहीं लिखा?)
									</div>
									<div className="col-span-2">
										Did Govind not eat an apple? (क्या गोविंद ने सेब नहीं खाया?)
									</div>
									<div className="col-span-2">
										Did I not sleep at 9? (क्या मैं 9 बजे नहीं सोया?)
									</div>
									<div className="col-span-2">
										Did I not love him/her (क्या मैंने उसे प्यार नहीं किया?)
									</div>
									<div className="col-span-2">
										Did he/she not make a mistake? (क्या उसने कोई गलती नहीं की
										है?)
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="mt-5">
						<h1 className="font-bold md:text-2xl">Practice (अभ्यास) :-</h1>
						<p className="md:text-xl">
							Hindi to English Translate (हिंदी से अंग्रेजी अनुवाद)
						</p>
						<p className="font-bold">Example:-</p>
						<ul className="list-disc ml-10">
							<li>उसने किताब पढ़ी।</li>
							<li>मैंने कल फिल्म देखी।</li>
							<li>लोग स्टेज़ पर नहीं गये।</li>
							<li>राम घूमने नहीं गया।</li>
							<li>क्या आपने अपना होमवर्क पूरा किया?</li>
							<li>क्या वे पार्क गए थे?</li>
							<li>उसने ऐसा क्यों नहीं किया?</li>
							<li>क्या मैंने बोतल से पानी नहीं पिया?</li>
						</ul>
					</div> */}
					<hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
				</div>
				{/* future continuous tense */}
			</div>
			<Footer />
		</>
	);
};
export default Tenses;
