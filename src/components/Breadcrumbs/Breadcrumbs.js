import React, { Component } from 'react'

class Breadcrumbs extends Comment {

    render() {
        

        return (
            <Breadcrumb>
                <Link to='/'>{match.url}</Link>
                <Breadcrumb.Section link>Home</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section link>Store</Breadcrumb.Section>
                <Breadcrumb.Divider icon='right angle' />
                <Breadcrumb.Section active>T-Shirt</Breadcrumb.Section>
            </Breadcrumb>
        )
    }
}