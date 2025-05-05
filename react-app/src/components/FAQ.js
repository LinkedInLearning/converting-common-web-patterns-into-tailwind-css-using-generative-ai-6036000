import React, { useState, useRef } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null);
      setHeight(0);
    } else {
      setOpenQuestion(index);
      setHeight(contentRef.current.scrollHeight);
    }
  };

  return (
    <section className="py-16 bg-brand">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { question: "What is your return policy?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros." },
            { question: "How do I track my order?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros." },
            { question: "Can I purchase items again?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sagittis eros." }
          ].map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3
                className="text-lg font-semibold mb-2 cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
              </h3>
              <div
                ref={contentRef}
                style={{
                  height: openQuestion === index ? `${height}px` : '0px',
                  overflow: 'hidden',
                  transition: 'height 0.3s ease',
                }}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
