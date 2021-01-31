import React from 'react';
import styled from "styled-components"
import { socialAccounts } from './socialAccounts';

const SocialRow = ({ vertical, containerClassName, iconClassname }) => {

    const renderSocialAccounts = () => {
        return socialAccounts.map((account, index) => (
            <span className={`text-2xl md:text-3xl ${vertical ? "mb-3 md:mb-4" : "mr-3 md:mr-4"} ${iconClassname}`.trim()} >
                <a className="row-icon" href={account.url} target="_blank" rel="noopener noreferrer">{<account.icon />}</a>
            </span>
        ))
    }

    return (
        <div className={containerClassName} style={{ display: 'table-cell' }}>
            <span className={`flex ${vertical ? "flex-col" : "flex-row"}`.trim()}>
                {renderSocialAccounts()}
            </span>
        </div>
    );
}

export default SocialRow;