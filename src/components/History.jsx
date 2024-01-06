import styled from 'styled-components';

const History = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div className='row history'>
          <div className='col col-12 col-lg-4 '>
            <img src='/image/history.jpg' className='my-box' alt='history' />
          </div>
          <div className='col col-12 col-lg-8'>
            <div className='data my-box' data-aos='fade-right'>
              <h2 className='title my-box'> প্রতিষ্ঠানের ইতিহাস</h2>
              <p>
                সম্মেলন শেষ হওয়ার আগেই তিনি ভারত থেকে ভিয়েতনামের উদ্দেশে রওনা
                দেন। ভিয়েতনামের হ্যানয়ে একটি সাংবাদিক সম্মেলনেই প্রেসিডেন্ট
                বাইডেন ওই মন্তব্যটি করেন। সেখানে তিনি আরও জানান, ভারত-মার্কিন
                সম্পর্ককে কীভাবে আরও শক্তিশালী করে তোলা যায় তা নিয়ে মি মোদীর
                সঙ্গে তাঁর ‘বিশদ আলোচনা’ হয়েছে। এর আগে হোয়াইট হাউস সূত্রেও বলা
                হয়েছিল, দিল্লিতে মোদী-বাইডেন বৈঠকের পর আমেরিকার পক্ষ থেকে একটি
                যৌথ সাংবাদিক বৈঠক আয়োজনের অনুরোধ জানানো হলেও ভারত তাতে রাজি
                হয়নি। মার্কিন বৈঠক আয়োজনের অনুরোধ জানানো হলেও ভারত তাতে রাজি
                হয়নি।
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  margin: 30px 0;
  .history {
    display: flex;
    justify-content: space-between;
    .col {
      img {
        height: 300px;
        width: 100%;
        margin: 20px 0;
      }
      .data {
        height: 300px;
        margin: 20px 0;
        overflow: scroll;
        overflow-x: hidden;
        p {
          margin-top: 20px;
          padding: 20px;
          padding-bottom: 10px;
          font-size: 17px;
          line-height: 1.7;
          letter-spacing: 0.5px;
        }
      }
    }
  }
`;
export default History;
