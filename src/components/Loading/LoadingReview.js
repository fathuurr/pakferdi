import React from 'react';

export default function LoadingReview() {
  return (
    <div className="testimonial-box-container animate-pulse">
      <div className="testimonial-box">
        <div className="box-top">
          <div className="profile">
            <div className="rounded-full w-10 h-10 bg-gray-400"></div>
            <div className="name-user pl-3 ">
              <p className="w-[100px] h-2 rounded-xl bg-slate-400"></p>
              <span className="w-[180px] h-2 rounded-xl bg-slate-400 mt-2"></span>
            </div>
          </div>
        </div>
        <div className="client-comment">
          <p className="h-2 rounded-xl bg-slate-400 mt-2 "> </p>
          <p className="h-2 rounded-xl bg-slate-400 mt-2 "> </p>
        </div>
      </div>
    </div>
  );
}
