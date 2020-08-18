import styled from "styled-components";

export const LinkText = styled.div`
   color: ${props => props.theme.colors.grey};
   font-size: ${props => props.theme.fonts.font14};
   font-weight: 600;
   text-decoration: none;
   text-align: ${props => props.align || "left"};
   padding: 10px;
   margin-right: 10px;

   &:hover {
        color: ${props => props.theme.colors.dark};
   }
`;

export const WhiteText14 = styled.div`
   color: ${props => props.theme.colors.white};
   font-size: ${props => props.theme.fonts.font14};
   text-align: ${props => props.align || "left"};
`;

export const DarkText14 = styled.div`
   color: ${props => props.theme.colors.dark};
   font-size: ${props => props.theme.fonts.font14};
   text-align: ${props => props.align || "left"};
`;

export const TitleText18 = styled.div`
   color: ${props => props.theme.colors.dark};
   font-size: ${props => props.theme.fonts.font18};
   text-align: ${props => props.align || "left"};
`;

export const BoldText44 = styled.div`
   color: ${props => props.theme.colors.dark};
   font-size: ${props => props.theme.fonts.font44};
   font-weight: 700;
   text-align: ${props => props.align || "left"};
`;