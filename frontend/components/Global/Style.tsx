import styled from "styled-components";
import { Box, Button, Flex } from "rebass";


export const Grid = styled(Box)`
    display: grid; 
    flex-wrap: wrap;
    grid-gap: 3px;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
`

export const PrimaryButton = styled(Button)`
    color: white;
    cursor: pointer;
    background-color: ${props => props.theme.colors.primary};
`

export const TestButton = styled(Button)`
    color: white;
    cursor: pointer;
    background-color: "red"
`

export const Secondary = styled(Button)`
    color: white;
    cursor: pointer;
    background-color: ${props => props.theme.colors.secondary};
`

export const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: contain;
`