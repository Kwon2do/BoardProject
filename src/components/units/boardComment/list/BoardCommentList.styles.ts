import styled from "@emotion/styled";
export const Wrapper = styled.div`
    width : 1200px;
    height : 272px;
  border: 1px solid black;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: left;
  border: none;
`;

export const Title = styled.div`
    display : flex;
`

export const Icon = styled.img`
    width:24px;
    height:24px;
    margin-right:10px;
`

export const Label = styled.label`
    font-size : 18px;
    font-weight: 500;
`

export const NewComment = styled.div``
export const Contents = styled.textarea`
    width:1200px;
    height:161px;
    align-items:right;
    min-height: 108px;
    border: none;
    border-bottom: 1px solid lightgray;
`
export const SubmitBtn = styled.button`
    font-size: 16px;
    text-align:center;
    font-weight: 500;
    color:white;
    background-color:black;
`