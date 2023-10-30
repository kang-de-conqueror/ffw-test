import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
    query getCurrentUser {
        whoAmI {
            id
            username
            name
        }
    }
`;
