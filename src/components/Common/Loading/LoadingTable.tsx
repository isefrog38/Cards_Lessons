import React from 'react';
import s from "./LodingTable.module.css";

export const LoadingTable = () => {
    return (
        <div className={s.main_loader_div}>
            <div className={s.loader}>
                <div className={s.ball}/>
                <div className={s.ball}/>
                <div className={s.ball}/>
                <span>Loading...</span>
            </div>
        </div>
    );
};
