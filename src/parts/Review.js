import React from 'react';

export default function Review() {
  const data = [
    {
      text: 'Sangat mudah untuk memesan jasa ini serta  para massager melayani dan melakukan pijat secara profesional.',
      name: 'Siti Jaenab',
      status: 'Karyawati Swasta',
    },
    {
      text: 'Sangat puas dengan pelayanan yang diberikan, yang pijat pun sangat ramah dan baik.',
      name: 'Awaludin',
      status: 'Pekerja Keras',
    },
    {
      text: 'Baru pertama kali pesan jasa pijat ke rumah secara online, saya sangat puas dengan pelayanan nya. Pasti menggunakan jasa ini lagi!',
      name: 'Jubaedah',
      status: 'Ibu Rumah Tangga',
    },
  ];

  return (
    <section className="container mx-auto mt-10">
      <div className="mx-4">
        <p className="text-base text-[#466FC1] font-bold leading-4" id="review">Review</p>
        <p className="font-normal text-[20px] leading-[30px] mt-3">
          Apa kata mereka tentang pijatin?
        </p>
      </div>

      <section id="testimonials" className="overflow-auto">
        {data.map((item) => {
          return (
            <div class="testimonial-box-container">
              <div class="testimonial-box">
                <div class="box-top">
                  <div class="profile">
                    <div class="rounded-full w-10 h-10 bg-gray-600"></div>
                    <div class="name-user pl-3 ">
                      <p className="leading-[30px] font-medium">{item.name}</p>
                      <span> {item.status} </span>
                    </div>
                  </div>
                </div>
                <div class="client-comment">
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
