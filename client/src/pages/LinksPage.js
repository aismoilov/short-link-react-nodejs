import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import { Loader } from '../components/Loader'
import { LinksList } from '../components/LinksList'


export const LinksPage = () => {
    const [links, setLinks] = useState(null)
    const { request, loading } = useHttp()
    const auth = useContext(AuthContext)

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = await request('/api/link', 'GET', null, {
                Authorization: `Bearer ${auth.token}`
            })
            setLinks(fetched)
        } catch (e) { }
    }, [auth, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader />
    }


    return (
        <>
            { !loading && links && <LinksList links={links} />}
        </>
    )
}