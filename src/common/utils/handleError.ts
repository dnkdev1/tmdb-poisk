import { setAppErrorAC } from '../../app/app-slice.ts'
import { isErrorWithMessage } from './isErrorWithMessage'
import type {
    BaseQueryApi,
    FetchBaseQueryError,
    FetchBaseQueryMeta,
    QueryReturnValue,
} from '@reduxjs/toolkit/query/react';

export const handleError = (
    api: BaseQueryApi,
    result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>
) => {

    let error = 'Some error occurred'

    if (result.error) {
        switch (result.error.status) {
            case 'FETCH_ERROR':
            case 'PARSING_ERROR':
            case 'CUSTOM_ERROR':
            case 'TIMEOUT_ERROR':
                error = result.error.error
                break
            case 403:
                error = '403 Forbidden Error. Check API-KEY'
                break
            case 400:
                if (isErrorWithMessage(result.error.data)) {
                    error = result.error.data.message
                } else {
                    error = JSON.stringify(result.error.data)
                }
                break
            case 401:
                    error = 'You are not logged in. Please log in first.'
                break
            case 404:
                error = 'We couldn’t locate the resource you requested'
                break
            default:
                if (result.error.status >= 500 && result.error.status < 600) {
                    error = 'Server error occurred. Please try again later.'
                } else {
                    error = JSON.stringify(result.error)
                }
                break
        }
        api.dispatch(setAppErrorAC({ error }))
    }

}