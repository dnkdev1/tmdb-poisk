import type {ChangeEvent} from "react";
import {Typography} from "@mui/material";
import styles from './Pagination.module.css'
import {PAGE_SIZE} from "../../constants.ts";

type Props = {
    totalCount: number
    page: number
    setPage: (page: number) => void
}

export const Pagination = ({ totalCount, page, setPage }: Props) => {
    const changePage = (_: ChangeEvent<unknown>, page: number) => {
        setPage(page)
    }

    return (
        <>

            <Pagination
                count={Math.ceil(totalCount / PAGE_SIZE)}
                page={page}
                onChange={changePage}
                shape="rounded"
                color="primary"
                className={styles.pagination}
            />

            <div className={styles.totalCount}>
                <Typography variant="caption">Total: {totalCount}</Typography>
            </div>

        </>
    )
}