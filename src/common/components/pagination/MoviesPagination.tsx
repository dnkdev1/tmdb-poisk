import type {ChangeEvent} from "react";
import {Pagination, Typography} from "@mui/material";
import styles from './Pagination.module.css'
import {PAGE_SIZE} from "../../constants.ts";

type Props = {
    totalCount: number
    page: number
    setPage: (page: number) => void
}

export const MoviesPagination = ({ totalCount, page, setPage }: Props) => {
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
                sx={{
                    "& .MuiPaginationItem-root": { backgroundColor: "#f0f0f0" },
                    "& .MuiPaginationItem-root.Mui-selected": { backgroundColor: "#2563eb", color: "#fff", },
                    "& .MuiPaginationItem-root:hover": { backgroundColor: "#90caf9", },
                }}
            />

            <div className={styles.totalCount}>
                <Typography variant="caption">Total: {totalCount}</Typography>
            </div>
        </>
    )
}