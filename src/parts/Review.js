import React, { useState, useEffect } from 'react';
import LoadingReview from '../components/Loading/LoadingReview';
import { review } from '../constant/data';

export default function Review() {
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <section id="review" className="container mx-auto mt-10">
      <div className="mx-4">
        <p className="text-base text-[#466FC1] font-bold leading-4" id="review">
          Review
        </p>
        <p className="font-normal text-[20px] leading-[30px] mt-3">
          Apa kata mereka tentang pijatin?
        </p>
      </div>

      <section id="testimonials" className="overflow-auto">
        {review.map((item) => {
          return Loading ? (
            <LoadingReview />
          ) : (
            <div className="testimonial-box-container">
              <div className="testimonial-box">
                <div className="box-top">
                  <div className="profile">
                    <div className="rounded-full w-10 h-10 bg-gray-600"></div>
                    <div className="name-user pl-3 ">
                      <p className="leading-[30px] font-medium">{item.name}</p>
                      <span> {item.status} </span>
                    </div>
                  </div>
                </div>
                <div className="client-comment">
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
}
