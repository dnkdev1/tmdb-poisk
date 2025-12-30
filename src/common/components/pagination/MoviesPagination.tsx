import type {ChangeEvent} from "react";
import {Pagination, Typography} from "@mui/material";
import styles from './Pagination.module.css'
import {PAGE_SIZE} from "../../constants.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {selectThemeMode} from "../../../app/app-slice.ts";

type Props = {
    totalCount: number
    page: number
    setPage: (page: number) => void
}

export const MoviesPagination = ({ totalCount, page, setPage }: Props) => {

    const thememode = useAppSelector(selectThemeMode)


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
                    "& .MuiPaginationItem-root": { backgroundColor: thememode === 'light' ? "#f0f0f0" : '#324061' },
                    "& .MuiPaginationItem-root.Mui-selected": { backgroundColor: "#2563eb", color: "#fff", },
                    "& .MuiPaginationItem-root:hover": { backgroundColor: thememode === 'light' ? "#90caf9" : '#1f2b40', },
                }}
            />

            <div className={styles.totalCount}>
                <Typography variant="caption">Total: {totalCount}</Typography>
            </div>
        </>
    )
}