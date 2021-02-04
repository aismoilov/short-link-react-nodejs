import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { CreateLinkPage } from './pages/CreateLinkPage'
import { LinksPage } from './pages/LinksPage'
import { LinkDetailPage } from './pages/LinkDetailPage'
import { AuthPage } from './pages/AuthPage'

export const useRoutes = isAuthentificated => {
    if (isAuthentificated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <LinksPage />
                </Route>
                <Route path="/create" exact>
                    <CreateLinkPage />
                </Route>
                <Route path="/detail/:id" exact>
                    <LinkDetailPage />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}