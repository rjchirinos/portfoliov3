import React from 'react';
import styled from "styled-components"
import useWindowDimensions from '../../utils/useWindowDimensions';
import { socialAccounts } from './socialAccounts';

const BoxContainer = styled.span`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    font-size: ${props => props.iconSize || (!props.isMedium ? "16px" : "14px")};
`
const IconContainer = styled.span`
    margin-bottom: ${props => props.direction === "column" && !props.last && (props.margin || (!props.isMedium ? "16px" : "14px"))};
    margin-right: ${props => props.direction !== "column" && !props.last && (props.margin || (!props.isMedium ? "16px" : "14px"))};
`

const SocialRow = ({ direction, iconSize, margin }) => {

    const { isMedium } = useWindowDimensions();

    const renderSocialAccounts = () => {
        return socialAccounts.map((account, index) => (
            <IconContainer isMedium={isMedium} direction={direction} margin={margin} last={index + 1 === socialAccounts.length} >
                <a className="row-icon" href={account.url}>{<account.icon />}</a>
            </IconContainer>
        ))
    }

    return (
        <div style={{ display: 'table-cell' }}>
            <BoxContainer isMedium={isMedium} direction={direction} iconSize={iconSize}>
                {renderSocialAccounts()}
            </BoxContainer>
        </div>
    );
}

export default SocialRow;