import React, { useRef, useState } from "react";
import styled from "styled-components";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Title = styled.h2`
  text-align: center;
  font-family: "Courier New", Courier, monospace;
`;
const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const BlockWrapper = styled.div`
  display: flex;
  position: relative;
  gap: 2rem;
  align-items: center;
  font-size: 2rem;
  cursor: grab;
  &.animationUp {
    transform: translateY(-120%);
    transition-duration: 0.3s;
  }
  &.animationDown {
    transform: translateY(120%);
    transition-duration: 0.3s;
  }
`;
const Block = styled.div`
  width: 10rem;
  height: 5rem;
  box-shadow: inset 0px 0px 8px -4px rgba(66, 68, 90, 1);
  background: radial-gradient(circle at top left, rgba(255, 255, 255, 1) -90%, ${(props) => props.$bgColor} 100%);
  background-position: -20% -10%;
  font-size: 1.8rem;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  border-radius: 0.2rem;
  &:hover {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  &:active {
    transform: scale(0.97);
  }
`;
const Button = styled.button`
  all: unset;
  cursor: pointer;
  &:hover {
    transform: scale(1.08);
  }
  &:active {
    transform: scale(0.9);
  }
`;
function DraggableBlocksList() {
  const [animationUp, setAnimationUp] = useState(-1);
  const [animationDown, setAnimationDown] = useState(-1);
  const dragBlockNode = useRef();
  const dragOverBlockNode = useRef();
  const [BlocksList, setBlockList] = useState([
    { num: 1, color: "#FF6347" }, // Tomato
    { num: 2, color: "#FFD700" }, // Gold
    { num: 3, color: "#FF69B4" }, // HotPink
    { num: 4, color: "#00FF7F" }, // SpringGreen
    { num: 5, color: "#00BFFF" }, // DeepSkyBlue
    { num: 6, color: "#FF8C00" }, // DarkOrange
    { num: 7, color: "#8A2BE2" }, // BlueViolet
    { num: 8, color: "#32CD32" }, // LimeGreen
    { num: 9, color: "#FF1493" }, // DeepPink
    { num: 10, color: "#9370DB" }, // MediumPurple
  ]);

  function swapPlace(blockIndex, newBlockIndex) {
    setAnimationDown(-1);
    setAnimationUp(-1);
    if (blockIndex === newBlockIndex) return;
    setBlockList((prevList) => {
      const newList = [...prevList];
      const [deletedItem] = newList.splice(blockIndex, 1);
      newList.splice(newBlockIndex, 0, deletedItem);

      return newList;
    });
  }
  function onDragStart(e) {
    dragBlockNode.current = e.target;
  }
  function onDragEnter(e) {
    dragOverBlockNode.current = e.currentTarget;
    const blockIndex = BlocksList.findIndex((item) => +dragBlockNode.current.id === item.num);
    const newBlockIndex = BlocksList.findIndex((item) => +dragOverBlockNode.current.id === item.num);
    swapPlace(blockIndex, newBlockIndex);
  }
  function moveUp(block) {
    const blockIndex = BlocksList.indexOf(block);
    if (blockIndex === 0) return;
    setAnimationUp(blockIndex);
    setAnimationDown(blockIndex - 1);
    setTimeout(() => swapPlace(blockIndex, blockIndex - 1), 300);
  }
  function moveDown(block) {
    const blockIndex = BlocksList.indexOf(block);
    if (blockIndex === BlocksList.length - 1) return;
    setAnimationUp(blockIndex + 1);
    setAnimationDown(blockIndex);
    setTimeout(() => swapPlace(blockIndex + 1, blockIndex), 300);
  }
  return (
    <div>
      <Title>
        Draggable Blocks List <br></br>(Draggable attribute)
      </Title>
      <List>
        {BlocksList.map((block, index) => (
          <BlockWrapper
            id={block.num}
            key={block.num}
            data-index={index}
            onDragStart={(e) => onDragStart(e)}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => onDragEnter(e)}
            draggable
            className={`${animationDown === index ? "animationDown " : ""}${
              animationUp === index ? "animationUp" : ""
            }`}
          >
            <Button onClick={(e) => moveDown(block)}>
              <FaArrowDown />
            </Button>
            <Block $bgColor={block.color}>{block.num}</Block>
            <Button onClick={(e) => moveUp(block)}>
              <FaArrowUp />
            </Button>
          </BlockWrapper>
        ))}
      </List>
    </div>
  );
}

export default DraggableBlocksList;
