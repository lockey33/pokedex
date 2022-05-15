import styled from "styled-components";
import { Image } from "../../Global/Style";
import { Box } from "rebass";

export const DetailImage = styled(Image)`
    width: 40%;
    margin-right: 2rem;
    @media (max-width: 994px){
        width: 100%;
    }

`

export const StyledDetails = styled(Box)`
    
    span{
        font-weight: bold;
    }

`