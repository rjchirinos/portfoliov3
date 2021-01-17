import React from 'react';
import styled from "styled-components"
import { socialAccounts } from './socialAccounts';

const BoxContainer = styled.span`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    font-size: ${props => props.iconSize || "16px"};
`
const IconContainer = styled.span`
    margin-bottom: ${props => props.direction === "column" && !props.last && (props.margin || "16px")};
    margin-right: ${props => props.direction !== "column" && !props.last && (props.margin || "16px")};
`

const SocialRow = ({ direction, iconSize, margin }) => {

    const renderSocialAccounts = () => {
        return socialAccounts.map((account, index) => (
            <IconContainer direction={direction} margin={margin} last={index + 1 === socialAccounts.length} >
                <a className="row-icon" href={account.url}>{<account.icon />}</a>
            </IconContainer>
        ))
    }

    return (
        <div style={{ display: 'table-cell' }}>
            <BoxContainer direction={direction} iconSize={iconSize}>
                {renderSocialAccounts()}
            </BoxContainer>
        </div>
    );
}

export default SocialRow;