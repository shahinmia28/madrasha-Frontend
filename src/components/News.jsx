import React from 'react';
import styled from 'styled-components';

const News = ({ noticeData }) => {
  const newsData = noticeData
    ? noticeData[noticeData.length - 1].noticeDescription
    : '';
  return (
    <Wrapper>
      <div className='news'>
        <div className='container'>
          <div className='data d-flex'>
            <h4 className='news-title'>ঘোষনা</h4>
            <marquee>
              <h4>{newsData}</h4>
            </marquee>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 10px 0;
  .news {
    .container {
      padding: 0;

      .data {
        .news-title {
          color: #ffffff;
          background: #062a4d;
          padding: 10px 30px;
          margin-bottom: 0rem;
        }
        marquee {
          background: #e8f3ff;
          margin-left: 10px;

          h4 {
            color: #062a4d;
            padding: 5px 20px;
            margin: 0 10px;
          }
        }
      }
    }
  }
`;
export default News;
