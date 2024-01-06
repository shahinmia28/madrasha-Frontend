import { MdOutlineMailOutline } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';

import styled from 'styled-components';

const HeadTeachersSpeech = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row'>
          <div className='col col-12 col-lg-8'>
            <div className='data my-box' data-aos='fade-right'>
              <h2 className='title my-box'>প্রধান শিক্ষকের বাণী</h2>
              <p>
                বিশ্বের সবচেয়ে শক্তিশালী কুড়িটি অর্থনীতির জোট জি২০-র শীর্ষ
                সম্মেলনে যোগ দিতেই মি বাইডেন ভারতে গিয়েছিলেন। ওই সম্মেলনের
                অবকাশেই তিনি মি মোদীর সঙ্গে দ্বিপাক্ষিক বৈঠকও করেন। অবশ্য রবিবার
                (১০ সেপ্টেম্বর) সম্মেলন শেষ হওয়ার আগেই তিনি ভারত থেকে ভিয়েতনামের
                উদ্দেশে রওনা দেন। ভিয়েতনামের হ্যানয়ে একটি সাংবাদিক সম্মেলনেই
                প্রেসিডেন্ট বাইডেন ওই মন্তব্যটি করেন। সেখানে তিনি আরও জানান,
                ভারত-মার্কিন সম্পর্ককে কীভাবে আরও শক্তিশালী করে তোলা যায় তা নিয়ে
                মি মোদীর সঙ্গে তাঁর ‘বিশদ আলোচনা’ হয়েছে। এর আগে হোয়াইট হাউস
                সূত্রেও বলা হয়েছিল, দিল্লিতে মোদী-বাইডেন বৈঠকের পর আমেরিকার পক্ষ
                থেকে একটি যৌথ সাংবাদিক বৈঠক আয়োজনের অনুরোধ জানানো হলেও ভারত তাতে
                রাজি হয়নি। মার্কিন জাতীয় নিরাপত্তা উপদেষ্টা জেক সুলিভান আরও
                জানিয়েছিলেন যে তারা প্রেসিডেন্ট বাইডেন ও প্রধানমন্ত্রী মোদীর
                বৈঠকের সময় আনুষ্ঠানিক সাংবাদিক সম্মেলন না-হোক, অন্ততপক্ষে একটি
                ‘প্রেস
              </p>
            </div>
          </div>

          <div className='col col-12 col-lg-4'>
            <div className='cart my-box' data-aos='fade-left'>
              <div className='cart-img'>
                <img src='/image/head.jpg' alt='{data.img}' />
                <div className='plus'>
                  <i className='fa-solid fa-plus'></i>
                </div>
              </div>
              <div className='cart-title'>
                <div className='text'>
                  <h3>Mazharul Islam</h3>
                  <span className='sub-title'>Principle</span>

                  <div className='contact'>
                    <span>
                      <FiPhoneCall className='icon' /> 01915864575
                    </span>
                    <span>
                      <MdOutlineMailOutline className='icon' />
                      mazharulislam@gmail.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  width: 100%;
  background: #f6feff;
  padding: 50px 0;
  margin: 40px 0;
  .row {
    height: 100%;
    margin: auto;
    align-items: center;
    .data {
      height: 430px;
      margin: 20px 0;
      overflow: scroll;
      overflow-x: hidden;
      background: #fff;

      p {
        margin-top: 20px;
        padding: 20px;
        font-size: 17px;
        line-height: 1.7;
        letter-spacing: 0.5px;
      }
    }

    .cart {
      width: 100%;
      height: 430px;
      margin: 20px 0;
      transition: all 0.3s linear;
      position: relative;
      overflow: hidden;
      border-radius: 5px;
      &:hover {
        .cart-img {
          top: -30px;
          transform: scale(1.2);
          .plus {
            display: flex;
            i {
              margin-bottom: 100px;
            }
          }
        }
        .cart-title {
          height: 70%;
          .text {
            h3 {
              margin-top: 50px;
            }
          }
        }
      }
      .cart-img {
        width: 100%;
        height: 70%;
        background: #9bbd5c;
        position: absolute;
        top: 0;
        left: 0;
        transition: all 0.3s linear;
        z-index: 1;

        img {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .plus {
          position: absolute;
          top: 0px;
          left: 0;
          background: #062a4d7e;
          width: 100%;
          height: 100%;
          display: none;
          justify-content: center;
          align-items: center;
          transition: all 0.3s linear;
          i {
            font-size: 40px;
            z-index: 5;
            color: #b8df6e;
            font-weight: 100;
            transition: all 0.3s linear;
            &:hover {
              color: #cefd77;
            }
          }
        }
      }
      .cart-title {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30%;
        margin-top: 15px;
        background: #fff;
        z-index: 5;
        transition: all 0.3s ease-in;
        text-align: center;
        border-top: 10px solid #e5f3f4;
        .text {
          height: 70%;
          width: 70%;
          margin: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          h3 {
            color: #333;
            font-size: 20px;
            text-transform: capitalize;
            font-weight: 600;
            font-family: 'PT Serif', serif;
            margin: 0;
            margin-top: 120px;
            transition: all 0.3s linear;
          }
          .sub-title {
            color: #6ec1e4;
            font-size: 18px;
            padding: 8px;
          }

          .contact {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 15px;
            color: #6a6a6a;
          }
        }
      }
    }
  }
`;
export default HeadTeachersSpeech;
