import React from "react"
import Header from "./Nav/Header";

const Tenses = () => {
  return (
    <>
    <Header />
    <div className="font-serif mt-[100px] p-10">
        <h1 className="text-5xl text-center font-bold">Tenses (काल)</h1>
        <p className="p-2 text-xl">
        Tenses refer to the grammatical structures in languages that indicate the time at which an action or state of being occurs. They help to establish the timing of events or actions in relation to the present, past, or future. Tenses are an integral part of language syntax and are used to convey information about when something happens, happened, or will happen. They allow speakers and writers to provide clarity and context to their communication. In English and many other languages, tenses are often categorized into different forms such as simple, continuous, perfect, and perfect continuous, each serving specific purposes in expressing time-related information.
        </p>
        <p className="p-2 text-xl">
        काल भाषाओं में व्याकरणिक संरचनाओं को संदर्भित करता है जो उस समय को इंगित करता है जब कोई क्रिया या होने की स्थिति होती है। वे वर्तमान, अतीत या भविष्य के संबंध में घटनाओं या कार्यों का समय स्थापित करने में मदद करते हैं। काल भाषा वाक्यविन्यास का एक अभिन्न अंग हैं और इसका उपयोग इस बारे में जानकारी देने के लिए किया जाता है कि कब कुछ होता है, हुआ है, या होगा। वे वक्ताओं और लेखकों को अपने संचार में स्पष्टता और संदर्भ प्रदान करने की अनुमति देते हैं। अंग्रेजी और कई अन्य भाषाओं में, काल को अक्सर विभिन्न रूपों में वर्गीकृत किया जाता है जैसे कि सरल, निरंतर, पूर्ण और पूर्ण निरंतर, प्रत्येक समय-संबंधी जानकारी व्यक्त करने में विशिष्ट उद्देश्यों की पूर्ति करता है।
        </p>
        <p className="mt-5 p-2">
        Tenses are typically categorized into three main types: past, present, and future. Within these categories, there are various forms or aspects of tenses. Here's a breakdown of the types of tenses: <br />
        (काल को आम तौर पर तीन मुख्य प्रकारों में वर्गीकृत किया जाता है: अतीत, वर्तमान और भविष्य। इन श्रेणियों के अंतर्गत काल के विभिन्न रूप या पहलू होते हैं। यहां काल के प्रकारों का विवरण दिया गया है:)
        </p>
        <div className="grid grid-cols-1 border text-center text-2xl mt-2 border-black p-2 mx-5 bg-slate-400 font-bold">
          <div>Type of Tenses <br />(काल के प्रकार)</div>
        </div>
        <div className="grid grid-cols-3 border text-center border-black p-2 mx-5">
          <div className="p-2 font-bold">Past Tense (भूतकाल)</div>
          <div className="p-2 font-bold">Present Tense (वर्तमान - काल)</div>
          <div className="p-2 font-bold">Future Tense (भविष्यकाल)</div>
        </div>
        <div className="grid grid-cols-3 text-center border border-black p-2 mx-5">
        <div className="col-span-1">
          <div className="grid gap-3">
            <div>Simple Past Tense (सरल भूतकाल)</div>
            <div>Past Continuous Tense (भूत अपूर्ण काल)</div>
            <div>Past Perfect Tense(पूर्ण भूत काल)</div>
            <div>Past Perfect Continuous Tense (भूतकाल पूर्ण सतत काल)</div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid gap-3">
            <div>Simple Present Tense (साधारण वर्तमान काल)</div>
            <div>Present Continuous Tense (वर्तमान निरंतर काल)</div>
            <div>Present Perfect Tense (वर्तमान पूर्ण काल)</div>
            <div>Present Perfect Continuous Tense (वर्तमान पूर्ण सतत काल)</div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid gap-3">
            <div>Simple Future Tense (सरल भविष्य काल)</div>
            <div>Future Continuous (भविष्य सतत काल)</div>
            <div>Future Perfect Tense (भविष्य पूर्ण काल)</div>
            <div>Future Perfect Continuous Tense (भविष्य पूर्ण सतत काल)</div>
          </div>
        </div>
      </div>
    </div>
    <div className="m-10 text-center bg-gray-200">
      <h1 className="font-bold text-2xl underline p-5">Singular and Plural</h1>
      <div className="grid grid-cols-3 bg-slate-400">
        <div className="col-span-1 border border-black font-bold text-xl p-3">Person</div>
        <div className="col-span-1 font-bold border border-black text-xl p-3">Singular</div>
        <div className="col-span-1 font-bold border border-black text-xl p-3">Plural</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1 border border-black font-bold">1st Person</div>
        <div className="col-span-1 font-bold border border-black p-3">I (मैं)</div>
        <div className="col-span-1 font-bold border border-black p-3">We (हम)</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1 border border-black font-bold">2nd Person</div>
        <div className="col-span-1 font-bold border border-black p-3">You (तु)</div>
        <div className="col-span-1 font-bold border border-black p-3">You (तुम, आप)</div>
      </div>
      <div className="grid grid-cols-3">
        <div className="col-span-1 border border-black font-bold">3rd Person</div>
        <div className="col-span-1 font-bold border border-black p-3">He, She, it, Ram (वह, वह, यह, राम)</div>
        <div className="col-span-1 font-bold border border-black p-3">They, Govind and Harshit (वे, गोविंद और हर्षित)</div>
      </div>
    </div>
    <div className="m-10 p-10 border border-gray-300 bg-gray-200">
      <h1 className="text-3xl font-bold text-center">Past Tense (भूतकाल)</h1>
      <p className="text-center m-2">Past tense is a grammatical form used to indicate actions, events, or states that have already occurred or happened in the past. In English grammar, verbs can be conjugated to express past tense. The past tense form of regular verbs is typically formed by adding "-ed" to the base form of the verb (e.g., walked, talked, played), while irregular verbs have unique past tense forms (e.g., went, ate, saw).</p>
      <p className="text-center m-2">भूतकाल एक व्याकरणिक रूप है जिसका उपयोग उन कार्यों, घटनाओं या अवस्थाओं को इंगित करने के लिए किया जाता है जो पहले ही घटित हो चुके हैं या अतीत में घटित हो चुके हैं। अंग्रेजी व्याकरण में, क्रियाओं को भूतकाल को व्यक्त करने के लिए संयोजित किया जा सकता है। नियमित क्रियाओं का भूतकाल रूप आमतौर पर क्रिया के आधार रूप में "-ed" जोड़कर बनता है (जैसे, चला, बात की, खेला), जबकि अनियमित क्रियाओं के अद्वितीय भूतकाल रूप होते हैं (जैसे, गया, खाया, देखा) .</p>
      
      <h2 className="text-2xl font-bold underline">1. Simple Past Tense (सरल भूतकाल) </h2>
      <p>In this tense, the auxiliary verbs "गया" (gaya), "लिया" (liya), "दिया" (diya), "सोया" (soya), "दी" (di), "ली" (li), "की" (ki), etc. are used with the main verb. In this tense, "है" (hai), "हैं" (hain), "हो" (ho), "हूँ" (hoon) or "था" (tha), "थे" (the), "थी" (thi) are never used. <br />
      इस काल में सहायक क्रिया "गया" (गया), "लिया" (लिया), "दिया" (दीया), "सोया" (सोया), "दी" (दी), "ली" (ली), " मुख्य क्रिया के साथ की" (की) आदि का प्रयोग किया जाता है। इस काल में, "है" (है), "हैं" (हैं), "हो" (हो), "हूं" (हूं) या "था" (था), "थे" (द), "थी" ( थी) का कभी भी उपयोग नहीं किया जाता है।
      </p>
      <div className="grid grid-cols-2 gap-10 mt-5">
        <div className="cols-span-1 text-center">
          <h4 className="font-bold">1. Affirmative (सकारात्मक वाक्य) </h4>
          <div className="font-bold">Rule: - Subject + 2nd form verb + Object</div>

          <div className="grid grid-cols-1 bg-slate-400">
            <div className="border border-black p-2 font-bold uppercase">Examples</div> 
          </div>
          <div className="grid grid-cols-1">
              <div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
                <div className="col-span-2">She wrote a letter. (उसने एक ख़त लिखी।)</div>
                <div className="col-span-2">Govind ate an apple. (गोविंद ने एक सेब खाया)</div>
                <div className="col-span-2">I slept at 9. (वे 9 बजे सोये)</div>
                <div className="col-span-2">we loved him/her (मैंने उसे प्यार किया।)</div>
                <div className="col-span-2">He/she made a mistake. (उसने गलती की)</div>
              </div> 
          </div>
        </div>
        <div className="cols-span-1 text-center">
          <h4 className="font-bold">2. Negative (नकारात्म  क वाक्य) </h4>
          <div className="font-bold">Rule: Subject + did not + verb 1st form + object.</div>

          <div className="grid grid-cols-1 bg-slate-400">
            <div className="border border-black p-2 font-bold uppercase">Examples</div> 
          </div>
          <div className="grid grid-cols-1">
              <div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
                <div className="col-span-2">She did not write a letter. (उसने कोई ख़त नहीं लिखी।)</div>
                <div className="col-span-2">Govind did not eat an apple.(गोविंद ने एक सेब नहीं खाया)</div>
                <div className="col-span-2">I did not sleep at 9. (मैं 9 बजे सोया नहीं)</div>
                <div className="col-span-2">I did not love him/her. (मैंने उसे प्यार नहीं किया।)</div>
                <div className="col-span-2">He/she did not make a mistake. (उसने कोई गलती नहीं की।)</div>
              </div> 
          </div>
        </div>
        <div className="cols-span-1 text-center">
          <h4 className="font-bold">Interrogative (प्रश्नवाचक वाक्य)</h4>
          <div className="font-bold">Rule: + did + subject + verb 1st form + object</div>

          <div className="grid grid-cols-1 bg-slate-400">
            <div className="border border-black p-2 font-bold uppercase">Examples</div> 
          </div>
          <div className="grid grid-cols-1">
              <div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
                <div className="col-span-2">Did she write a letter? (क्या उसने कोई पत्र लिखा?)</div>
                <div className="col-span-2"> Did Govind eat an apple? (क्या गोविंद ने सेब खाया?)</div>
                <div className="col-span-2">Did I sleep at 9? (क्या मैं 9 बजे सो गया?)</div>
                <div className="col-span-2">Did I love him/her (क्या मैंने उसे प्यार?)</div>
                <div className="col-span-2">Did he/she make a mistake? (क्या उसने कोई गलती की है?)</div>
              </div> 
          </div>
        </div>
        <div className="cols-span-1 text-center">
          <h4 className="font-bold">Negative Interrogative (नकारात्मक प्रश्नवाचक वाक्य)</h4>
          <div className="font-bold">Rule:   + Did + Subject + not + Verb 1st form + Object</div>

          <div className="grid grid-cols-1 bg-slate-400">
            <div className="border border-black p-2 font-bold uppercase">Examples</div> 
          </div>
          <div className="grid grid-cols-1">
              <div className="grid grid-cols-2 grid-rows-2 border border-black p-2">
              <div className="col-span-2">Did she write a letter? (क्या उसने कोई पत्र लिखा?)</div>
                <div className="col-span-2"> Did Govind eat an apple? (क्या गोविंद ने सेब खाया?)</div>
                <div className="col-span-2">Did I sleep at 9? (क्या मैं 9 बजे सो गया?)</div>
                <div className="col-span-2">Did I love him/her (क्या मैंने उसे प्यार?)</div>
                <div className="col-span-2">Did he/she make a mistake? (क्या उसने कोई गलती की है?)</div>
              </div> 
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Tenses;