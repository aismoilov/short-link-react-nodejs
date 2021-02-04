import { useCallback } from 'react'

export const useMessage = () => {
    return useCallback(error => {
        if (window.M && error) {
            window.M.toast({ html: error })
        }
    }, [])
}