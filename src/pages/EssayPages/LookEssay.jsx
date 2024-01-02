import React, { useState } from "react";
import styled from "styled-components";
import Heart from "../../img/Heart.png";
import UnScrapImg from "../../img/UnScrap.png";
import ScrapImg from "../../img/Scrap.png";
import { useNavigate } from "react-router-dom";

const Main = styled.div`
  position : relative;
`
const TodayTopic = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  border: 3px solid #d5e4d8;
  width: 305px;
  height: 78px;
  margin: 111px 0 0 42px;
`;

const BorderLine = styled.div`
  border-bottom: 1px solid #6f6f6f;
  margin: 9px 0 0 45px;
  width: 254px;
`;


const TodayTopicTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

const OverlappingBox = styled.div`
  position: absolute;
  top: -10px;
  width: 78px;
  height: 22px;
  border-radius: 10px;
  background-color: #3e864d;
`;
const OverlappingText = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 0 0 0;
`;

const TopicTextBox = styled.div`
  width: 343px;
  height: 633px;
  border-radius: 15px;
  background-color: #d5e4d8;
  margin: 23px 0 0 23px;
`;

const TopicTitle = styled.div`
  border: none;
  border-bottom: 0px solid #6f6f6f;
  width: 254px;
  background-color: #d5e4d8;
  color: #000000;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 600;
  margin: 28px 0 0 45px;
  padding : 31px 0 0 0;
`;


const TopicText = styled.div`
  border: none;
  display : flex;
  background-color: #d5e4d8;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 500;
  margin: 19px 0 0 45px;
  width: 254px;
  height: 500px;
`;


const Writer = styled.div`
  color: #000;
  font-size: 10px;
  font-weight: 500;
  margin : 20px 0 0 252px;
`

const Emoji = styled.button`
  position: absolute;
  top: 142px;
  left: 299px;
  border: none;
  background-color: #d5e4d8;
`;

const EmojiBox = styled.div`
  position: absolute;
  top: 105px;
  left: 300px;
  width: 88px;
  height: 28px;
  border-radius: 10px;
  border: 1px solid #000;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

const EmojiButton = styled.button`
  position: relative;
  background-color: #fff;
  border-radius: 2000px;
  outline: none;
  border: none;
  width: 20px;
  height: 19px;
`;

const BottomContainer = styled.div`
  position: fixed;
  bottom : 28px;
  left : 34px;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  display : flex;
  align-items : center;
  justify-content : center;
`;

const ScrapBtn = styled.button`
  width: 134px;
  height: 50px;
  border-radius: 10px;
  background-color: #3e864d;
  border : none;
  
`;

const CloseBtn = styled.button`
  width: 174px;
  height: 50px;
  border-radius: 10px;
  background-color: #a4a4a4;
  border : none;
  margin : 0 0 0 12px;
`;

const ScrapImgs = styled.img`
  margin : 0 11.68px 0 0;
  width: 13.318px;
  height: 15.339px;
  
`;

export default function LookEssay() {
  const [isClicked, setIsCliked] = useState(false);
  const [selectEmoji, setSelectEmoji] = useState(Heart);
  const [isEmojiClicked, setIsEmojiClicked] = useState(false);
  const [isScrapClicked,setIsScrapClicked]=useState(false);
  const [textValue,setTextValue]=useState('');
  const [title,setTitle]=useState('제목 정하기')
  const [text,setText]=useState("자유롭게 오늘의 토픽에 대한 자신의 생각을 적어주세요")

  const emojiList = ["😭", "🤬", "🫢", "🥰"];
  const navigate= useNavigate();
  const handleScrapClicked = () => {
    setIsScrapClicked(!isScrapClicked);
    if(!isScrapClicked){

    }
    else{

    }
  }
  const handleEmojiClicked = () => {
    setIsCliked(!isClicked);
  };

  const handleEmoji = (emoji) => {
    if (emoji === "😭") {
      setSelectEmoji("😭");
    } else if (emoji === "🤬") {
      setSelectEmoji("🤬");
    } else if (emoji === "🫢") {
      setSelectEmoji("🫢");
    } else {
      setSelectEmoji("🥰");
    }
    setIsEmojiClicked(true);
    setIsCliked(!isClicked);
  };

  const onTextInput = (e) => {
    setTextValue(e.target.value);
    console.log(textValue);
  }
  const handleClose = () => {
    navigate("/")
  }
  return (
    <Main>
      <TodayTopic>
        <OverlappingBox>
          <OverlappingText>오늘의 토픽</OverlappingText>
        </OverlappingBox>
        <TodayTopicTitle>"오늘의 토픽 들어갈 자리"</TodayTopicTitle>
      </TodayTopic>
      <TopicTextBox>
        <Emoji>
          {isEmojiClicked ? (
            <div onClick={handleEmojiClicked}>{selectEmoji} </div>
          ) : (
            <img src={selectEmoji} onClick={handleEmojiClicked} alt="Emoji" />
          )}
        </Emoji>
        {isClicked && (
          <EmojiBox>
            {emojiList.map((emoji, index) => (
              <EmojiButton key={index} onClick={() => handleEmoji(emoji)}>
                {emoji}
              </EmojiButton>
            ))}
          </EmojiBox>
        )}
        <TopicTitle>{title}</TopicTitle>
        <BorderLine />
        <TopicText>{text}</TopicText>
        <Writer>글쓴이 | iooemg </Writer>
      </TopicTextBox>
      <BottomContainer>
        <ScrapBtn onClick={handleScrapClicked}>
          <ScrapImgs src={isScrapClicked ? ScrapImg :UnScrapImg} alt="Scrap" />스크랩 하기
          </ScrapBtn>
        <CloseBtn onClick={handleClose}>닫기</CloseBtn>
      </BottomContainer>
    </Main>
  );
}