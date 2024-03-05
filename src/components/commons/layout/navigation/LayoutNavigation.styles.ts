import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 64px;
  background-color: #ffd600;
  justify-content: center;
  align-items: center;
`;

export const Group = styled.div`
  display: flex;
`;

export const MenuItem = styled.div`
  font-size: 18px;
  font-weight: 500;
  align-items: center;
  cursor: pointer;
  color: black;
  :hover {
    color: orange;
  }
`;
export const Line = styled.div`
  color: white;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`;
