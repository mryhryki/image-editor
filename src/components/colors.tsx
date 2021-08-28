import React, { useEffect } from "react";
import styled from "styled-components";

const ColorsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`

const ColorSelector = styled.button`
  border: none;
  height: 24px;
  margin: 0 4px;
  position: relative;
  width: 24px;

  &.selected:after {
    border-color: white;
    border-style: solid;
    border-width: 0 0 4px 4px;
    content: " ";
    height: 6px;
    left: 4px;
    position: absolute;
    top: 5px;
    transform: rotate(-45deg);
    width: 12px;
  }
`;

const colors: string[] = [
  "#ff0000",
  "#EDAD0B",
  "#00993D",
  "#0066FF",
];

interface Props {
  color: string;
  setColor: (color: string) => void;
}

export const Colors: React.FC<Props> = (props) => {
  const { color, setColor } = props;

  useEffect(() => {
    if (!colors.includes(color)) {
      setColor(colors[0]);
    }
  }, [color]);

  return (
    <ColorsWrapper>
      {colors.map((c) => (
        <ColorSelector
          key={c}
          style={{ backgroundColor: c }}
          onClick={() => setColor(c)} className={c === color ? "selected" : ""}
        >
          {" "}
        </ColorSelector>
      ))}
    </ColorsWrapper>
  );
};
