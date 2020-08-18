import styled from "styled-components";

const PageWrapper = styled.div`
   max-width: 1200px;
   margin: 20px auto 10px;

   @media only screen and (max-width: 1200px) {
      &{
         margin: 20px 20px 10px;
      }
   }
`;

export default  PageWrapper;