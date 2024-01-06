import React from "react";
import styled from "styled-components";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

function DraggableBlocksList() {
  const BlocksList = [
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
  ];
  const Title = styled.p`
    font-size: 2rem;
    font-weight: 600;
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
    gap: 2rem;
    align-items: center;
    font-size: 2rem;
  `;
  const Block = styled.div`
    width: 10rem;
    height: 5rem;
    box-shadow: inset 0px 0px 14px -4px rgba(66, 68, 90, 1);
    background: radial-gradient(circle at top left, rgba(255, 255, 255, 1) -90%, ${(props) => props.bgColor} 100%);
    background-position: -20% -10%;
    font-size: 1.8rem;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
  return (
    <>
      <Title>Draggable Blocks List</Title>
      <List>
        {BlocksList.map((block) => (
          <BlockWrapper key={block.num}>
            <Button>
              <FaArrowDown />
            </Button>
            <Block bgColor={block.color}>{block.num}</Block>
            <Button>
              <FaArrowUp />
            </Button>
          </BlockWrapper>
        ))}
      </List>
    </>
  );
}

export default DraggableBlocksList;
