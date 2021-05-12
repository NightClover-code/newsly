//importing gql
import { gql } from '@apollo/client';

//mutations
export const uploadPhotoMutation = gql`
  mutation UploadPhoto($photo: String!) {
    uploadPhoto(photo: $photo)
  }
`;
