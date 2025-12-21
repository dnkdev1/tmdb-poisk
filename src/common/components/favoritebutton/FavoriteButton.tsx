// import { IconButton } from "@mui/material";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import {useLocation, useNavigate} from "react-router-dom";
//
// type Props = {
//     onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
// };
//
// export const FavoriteButton = ({ onClick }: Props) => {
//
//     const location = useLocation(); // ✅ хук внутри компонента
//
//     const isItFavoritePage = location.pathname === "/favorites"; // пример проверки
//
//
//     const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
//

//     }
//
//     return (
//         <IconButton
//             className="favorite-btn"
//             sx={{
//                 position: "absolute",
//                 top: 20,
//                 right: 20,
//                 width: 40,
//                 height: 40,
//                 borderRadius: "50%",
//                 backgroundColor: isItFavoritePage ? "#2563eb" : "grey", // можно менять стиль
//                 color: "#d1d5db",
//                 opacity: 0,
//                 transition: "opacity 0.3s ease, color 0.3s ease",
//                 "&:hover": {
//                     color: "white",
//                     backgroundColor: "#2563eb",
//                 },
//             }}
//             onClick={onClickHandler}
//         >
//             <FavoriteIcon />
//         </IconButton>
//     );
// };


import {IconButton} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";


type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};


export const FavoriteButton = ({onClick}: Props) => {
    const isItFavoritePage = location.pathname === "/favorites"


    return (


        <IconButton
            className="favorite-btn"
            sx={{
                position: "absolute",
                top: 20,
                right: 20,
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "grey",
                color: "#d1d5db",
                opacity: 0, // скрыта по умолчанию
                transition: "opacity 0.3s ease, color 0.3s ease",
                "&:hover": {
                    color: "white",
                    backgroundColor: "#2563eb",
                },

            }}

            onClick={(e) => {
                if (isItFavoritePage) {
                    onClick(e)
                    window.location.reload();
                } else {
                    e.preventDefault()
                    e.stopPropagation()
                    onClick(e)
                }

                // e.preventDefault()
                // e.stopPropagation()
                // onClick(e)
            }}


        >
            <FavoriteIcon/>
        </IconButton>
    );

}
