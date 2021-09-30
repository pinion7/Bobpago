import React, { useState, useEffect, useRef } from "react";
import SearchBar from "components/SearchBar/SearchBar";
import Book from "components/Book/Book";
import Nav from "components/Nav/Nav";
import Title from "./Title";
import Time from "./Time";
import Ingredient from "./Ingredient";
import Description from "./Description";
import Circle1 from "components/MovingCircle/WriteRecipe/WriteRecipeCircle1";
import Circle2 from "components/MovingCircle/WriteRecipe/WriteRecipeCircle2";
import { ContainerWrapper } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "reducers";
import {
  goToNextPage,
  goToPrevPage,
  resetWritePage,
} from "actions/WriteRecipePage";
import { resetAllContents } from "actions/WriteRecipeContents";
const WriteRecipe = () => {
  const [circle1IsHover, setCircle1IsHover] = useState<boolean>(false);
  const [circle2IsHover, setCircle2IsHover] = useState<boolean>(false);
  const dispatch = useDispatch();
  const page = useSelector(
    (state: RootState) => state.WriteRecipePageReducer.currentPage
  );
  const [scale, setScale] = useState<number>(0);

  useEffect(() => {
    return () => {
      dispatch(resetWritePage());
      dispatch(resetAllContents());
    };
  }, []);

  useEffect(() => {
    page < 0 && dispatch(goToNextPage());
    page > 3 && dispatch(goToPrevPage());
    setTimeout(() => setScale(page), 700);
  }, [page]);

  return (
    <>
      <Nav opac={true} />
      <ContainerWrapper>
        <Title
          setCircle1IsHover={setCircle1IsHover}
          setCircle2IsHover={setCircle2IsHover}
          page={page}
          scale={scale}
        />
        <Time
          setCircle1IsHover={setCircle1IsHover}
          setCircle2IsHover={setCircle2IsHover}
          page={page - 1}
          scale={scale - 1}
        />
        <Ingredient
          setCircle1IsHover={setCircle1IsHover}
          setCircle2IsHover={setCircle2IsHover}
          page={page - 2}
          scale={scale - 2}
        />
        <Description
          setCircle1IsHover={setCircle1IsHover}
          setCircle2IsHover={setCircle2IsHover}
          page={page - 3}
          scale={scale - 3}
        />
        <Circle1 circle1IsHover={circle1IsHover} />
        <Circle2 circle2IsHover={circle2IsHover} />
      </ContainerWrapper>
    </>
  );
};

export default WriteRecipe;
