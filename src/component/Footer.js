import React from 'react'
import styled from "styled-components";
import { WhiteText14 } from './Fonts';

const FooterWrapper = styled.div`
  background-color: ${props => props.theme.colors.footer};
  padding: 20px 0;
`;

const Footer = props => {
    return (
        <FooterWrapper>
            <WhiteText14 align="center">
                coding problem - www.geektrust.in/finding-falcone
            </WhiteText14>
        </FooterWrapper>
    )
}

Footer.propTypes = {

}

export default Footer
