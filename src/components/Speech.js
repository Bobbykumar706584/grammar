/** @format */

import React from "react";
import Header from "./Nav/Header";
import data from "../JsonData/Common.json";
import TableReact from "./Nav/customTable";
import Footer from "./Nav/Footer";

const Speech = () => {
  return (
    <>
      <Header />
      <div className="mt-[100px] font-serif p-6 border border-gray-200 m-10 text-justify text-[#231f45] bg-gray-200/20 rounded-md shadow-lg shadow-blue-500">
        <h1 className="lg:text-5xl md:text-2xl text-center font-bold">
          Parts of Speech (शब्दभेद)
        </h1>
        <p className="p-2 lg:text-xl">
          A part of speech, also known as a word class or lexical category, is a
          linguistic category of words. It classifies words according to their
          syntactic and semantic functions within sentences. Common parts of
          speech include:
        </p>
        <p className="p-2 lg:text-xl font-sans">
          भाषण का एक भाग, जिसे शब्द वर्ग या शाब्दिक श्रेणी के रूप में भी जाना
          जाता है, शब्दों की एक भाषाई श्रेणी है। यह वाक्यों के भीतर शब्दों को
          उनके वाक्य-विन्यास और अर्थ संबंधी कार्यों के अनुसार वर्गीकृत करता है।
          भाषण के सामान्य भागों में शामिल हैं:
        </p>
        <div className="grid md:grid-cols-4 text-cente p-2 gap-5 mx-5">
          <button className="bg-transparent hover:bg-[#2699fb] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Noun (संज्ञा)
          </button>
          <button className="bg-transparent hover:bg-[#2699fb] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Pronoun (सर्वनाम)
          </button>
          <button className="bg-transparent hover:bg-[#2699fb] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Adjective (विशेषण)
          </button>
          <button className="bg-transparent hover:bg-[#2699fb] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Verb (क्रिया)
          </button>
          <button className="bg-transparent hover:bg-[#2699fb] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Adverb (क्रिया-विशेषण)
          </button>
          <button className="bg-transparent hover:bg-[#2699fb] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Preposition (सम्बंध-सूचक)
          </button>
          <button className="bg-transparent hover:bg-[#2699fb] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Conjuction (संयोजक)
          </button>
          <button className="bg-transparent hover:bg-[#2699fb] text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Interjection (विस्मयादिबोधक शब्द)
          </button>
        </div>
      </div>
      {/* noun */}
      <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="md:text-3xl font-bold text-center hover:text-[#2699fb]">
          Noun (संज्ञा)
        </h1>
        <p className="text-justify m-2 md:text-xl">
          A noun is a part of speech that names a person, place, thing, or idea.
          It's a fundamental building block of a sentence and often serves as
          the subject or object of a verb.
        </p>
        <p className="text-justify m-2">
          संज्ञा वाणी का वह भाग है जो किसी व्यक्ति, स्थान, वस्तु या विचार का नाम
          बताता है। यह एक वाक्य का मूलभूत निर्माण खंड है और अक्सर क्रिया के विषय
          या वस्तु के रूप में कार्य करता है।
        </p>
        <h5 className="">
          There are several types or parts of nouns: <br />
          संज्ञा के कई प्रकार या भाग होते हैं:
        </h5>
        {/* Noun */}
        {data.speech[0].nouns.map((item, index) => (
          <div className="mt-3">
            <h2 className="md:text-xl md:font-bold font-semibold hover:text-[#2699fb] mb-2">
              {index + 1 + " " + item.category}
            </h2>
            <p>
              {item.description}
              <br />
              {item.translation}
              <br />
              Example: {item.example.toUpperCase()}
              <br />
              उदाहरण: {item.hinExample}
            </p>
          </div>
        ))}
        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
      </div>
      {/* pronoun */}
      <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="md:text-3xl font-bold text-center hover:text-[#2699fb]">
          Pronoun (सर्वनाम)
        </h1>
        <p className="text-justify m-2">
          A pronoun is a part of speech that takes the place of a noun in a
          sentence. It's used to avoid repetition and make sentences less
          cumbersome. Pronouns can refer to people, places, things, or ideas.
        </p>
        <p className="text-justify m-2">
          सर्वनाम वाणी का वह भाग है जो वाक्य में संज्ञा का स्थान लेता है। इसका
          उपयोग पुनरावृत्ति से बचने और वाक्यों को कम बोझिल बनाने के लिए किया
          जाता है। सर्वनाम लोगों, स्थानों, चीज़ों या विचारों को संदर्भित कर सकते
          हैं।
        </p>
        <h5 className="">
          There are several types or parts of pronouns: <br />
          सर्वनाम के कई प्रकार या भाग होते हैं:
        </h5>
        {/* pronoun */}
        {data.speech[0].pronoun.map((item, index) => (
          <div className="mt-3">
            <h2 className="md:text-xl md:font-bold font-semibold hover:text-[#2699fb] mb-2">
              {index + 1 + " " + item.category}
            </h2>
            <p>
              {item.description}
              <br />
              {item.translation}
              <br />
              Example: {item.example.toUpperCase()}
              <br />
              उदाहरण: {item.hinExample}
            </p>
          </div>
        ))}
        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
      </div>
      {/* adjective */}
      <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="md:text-3xl font-bold text-center hover:text-[#2699fb]">
          Adjective (विशेषण)
        </h1>
        <p className="text-justify m-2">
          An adjective is a part of speech that modifies or describes a noun or
          pronoun. It gives more information about a noun (a person, place,
          thing, or idea) or a pronoun. Adjectives help us understand the
          qualities, characteristics, or features of the noun or pronoun they
          describe.
        </p>
        <p className="text-justify m-2">
          विशेषण भाषण का एक हिस्सा है जो संज्ञा या सर्वनाम को संशोधित या वर्णित
          करता है। यह किसी संज्ञा (किसी व्यक्ति, स्थान, चीज़ या विचार) या
          सर्वनाम के बारे में अधिक जानकारी देता है। विशेषण हमें उनके द्वारा
          वर्णित संज्ञा या सर्वनाम के गुणों, विशेषताओं या विशेषताओं को समझने में
          मदद करते हैं।
        </p>
        <h5 className="">
          There are 6 types or parts of adjectives: <br />
          विशेषण के 6 प्रकार या भाग होते हैं:
        </h5>
        {data.speech[0].adjective.map((item, index) => (
          <div className="mt-3">
            <h2 className="md:text-xl md:font-bold font-semibold hover:text-[#2699fb] mb-2">
              {index + 1 + " " + item.category}
            </h2>
            <p>
              {item.description}
              <br />
              {item.translation}
              <br />
              Example: {item.example.toUpperCase()}
              <br />
              उदाहरण: {item.hinExample}
            </p>
          </div>
        ))}
        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
      </div>
      {/* verb */}
      <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="md:text-3xl font-bold text-center hover:text-[#2699fb]">
          Verb (क्रिया)
        </h1>
        <p className="text-justify m-2">
          A verb is a word that expresses an action, occurrence, or state of
          being. In a sentence, a verb typically indicates what the subject is
          doing (action) or what is happening to the subject (occurrence or
          state of being). For example, in the sentence "She runs fast," "runs"
          is the verb, indicating the action performed by the subject "she."
          Verbs are central to constructing meaningful sentences in any
          language. They can also convey tense, aspect, mood, and voice.
        </p>
        <p className="text-justify m-2">
          क्रिया एक ऐसा शब्द है जो किसी क्रिया, घटना या होने की स्थिति को व्यक्त
          करता है। एक वाक्य में, एक क्रिया आमतौर पर इंगित करती है कि विषय क्या
          कर रहा है (क्रिया) या विषय के साथ क्या हो रहा है (घटना या होने की
          स्थिति)। उदाहरण के लिए, वाक्य में "वह तेज़ दौड़ती है," "दौड़ती है"
          क्रिया है, जो विषय "वह" द्वारा की गई क्रिया को दर्शाती है। किसी भी
          भाषा में सार्थक वाक्यों के निर्माण में क्रियाएँ केंद्रीय होती हैं। वे
          तनाव, पहलू, मनोदशा और आवाज भी व्यक्त कर सकते हैं।
        </p>
        <TableReact products={data.speech[0].verbs} />

        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
      </div>
      {/* adverb */}
      <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="md:text-3xl font-bold text-center hover:text-[#2699fb]">
          Adverb (क्रिया-विशेषण)
        </h1>
        <p className="text-justify m-2">
          An adverb is a word that modifies or describes a verb, adjective, or
          another adverb. Adverbs often provide information about the manner,
          place, time, frequency, degree, or certainty of an action or
          situation. They can answer questions such as how, when, where, why, or
          to what extent. Here are some examples of adverbs along with their
          usage:
        </p>
        <p className="text-justify m-2">
          क्रिया विशेषण एक ऐसा शब्द है जो क्रिया, विशेषण या किसी अन्य क्रिया
          विशेषण को संशोधित या वर्णित करता है। क्रियाविशेषण अक्सर किसी क्रिया या
          स्थिति के तरीके, स्थान, समय, आवृत्ति, डिग्री या निश्चितता के बारे में
          जानकारी प्रदान करते हैं। वे कैसे, कब, कहां, क्यों या किस हद तक जैसे
          सवालों का जवाब दे सकते हैं। यहां क्रियाविशेषणों के कुछ उदाहरण उनके
          उपयोग सहित दिए गए हैं:
        </p>
        {data.speech[0].adverb.map((item, index) => (
          <div className="mt-3">
            <h2 className="md:text-xl md:font-bold font-semibold hover:text-[#2699fb] mb-2">
              {index + 1 + " " + item.category}
            </h2>
            <p>
              <strong>{item.example1}</strong> ({item.hinExampl1}) <br />
              <strong>{item.example2}</strong> ({item.hinExampl2})
              <br />
              <strong>{item.example3}</strong> ({item.hinExampl3})
            </p>
          </div>
        ))}
        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
      </div>
      {/* Preposition */}
      <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="md:text-3xl font-bold text-center hover:text-[#2699fb]">
          Preposition (सम्बंध-सूचक)
        </h1>
        <p className="text-justify m-2">
          A preposition is a word that typically comes before a noun or pronoun
          and expresses a relationship to another word in a sentence.
          Prepositions usually indicate location, direction, time, or the
          relationship between two elements in a sentence.
        </p>
        <p className="text-justify m-2">
          प्रीपोज़िशन एक ऐसा शब्द है जो आम तौर पर संज्ञा या सर्वनाम से पहले आता
          है और एक वाक्य में दूसरे शब्द से संबंध व्यक्त करता है। प्रस्तावना
          आमतौर पर एक वाक्य में स्थान, दिशा, समय या दो तत्वों के बीच संबंध को
          इंगित करती है।
        </p>
        {data.speech[0].preposition.map((item, index) => (
          <div className="mt-3">
            <h2 className="md:text-xl md:font-bold font-semibold hover:text-[#2699fb] mb-2">
              {index + 1 + " " + item.category}
            </h2>
            <h3 className="text-md font-bold">
              {item.categoryExample}
              <br />
              Example :-
            </h3>
            <p>
              <strong>{item.example1}</strong> ({item.hinExampl1}) <br />
              <strong>{item.example2}</strong> ({item.hinExampl2})
              <br />
              <strong>{item.example3}</strong> ({item.hinExampl3})
            </p>
          </div>
        ))}
        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
      </div>
      {/* Conjuction */}
      <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="md:text-3xl font-bold text-center hover:text-[#2699fb]">
          Conjuction (संयोजक)
        </h1>
        <p className="text-justify m-2">
          A conjunction is a word that connects words, phrases, or clauses
          within a sentence. Conjunctions are used to show relationships between
          different elements and to join them together to create coherent and
          meaningful sentences. There are three main types of conjunctions:
        </p>
        <p className="text-justify m-2">
          समुच्चयबोधक एक ऐसा शब्द है जो एक वाक्य के भीतर शब्दों, वाक्यांशों या
          उपवाक्यों को जोड़ता है। संयोजकों का उपयोग विभिन्न तत्वों के बीच संबंध
          दिखाने और उन्हें एक साथ जोड़कर सुसंगत और सार्थक वाक्य बनाने के लिए
          किया जाता है। संयोजक के तीन मुख्य प्रकार हैं:
        </p>
        <div className="mt-3">
          <h2 className="md:text-xl font-bold hover:text-[#2699fb] mb-2">
            1 Coordinating Conjunctions:
          </h2>
          <h3 className="text-md font-bold">
            And (और), But (लेकिन), Or (या), Nor (नहीं), For (क्योंकि), So
            (ताकि), Yet (फिर भी).
            <br />
            Example :-
          </h3>
          <p className="">
            <strong>And:</strong> She likes to read and write. (वह पढ़ने और
            लिखने का शौक रखती है।)
            <br />
            <strong>But:</strong> He wants to go to the party, but he has too
            much work to do. (वह पार्टी में जाना चाहता है, लेकिन उसके पास करने
            के लिए बहुत सारा काम है।) <br />
            <strong>Or:</strong> Would you like tea or coffee? (आपको चाय या कॉफी
            चाहेंगे?)
            <br />
            <strong>So:</strong> It's raining, so we should take an umbrella.
            (बारिश हो रही है, इसलिए हमें छाता ले लेना चाहिए।)
            <br />
            <strong>Yet:</strong> He works hard, yet he never seems to get
            ahead. (वह कड़ी मेहनत करता है, फिर भी वह कभी आगे नहीं बढ़ पाता।)
          </p>
        </div>
        <div className="mt-3">
          <h2 className="md:text-xl font-bold hover:text-[#2699fb] mb-2">
            2 Subordinating Conjunctions:
          </h2>
          <h3 className="text-md font-bold">
            After (बाद), Although (हालांकि), As (क्योंकि), Because (क्योंकि),
            Before (से पहले), If (अगर), Since (क्योंकि), Though (हालांकि),
            Unless (जब तक), Until (तक), When (जब), Whenever (जब भी), Where
            (जहाँ), Wherever (जहाँ भी), While (जबकि).
            <br />
            Example :-
          </h3>
          <p className="">
            <strong>Because:</strong>She stayed home because it was raining.
            (बारिश होने के कारण वह घर पर ही रुकी रही।)
            <br />
            <strong>Although:</strong>Although it was cold, she didn't wear a
            coat. (हालाँकि ठंड थी, उसने कोट नहीं पहना था।)
            <br />
            <strong>If:</strong> I'll go to the store if you need anything. (अगर
            तुम्हें किसी चीज़ की ज़रूरत होगी तो मैं दुकान पर जाऊँगा।)
            <br />
            <strong>Since:</strong> She has been studying hard since she wants
            to pass the exam. (वह मेहनत से पढ़ रही है क्योंकि उसे परीक्षा में
            पास होना है।)
            <br />
            <strong>When:</strong>I'll call you when I arrive at the station.
            (स्टेशन पहुंचने पर मैं तुम्हें फोन करूंगा।)
          </p>
        </div>
        <div className="mt-3">
          <h2 className="md:text-xl font-bold hover:text-[#2699fb] mb-2">
            3 Correlative Conjunctions:
          </h2>
          <h3 className="text-md font-bold">
            Both...and (दोनों...और), Either...or (या तो...या), Neither...nor (न
            तो...न), Not only...but also (न केवल...बल्कि भी), Whether...or
            (क्या...या).
            <br />
            Example :-
          </h3>
          <p className="">
            <strong>Both...and:</strong>She is both smart and kind. (वह चतुर और
            दयालु दोनों है।) <br />
            <strong>Either...or:</strong>You can either come with us or stay
            here. (आप या तो हमारे साथ आ सकते हैं या रुक सकते हैं यहाँ।)
            <br />
            <strong>Neither...no:</strong> He is neither tall nor short. (वह न
            तो लंबा है और न ही छोटा.) <br />
            <strong>Not only...but also:</strong> She is not only a great singer
            but also a talented dancer. (वह न केवल एक बेहतरीन गायिका हैं बल्कि
            एक प्रतिभाशाली डांसर भी हैं।)
            <br />
            <strong>Whether...or:</strong> you like it or not, we have to go.
            (आपको यह पसंद है या नहीं, हमें जाना होगा।)
          </p>
        </div>
        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
      </div>
      {/* interjection */}
      <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="md:text-3xl font-bold text-center hover:text-[#2699fb]">
          Interjection (विस्मयादिबोधक शब्द)
        </h1>
        <p className="text-justify m-2">
          Interjections are words or phrases used to express emotions,
          sentiments, or sudden exclamations. They often stand alone or are
          followed by an exclamation mark to indicate strong feelings or
          reactions. Here are some examples of interjections:
        </p>
        <p className="text-justify m-2">
          Interjections केवल भावनाओं, भावनाओं, या अचानक की अभिव्यक्ति के लिए
          प्रयोग किए जाने वाले शब्द या वाक्यांश हैं। वे अक्सर अकेले खड़े होते
          हैं या अधिक भावनात्मक भावों या प्रतिक्रियाओं की चिह्नित करने के लिए
          विस्मयादिबोधक चिह्न के साथ आते हैं। यहां कुछ Interjections के उदाहरण
          हैं:
        </p>
        <div className="mt-3">
          <h3 className="text-md font-bold">
            Wow!: वाह! (Vah!) Ouch!: आउच! (Auch!) Oops!: ओहो! (Oho!) Hooray!:
            हुर्रे! (Hurrae!) Oh no!: अरे नहीं! (Arey nahin!) Yay!: ये! (Ye!)
            Ah!: आह! (Aah!) Phew!: फ्यू! (Phew!) Alas!: आह! (Aah!) Bravo!:
            ब्रावो! (Bravo!)
            <br />
            Example :-
          </h3>
          <p className="">
            <strong>Wow:</strong> Wow, that's incredible! (वाह! यह अद्भुत है!)
            <br />
            <strong>Ouch:</strong> Ouch, that hurt! (आउच! वह चोट लगी!) <br />
            <strong>Oops:</strong> Oops, I dropped my phone! (ओहो! मुझसे फोन गिर
            गया!)
            <br />
            <strong>Hooray:</strong> Hooray, we won the game! (हुर्रे! हमने खेल
            जीत लिया!)
            <br />
            <strong>Oh no:</strong> Oh no, I forgot my keys! (ओह नहीं! मुझे अपनी
            चाबियाँ भूल गई!)
            <br />
            <strong>Yay:</strong> Yay, it's finally Friday! (ये! यह आखिरकार
            शुक्रवार है!)
            <br />
            <strong>Ah:</strong> Ah, I see what you mean. (आह! मैं समझता हूँ तुम
            क्या कहना चाहते हो।)
            <br />
            <strong>Phew:</strong> Phew, that was a close call! (फ्यू! वह कुछ
            गम्भीर था!)
            <br />
            <strong>Alas:</strong> Alas, we missed the last train. (आह! हमने
            अंतिम ट्रेन को छूट दिया।)
            <br />
            <strong>Bravo:</strong> Bravo, what a performance! (ब्रावो! क्या
            प्रदर्शन है!)
          </p>
        </div>
        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
      </div>
      <Footer />
    </>
  );
};
export default Speech;
