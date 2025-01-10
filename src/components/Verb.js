/** @format */

import React from "react";
import Header from "./Nav/Header";
import data from "../JsonData/Common.json";
import TableReact from "./Nav/customTable";
import Footer from "./Nav/Footer";

const Verb = () => {
  return (
    <>
      <Header />
      <div className="font-serif mt-[100px] p-6 border border-gray-200 m-10 bg-gray-200/20 rounded-md shadow-lg shadow-blue-500">
        <h1 className="md:text-5xl text-3xl text-center font-bold">
          Verb (क्रिया)
        </h1>
        <p className="p-2 md:text-xl text-justify font-serif">
          A verb is a word used to describe an action, state, or occurrence. It
          is one of the main parts of speech in English and is often considered
          the "doing" or "being" word in a sentence. Verbs can express actions
          (e.g., run, jump, eat), states of being (e.g., is, are, was), or
          occurrences (e.g., happen, occur, become). In English grammar, verbs
          can be conjugated to reflect different tenses, moods, voices, and
          forms to indicate when an action occurred, who performed the action,
          and other aspects of the action.
        </p>
        <p className="p-2 md:text-xl text-justify">
          क्रिया एक ऐसा शब्द है जिसका उपयोग किसी क्रिया, स्थिति या घटना का वर्णन
          करने के लिए किया जाता है। यह अंग्रेजी में भाषण के मुख्य भागों में से
          एक है और इसे अक्सर वाक्य में "करना" या "होना" शब्द माना जाता है।
          क्रियाएँ क्रियाओं को व्यक्त कर सकती हैं (उदाहरण के लिए, दौड़ना, कूदना,
          खाना), अस्तित्व की अवस्थाएँ (जैसे, है, हैं, था), या घटनाएँ (जैसे,
          घटित, घटित, बनना)। अंग्रेजी व्याकरण में, क्रियाओं को विभिन्न काल,
          मनोदशाओं, आवाजों और रूपों को प्रतिबिंबित करने के लिए संयुग्मित किया जा
          सकता है, जिससे यह पता चलता है कि कोई कार्रवाई कब हुई, किसने कार्रवाई
          की, और कार्रवाई के अन्य पहलुओं को दर्शाया जा सकता है।
        </p>
        <TableReact products={data.speech[0].verbs} />
        {/*         
        <div className="grid grid-cols-4 border text-center font-bold border-black p-2 mx-5">
          <div className="">Verb 1st Form <br />( क्रिया प्रथम रूप )</div>
          <div>English Meaning <br />( अंग्रेजी अर्थ )</div>
          <div>Verb 2nd Form <br />( क्रिया दूसरा रूप )</div>
          <div>Verb 3rd Form <br />( क्रिया तीसरा रूप )</div>
        </div>
        {verbData.verbs.map(item => (
            <div className="grid grid-cols-4 border text-center border-black p-2 mx-5">
            <div>{item.first_form}</div>
            <div>{item.hindi_meaning}</div>
            <div>{item.second_form}</div>
            <div>{item.third_form}</div>
            </div>
            ))} */}
      </div>
      <Footer />
    </>
  );
};
export default Verb;
