import React from 'react';
import styled from "styled-components"
import { socialAccounts } from './socialAccounts';

const SocialRow = ({ direction, iconSize, margin, vertical }) => {

    const renderSocialAccounts = () => {
        return socialAccounts.map((account, index) => (
            <span className={`text-2xl md:text-3xl ${vertical ? "mb-3 md:mb-4" : "mr-3 md:mr-4"}`.trim()} >
                <a className="row-icon" href={account.url}>{<account.icon />}</a>
            </span>
        ))
    }

    return (
        <div style={{ display: 'table-cell' }}>
            <span className={`flex ${vertical ? "flex-col" : "flex-row"}`.trim()}>
                {renderSocialAccounts()}
            </span>
        </div>
    );
}

export default SocialRow;