import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { ITabContentProps } from 'components/TabContent/TabContentProps';

export function TabContent(props: ITabContentProps) {
    const { children, currentTab, tabIndex, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={currentTab !== tabIndex}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}
