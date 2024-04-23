import React from "react"
import Header from "./Nav/Header";

const Speech = () => {
  return (
    <>
    <Header />
    <div className="font-serif mt-[100px] p-10 text-justify text-[#231f45]">
        <h1 className="text-5xl text-center font-bold">Parts of Speech (शब्दभेद)</h1>
        <p className="p-2 text-xl">
        A part of speech, also known as a word class or lexical category, is a linguistic category of words. It classifies words according to their syntactic and semantic functions within sentences. Common parts of speech include:
        </p>
        <p className="p-2 text-xl font-sans">
        भाषण का एक भाग, जिसे शब्द वर्ग या शाब्दिक श्रेणी के रूप में भी जाना जाता है, शब्दों की एक भाषाई श्रेणी है। यह वाक्यों के भीतर शब्दों को उनके वाक्य-विन्यास और अर्थ संबंधी कार्यों के अनुसार वर्गीकृत करता है। भाषण के सामान्य भागों में शामिल हैं:
        </p>
        <div className="grid grid-cols-4 text-cente p-2 gap-5 mx-5">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Noun (संज्ञा)</button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Pronoun (सर्वनाम)</button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Adjective (विशेषण)</button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Verb (क्रिया)</button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Adverb (क्रिया-विशेषण)</button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Preposition (सम्बंध-सूचक)</button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Conjuction (संयोजक)</button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">Interjection (विस्मयादिबोधक शब्द)</button>
        </div>
    </div>
    {/* noun */}
    <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="text-3xl font-bold text-center">Noun (संज्ञा)</h1>
        <p className="text-center m-2">A noun is a part of speech that names a person, place, thing, or idea. It's a fundamental building block of a sentence and often serves as the subject or object of a verb.</p>
        <p className="text-center m-2">संज्ञा वाणी का वह भाग है जो किसी व्यक्ति, स्थान, वस्तु या विचार का नाम बताता है। यह एक वाक्य का मूलभूत निर्माण खंड है और अक्सर क्रिया के विषय या वस्तु के रूप में कार्य करता है।</p>
        <h5 className=""><strong>There are several types or parts of nouns: <br />संज्ञा के कई प्रकार या भाग होते हैं: </strong></h5>
    {/* Noun */}
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Common Noun (सामान्य संज्ञा):-</h2>
          <p>These are general names for people, places, things, or ideas and are not capitalized unless they begin a sentence. <br /><strong>Example: dog, city, book, happiness </strong><br />
           ये लोगों, स्थानों, चीज़ों या विचारों के लिए सामान्य नाम हैं और इन्हें तब तक बड़े अक्षरों में नहीं लिखा जाता जब तक कि वे एक वाक्य शुरू न करें।
            <br /><strong>उदाहरण: कुत्ता, शहर, किताब, ख़ुशी </strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Proper Noun (विशेष संज्ञा):-</h2>
          <p>These are specific names for individual people, places, or things and are capitalized. <br /><strong>Example: John, Paris, The Great Gatsby</strong><br />
          ये अलग-अलग लोगों, स्थानों या चीज़ों के लिए विशिष्ट नाम हैं और बड़े अक्षरों में लिखे गए हैं।
            <br /><strong>उदाहरण: जॉन, पेरिस, द ग्रेट गैट्सबी</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Concrete Noun (सांकेतिक संज्ञा):-</h2>
          <p>These are nouns that represent physical objects that can be seen, heard, touched, tasted, or smelled.<br /><strong>Example: table, apple, car</strong><br />
          ये वे संज्ञाएं हैं जो भौतिक वस्तुओं का प्रतिनिधित्व करती हैं जिन्हें देखा, सुना, छुआ, चखा या सूंघा जा सकता है।
            <br /><strong>उदाहरण: टेबल, सेब, कार</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Abstract Noun (भाववाचक संज्ञा):-</h2>
          <p>These are nouns that represent ideas, qualities, or states rather than physical objects.<br /><strong>Example: love, courage, freedom</strong><br />
          ये वे संज्ञाएं हैं जो भौतिक वस्तुओं के बजाय विचारों, गुणों या अवस्थाओं का प्रतिनिधित्व करती हैं।
            <br /><strong>उदाहरण: प्रेम, साहस, स्वतंत्रता</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Countable Noun (गिनने योग्य संज्ञा):-</h2>
          <p>These are nouns that can be counted as individual units and can have both singular and plural forms.<br /><strong>Example: book (singular), books (plural)</strong><br />
          ये ऐसी संज्ञाएं हैं जिन्हें व्यक्तिगत इकाइयों के रूप में गिना जा सकता है और इनमें एकवचन और बहुवचन दोनों रूप हो सकते हैं।
            <br /><strong>उदाहरण: किताब (एकवचन), किताबें (बहुवचन)</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Uncountable Noun (अगिनने योग्य संज्ञा):-</h2>
          <p>These are nouns that cannot be counted as individual units and typically represent substances, concepts, or qualities.<br /><strong>Example: water, information, happiness</strong><br />
          ये ऐसी संज्ञाएं हैं जिन्हें व्यक्तिगत इकाइयों के रूप में नहीं गिना जा सकता है और ये आमतौर पर पदार्थों, अवधारणाओं या गुणों का प्रतिनिधित्व करती हैं।
            <br /><strong>उदाहरण: पानी, सूचना, ख़ुशी</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Collective Noun (समूह संज्ञा):-</h2>
          <p>These are nouns that refer to groups of people, animals, or things as a single entity.<br /><strong>Example: team, herd, family</strong><br />
          ये वे संज्ञाएं हैं जो लोगों, जानवरों या चीज़ों के समूह को एक इकाई के रूप में संदर्भित करती हैं।
            <br /><strong>उदाहरण: टीम, झुंड, परिवार</strong></p>
        </div>
        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
    </div>
    {/* pronoun */}
    <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="text-3xl font-bold text-center">Pronoun (सर्वनाम)</h1>
        <p className="text-center m-2">A pronoun is a part of speech that takes the place of a noun in a sentence. It's used to avoid repetition and make sentences less cumbersome. Pronouns can refer to people, places, things, or ideas.</p>
        <p className="text-center m-2">सर्वनाम वाणी का वह भाग है जो वाक्य में संज्ञा का स्थान लेता है। इसका उपयोग पुनरावृत्ति से बचने और वाक्यों को कम बोझिल बनाने के लिए किया जाता है। सर्वनाम लोगों, स्थानों, चीज़ों या विचारों को संदर्भित कर सकते हैं।</p>
        <h5 className=""><strong>There are several types or parts of pronouns: <br />सर्वनाम के कई प्रकार या भाग होते हैं: </strong></h5>
    {/* pronoun */}
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Personal Pronoun (सामान्य संज्ञा):-</h2>
          <p>These pronouns refer to specific people or things and change depending on their role in the sentence (subject, object, possessive).<br /><strong>Example: I, you, he, she, it, we, they </strong><br />
          ये सर्वनाम विशिष्ट लोगों या चीज़ों को संदर्भित करते हैं और वाक्य में उनकी भूमिका (विषय, वस्तु, स्वामित्व) के आधार पर बदलते हैं।
            <br /><strong>उदाहरण: मैं, तुम, वह, वह, यह, हम, वे </strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Possessive Pronoun (स्वामित्व सर्वनाम):-</h2>
          <p> These pronouns show ownership or possession.<br /><strong>Example: mine, yours, his, hers, its, ours, theirs</strong><br />
          ये सर्वनाम स्वामित्व या कब्ज़ा दर्शाते हैं।
            <br /><strong>उदाहरण: मेरा, तुम्हारा, उसका, उसका, उसका, हमारा, उनका</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Reflexive Pronoun (कर्मकर्त्ता सर्वनाम):-</h2>
          <p>These pronouns reflect back to the subject and are used when the subject and object of a sentence are the same.<br /><strong>Example: myself, yourself, himself, herself, itself, ourselves, yourselves, themselves</strong><br />
          ये सर्वनाम विषय को प्रतिबिंबित करते हैं और इनका उपयोग तब किया जाता है जब वाक्य का विषय और वस्तु समान होते हैं।
            <br /><strong>उदाहरण: मैं, स्वयं, स्वयं, स्वयं, स्वयं, स्वयं, आप ही</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Demonstrative Pronoun (संकेतवाचक सर्वनाम):-</h2>
          <p>These pronouns point to specific people or things and indicate their relative distance in space or time.<br /><strong>Example: this, that, these, those</strong><br />
          ये सर्वनाम विशिष्ट लोगों या चीज़ों की ओर संकेत करते हैं और स्थान या समय में उनकी सापेक्ष दूरी का संकेत देते हैं।
            <br /><strong>उदाहरण: यह, वह, ये, वो</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Relative Pronoun (सम्बंध सर्वनाम):-</h2>
          <p>These pronouns introduce relative clauses and connect them to the noun or pronoun they modify.<br /><strong>Example: who, whom, whose, which, that</strong><br />
          ये सर्वनाम सापेक्ष उपवाक्य प्रस्तुत करते हैं और उन्हें उस संज्ञा या सर्वनाम से जोड़ते हैं जिसे वे संशोधित करते हैं।
            <br /><strong>उदाहरण: कौन, किसको, किसका, कौन, वह</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Interrogative Pronoun (प्रश्नवाचक सर्वनाम):-</h2>
          <p>These pronouns are used to ask questions.<br /><strong>Example: who, whom, whose, which, what</strong><br />
          इन सर्वनामों का प्रयोग प्रश्न पूछने के लिए किया जाता है।
            <br /><strong>उदाहरण: कौन, किसका, किसका, कौन सा, क्या</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Indefinite Pronoun (अनिश्चितकालीन सर्वनाम):-</h2>
          <p> These pronouns refer to non-specific people or things.<br /><strong>Example: anybody, everyone, someone, nobody, anything, everything, something, nothing</strong><br />
          ये सर्वनाम गैर-विशिष्ट लोगों या चीज़ों को संदर्भित करते हैं।
            <br /><strong>उदाहरण: कोई भी, हर कोई, कोई, कोई नहीं, कुछ भी, सब कुछ, कुछ, कुछ नहीं</strong></p>
        </div>
        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
    </div>
    {/* adjective */}
    <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="text-3xl font-bold text-center">Adjective (विशेषण)</h1>
        <p className="text-center m-2">An adjective is a part of speech that modifies or describes a noun or pronoun.  It gives more information about a noun (a person, place, thing, or idea) or a pronoun. Adjectives help us understand the qualities, characteristics, or features of the noun or pronoun they describe.</p>
        <p className="text-center m-2">विशेषण भाषण का एक हिस्सा है जो संज्ञा या सर्वनाम को संशोधित या वर्णित करता है। यह किसी संज्ञा (किसी व्यक्ति, स्थान, चीज़ या विचार) या सर्वनाम के बारे में अधिक जानकारी देता है। विशेषण हमें उनके द्वारा वर्णित संज्ञा या सर्वनाम के गुणों, विशेषताओं या विशेषताओं को समझने में मदद करते हैं।</p>
        <h5 className=""><strong>There are 6 types or parts of adjectives: <br />विशेषण के 6 प्रकार या भाग होते हैं: </strong></h5>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Descriptive Adjectives (वर्णानात्मक विशेषण):-</h2>
          <p>These adjectives provide specific details about the qualities or characteristics of a noun.<br /><strong>Example: beautiful flowers, blue sky, tall building</strong><br />
          ये विशेषण किसी संज्ञा के गुणों या विशेषताओं के बारे में विशिष्ट विवरण प्रदान करते हैं।
            <br /><strong>उदाहरण: सुंदर फूल, नीला आकाश, ऊंची इमारत</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Quantitative Adjectives (मात्रात्मक विशेषण):-</h2>
          <p>These adjectives indicate the quantity or amount of a noun.<br /><strong>Example: three apples, many books, few people</strong><br />
          ये विशेषण संज्ञा की मात्रा या राशि का बोध कराते हैं।
            <br /><strong>उदाहरण: तीन सेब, ढेर सारी किताबें, कुछ लोग</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Demonstrative Adjectives (प्रदर्शनात्मक विशेषण):-</h2>
          <p>These adjectives point out or identify specific nouns.<br /><strong>Example: this book, that house, these cookies, those mountains</strong><br />
          ये विशेषण विशिष्ट संज्ञाओं की ओर संकेत करते हैं या उनकी पहचान कराते हैं।
            <br /><strong>उदाहरण: यह किताब, वह घर, ये कुकीज़, वो पहाड़</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Possessive Adjectives (संबंधवाचक विशेषण):-</h2>
          <p>These adjectives show ownership or possession.<br /><strong>Example: my car, your house, his book, our family, their cat</strong><br />
          ये विशेषण स्वामित्व या कब्ज़ा दर्शाते हैं।
            <br /><strong>उदाहरण: मेरी कार, आपका घर, उसकी किताब, हमारा परिवार, उनकी बिल्ली</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Interrogative Adjectives (प्रश्नवाचक विशेषण):-</h2>
          <p>These adjectives are used to ask questions about nouns.<br /><strong>Example: which book, what color, whose bag</strong><br />
          इन विशेषणों का प्रयोग संज्ञा के बारे में प्रश्न पूछने के लिए किया जाता है।
            <br /><strong>उदाहरण: कौन सी किताब, कौन सा रंग, किसका बैग</strong></p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold underline mb-2"># Comparative and Superlative Adjectives (तुलनात्मक और उच्चतम शिखर विशेषण):-</h2>
          <p>These adjectives are used to compare two or more things.<br /><strong>Example: taller than, more beautiful than, the tallest, the most beautiful</strong><br />
          इन विशेषणों का प्रयोग दो या दो से अधिक चीजों की तुलना करने के लिए किया जाता है।
            <br /><strong>उदाहरण: इससे ऊँचा, उससे भी अधिक सुन्दर, सबसे ऊँचा, सबसे सुन्दर</strong></p>
        </div>
        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
    </div>
    <div className="m-10 p-10 border border-gray-300 bg-gray-200 text-justify font-serif">
        <h1 className="text-3xl font-bold text-center">Verb (क्रिया)</h1>
        <p className="text-center m-2">A verb is a word that expresses an action, occurrence, or state of being. In a sentence, a verb typically indicates what the subject is doing (action) or what is happening to the subject (occurrence or state of being). For example, in the sentence "She runs fast," "runs" is the verb, indicating the action performed by the subject "she." Verbs are central to constructing meaningful sentences in any language. They can also convey tense, aspect, mood, and voice.</p>
        <p className="text-center m-2">
        क्रिया एक ऐसा शब्द है जो किसी क्रिया, घटना या होने की स्थिति को व्यक्त करता है। एक वाक्य में, एक क्रिया आमतौर पर इंगित करती है कि विषय क्या कर रहा है (क्रिया) या विषय के साथ क्या हो रहा है (घटना या होने की स्थिति)। उदाहरण के लिए, वाक्य में "वह तेज़ दौड़ती है," "दौड़ती है" क्रिया है, जो विषय "वह" द्वारा की गई क्रिया को दर्शाती है। किसी भी भाषा में सार्थक वाक्यों के निर्माण में क्रियाएँ केंद्रीय होती हैं। वे तनाव, पहलू, मनोदशा और आवाज भी व्यक्त कर सकते हैं।</p>
        <div className="grid grid-cols-1 bg-slate-400">
                <div className="border border-black p-2 font-bold uppercase">Examples</div> 
              </div>
              <div className="grid grid-cols-1">
                  <div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
                    <div className="col-span-2">Read: She reads novels every night before bed. (पढ़ना:: वह हर रात सोने से पहले उपन्यास पढ़ती है।)</div>
                    <div className="col-span-2">Swim: We swim in the lake during the summer. (तैरना: हम गर्मियों के दौरान झील में तैरते हैं।)</div>
                    <div className="col-span-2">Paint: He paints landscapes in his spare time. (रँगना:: वह अपने खाली समय में भूदृश्यों को चित्रित करता है।)</div>
                    <div className="col-span-2">Talk: They talk on the phone for hours. (बात करना:: वे घंटों फोन पर बात करते हैं।)</div>
                    <div className="col-span-2">Dance: The couple dances gracefully at the wedding. (नृत्य: जोड़े ने शादी में शानदार नृत्य किया।)</div>
                    <div className="col-span-2">Sleep: The baby sleeps peacefully in the crib. (नींद: बच्चा पालने में शांति से सोता है।)</div>
                    <div className="col-span-2">Play: The children play soccer in the park. (खेलना: बच्चे पार्क में फुटबॉल खेलते हैं।)</div>
                    <div className="col-span-2">Cook: She cooks dinner for her family every evening. (पकाना:: वह हर शाम अपने परिवार के लिए रात का खाना बनाती है।)</div>
                  </div> 
              </div>
            
            <div>For more verb you can go to <a href="/verb" className="font-bold text-red-500">Verbs</a> page</div>

        <hr class="h-[0.5px] my-8 bg-black border-0 rounded dark:bg-gray-700"></hr>
    </div>
    </>
  );
};
export default Speech;