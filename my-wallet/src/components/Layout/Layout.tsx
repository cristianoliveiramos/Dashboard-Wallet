import "./styles"
import { Grid } from "./styles"
import MainHeader from "../MainHeader"
import Aside from "../Aside"

import React from "react"
import Content from "../Content"
import Dashboard from "../../pages/Dashboard"

export const Layout = (props: {children: any}) => {
    return (
        <Grid>
            <MainHeader/>
            <Aside/>
            <Content>
                <Dashboard/>
            </Content>
        </Grid>
    )
}