import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Typography from "@mui/material/Typography";
import ContentCut from "@mui/icons-material/ContentCut";
import ContentCopy from "@mui/icons-material/ContentCopy";
import ContentPaste from "@mui/icons-material/ContentPaste";
import Cloud from "@mui/icons-material/Cloud";
import { useRouter } from "next/router";

export const BasicMenu = () => {
    const item = [
        {
            href: "/dashboard",
            title: "Dashboard",
            icon: <ContentCopy fontSize="small" />,
        },
        {
            href: "/orders",
            title: "Order",
            icon: <ContentCopy fontSize="small" />,
        },
    ];
    const { push } = useRouter();
    return (
        <Paper sx={{ width: 320, maxWidth: "100%" }}>
            <MenuList>
                {item.map(({ href, title, icon }, index) => {
                    console.log(href);

                    return (
                        <MenuItem
                            onClick={() => {
                                push(href);
                            }}
                        >
                            <ListItemIcon>{icon}</ListItemIcon>
                            <ListItemText>{title}</ListItemText>
                        </MenuItem>
                    );
                })}
            </MenuList>
        </Paper>
    );
};
