import { gql } from "@apollo/client";
export const CREATE_BOARD_COMMENT = gql`
    Mutation createBoardComment(createBoardCommentInput:createBoardCommentInput! boardId:ID!){
        createBoardComment(createBoardCommentInput:$createBoardCommentInput, boardId: $boardId){
            _id
        }
    };
`;
