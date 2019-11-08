import * as React from 'react';

export interface ITabContentProps {
    currentTab: number;
    tabIndex: number;
    children?: React.ReactNode;
}
