import React from "react";
import "./FAQPage.css";

/*List of frequently asked questions along with answers.*/
const faqs = [
  {
    question: "What is Drug Decider?",
    answer: "Drug Decider algorithms predict how a patient would have responded to different medications and placebo treatment in clinical trials.  By comparing these predictions, a patient can better understand how their unique demographics and symptom profiles may make them a better responder to some treatments than others."
  },
    {
    question: "How does it work?",
    answer: " Our current models are designed for Schizophrenia, but we are expanding to other disorders.  A clinician would evaluate a patient's symptoms using the PANSS (Positive and Negative Syndrome Scale).  Drug Decider statistical models first predict how a patient would have responded to a placebo intervention by creating a Placebo Quantified Response Score (PQRS), using Schizophrenia clinical trial databases.  The PQRS is that individual patient's expected placebo response, which captures general therapeutic effects associated with an intervention. The individual PANSS symptoms, the PQRS, and demographic information next predict a patient's individual response to active medications."
              },
              
  {
    question: "Is this reliable?",
    answer: "Drug Decider technology uses statistical models created on historical clinical trials.  Any predictions of medication response for new patients are meaningless without first being filtered through a licensed medical professional who can evaluate a patient holistically.  Artificial intelligence models are never a substitute for clinical care. Ask your doctor on how to best improve your treatment.  Never change or discontinue treatment withot your doctor's consultation."
  },
  {
    question: "Who makes Drug Decider?",
    answer: "Drug Decider is a research study originating out of Prof. Ariana Anderson’s laboratory at University of California, Los Angeles.  This research was brought to life through the work of DevX."
  },
  {
    question: "Who does Drug Decider help?",
    answer: "Drug Decider machine learning models are currently trained on historical clinical trials of 3,647 patients with Schizophrenia.  Our statistical models use the Placebo Quantified Response Score which first predicts a patients’ placebo risk, and then uses this risk to predict a patients’ medication response in a double-blind clinical trial.",
  },
  {
    question: "What about depression or other disorders?",
    answer: "We are expanding our statistical models to study major depressive disorder.  Because of the large number of patients needed to learn these complicated patterns, we will release models for new disorders- including antidepressants- after we have acquired enough patient records to make them reliable."
  },
  {
    question: "Who do I contact for more information?",
    answer: "For more information, please contact Professor Anderson at arianaanderson@mednet.ucla.edu"
  }
]

const text = faqs.map((question) =>
  <div style={{
    marginBottom: "35px",
    }}>
    <div className="faq-text">
    {question.question}
    </div>
    <div className="answer-text">
    {question.answer}
    </div>
  </div>
);

function FAQPage(){
  return(
    <div style={{
        padding: "0 40px 0 40px",
        marginBottom: "10vh"
      }}>
      <h1 style={{
          fontWeight: "400",
        }}>
        Frequently Asked Questions
        </h1>
      {text}
    </div>
  )
}
export default FAQPage;
