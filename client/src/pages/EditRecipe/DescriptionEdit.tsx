import React, { useState, useEffect, useRef } from "react";
import useHover from "utils/useHover";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers";
import { resetEditPageEdit, goToPrevPageEdit } from "actions/EditRecipePage";
import { setDescription } from "actions/WriteRecipeContents";
import {
  BookContainer,
  Cover,
  FlipBook,
  FrontCoverImg,
  FrontCover,
  FrontCoverLogo,
  FrontCoverBack,
  FrontCoverFront,
  BackCover,
  BackCoverBack,
  BackCoverFront,
  PrevPageBtn,
  NextPageBtn,
  DescriptionSlide,
  NextButton,
  PrevButton,
  CompleteButton,
  ModalContainer,
  ModalBackground,
  ModalTitle,
  ModalBtn,
  ModalBtnNo,
} from "./styles";
import Page from "components/Book/Page";

const Description = ({
  page,
  scale,
  setCircle1IsHover,
  setCircle2IsHover,
}: any) => {
  const dispatch = useDispatch();
  const [circle1, circle1IsHover] = useHover();
  const [circle2, circle2IsHover] = useHover();
  const [description, setDescriptionPage] = useState<any>([""]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [modalOn, setModalOn] = useState<boolean>(false);
  const frontCoverRef = useRef<any>(null);
  const LoadedDescription = useSelector(
    (state: RootState) => state.EditRecipeContentsReducer.description
  );

  useEffect(() => {
    setDescriptionPage(LoadedDescription);
  }, []);

  useEffect(() => {
    currentPage < 0 && setCurrentPage(0);
  }, [currentPage]);

  useEffect(() => {
    if (circle2IsHover) setCircle2IsHover(true);
    else setCircle2IsHover(false);
  }, [circle2IsHover]);

  useEffect(() => {
    if (circle1IsHover) setCircle1IsHover(true);
    else setCircle1IsHover(false);
  }, [circle1IsHover]);

  const handleStoreIngredient = () => {
    dispatch(setDescription(description));
    dispatch(resetEditPageEdit());
    setModalOn(true);
  };

  useEffect(() => {
    if (currentPage > 0) {
      frontCoverRef.current.style.transform =
        "rotateY(-179deg) translateX(0.2em)";
      setTimeout(() => {
        frontCoverRef.current.style.zIndex = -1;
      }, 350);
    } else {
      frontCoverRef.current.style.transform = "rotateY(-1deg)";
      setTimeout(() => {
        frontCoverRef.current.style.zIndex = 99;
      }, 310);
    }
  }, [currentPage]);

  //다음 페이지가 있으면 새로 만들고 이전 페이지는 넘기기 없으면 이전 페이지 넘기기
  const handleCreateOrTurnPage = () => {
    if (description.length === currentPage) {
      setDescriptionPage([...description, ""]);
    }
    setCurrentPage(currentPage + 1);
  };

  const handleChangeDescription = (page: number, value: string): void => {
    let copiedDescription = description.slice();
    copiedDescription[page - 1] = value;
    setDescriptionPage(copiedDescription);
  };

  const handleSubmitRecipe = () => {};
  // const [img, setImg] = useState<any>({
  //   detailImageFile: null,
  //   detailImageUrl: null,
  // });

  // const setImageFromFile = (event: any) => {
  //   const {
  //     target: { files },
  //   } = event;
  //   let reader = new FileReader();
  //   reader.onload = function () {
  //     setImg({ result: reader.result });
  //   };
  //   reader.readAsDataURL(file);
  // };

  return (
    <>
      <DescriptionSlide page={page} scale={scale}>
        <BookContainer>
          <Cover></Cover>
          <FlipBook>
            <FrontCover ref={frontCoverRef}>
              <FrontCoverBack className="back">
                {/* <input
              type="file"
              id="detail_image"
              accept="image/*"
              onChange={({ target: { files } }) => {
                if (files.length) {
                  setImageFromFile({
                    file: files[0],
                    setImageUrl: ({ result }) => setState({detailImageFile: files[0], detailImageUrl: result});
                }
          }}
            ></input> */}
                {/* <UploadedImg src={fileUrl} alt="없는 이미지" /> */}
              </FrontCoverBack>
              <FrontCoverFront className="front">
                <FrontCoverImg src="/img/ingredient.png" />
                <div id="book-title">
                  <h2>레시피 순서를 작성해주세요</h2>
                </div>
                <FrontCoverLogo src="/img/BobpagoName.png" />
              </FrontCoverFront>
            </FrontCover>
            {description.map((el: any, i: number) => {
              return (
                <Page
                  currentPage={currentPage}
                  text={el}
                  key={i}
                  selfPage={i + 1}
                  handleChangeDescription={handleChangeDescription}
                />
              );
            })}
            <BackCover>
              <BackCoverBack className="back"></BackCoverBack>
              <BackCoverFront className="front"></BackCoverFront>
            </BackCover>
          </FlipBook>
        </BookContainer>
        <NextPageBtn onClick={() => handleCreateOrTurnPage()}>next</NextPageBtn>
        <PrevPageBtn onClick={() => setCurrentPage(currentPage - 1)}>
          prev
        </PrevPageBtn>
      </DescriptionSlide>
      <NextButton
        ref={circle2}
        page={page}
        self={3}
        onClick={() => handleStoreIngredient()}
      >
        Complete
      </NextButton>
      <PrevButton
        ref={circle1}
        page={page}
        onClick={() => dispatch(goToPrevPageEdit())}
      >
        Prev
      </PrevButton>
      {modalOn && (
        <>
          <ModalBackground onClick={() => setModalOn(false)} />
          <ModalContainer>
            <ModalTitle>글 작성을 완료하시겠습니까?</ModalTitle>
            <ModalBtn onClick={() => handleSubmitRecipe()}>네</ModalBtn>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <ModalBtnNo onClick={() => setModalOn(false)}>아니요</ModalBtnNo>
          </ModalContainer>
        </>
      )}
    </>
  );
};

export default Description;
