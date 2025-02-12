import React from 'react'
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]'/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Forever is your one-stop destination for discovering a diverse range of fashion, accessories, and lifestyle products. We're dedicated to sourcing the finest materials and partnering with talented designers to bring you exceptional quality and craftsmanship. Whether you're searching for classic essentials, the latest trends, or unique statement pieces, we strive to offer something for everyone</p>
        <p>Our commitment to quality extends beyond our products to encompass every aspect of your shopping journey, ensuring a satisfying and memorable experience with every visit. We believe in providing value and building long-lasting relationships with our customers.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>At Forever, our mission is to curate a collection of timeless pieces that transcend fleeting trends, empowering individuals to express their unique style with enduring elegance. We strive to provide exceptional quality and craftsmanship, ensuring that each item becomes a cherished staple in our customers' wardrobes, reflecting their personal style for years to come.</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Forever's mission is to create a seamless and enjoyable shopping experience that exceeds customer expectations. We are dedicated to providing a curated selection of high-quality products, coupled with exceptional customer service and a commitment to building lasting relationships with our valued customers</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Our mission at Forever is to make timeless style accessible to everyone. We believe that everyone deserves to feel confident and beautiful, and we strive to offer a diverse range of high-quality products that cater to a variety of tastes and budgets</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Forever's mission is to provide our customers with high-quality, timeless fashion and an exceptional shopping experience. We are committed to curating a selection of enduring pieces that empower individuals to express their unique style with confidence.</p>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default About
