import React from 'react';
import s from "./Table.module.css";
import {OnePacksType} from "../../../../../Types/PacksTypes";
import styled from "styled-components";
import {ActiveButtonsTable} from "./ActiveButtonsTable/ActiveButtonsTable";
import {LoadingTable} from "../../../../Common/Loading/LoadingTable";

type CardTableType = {
    onEditClick: (id: string) => void
    onLearnClick: (id: string) => void
    itemPack: OnePacksType[]
    isFetching: boolean
};
const TableList = [
    {id: 1, name: "Name"},
    {id: 2, name: "Cards"},
    {id: 3, name: "Last Updated"},
    {id: 4, name: "Created by"},
    {id: 5, name: "Actions"},
];

export const CardTable = ({itemPack, isFetching, onEditClick, onLearnClick}: CardTableType) => {

    return (
        <PacksBlock>
            {isFetching
                ? <LoadingTable/>
                : <div className={s.table}>
                    <div className={s.item_columns}>
                        <div className={s.item}>
                            {TableList.map(el => <span className={s.name_column_one} key={el.id}>{el.name}</span>)}
                        </div>
                    </div>
                    {itemPack.map(el =>
                        <div className={s.elements_table_general_block}>
                            <div key={el._id} className={s.li}>
                                <span className={s.item}>{el.name}</span>
                                <span className={s.item}>{el.cardsCount}</span>
                                <span className={s.item}>{el.updated.slice(0, 10).replace(/^(\d+)-(\d+)-(\d+)$/, `$3.$2.$1`)}</span>
                                <span className={s.item}>Some Long Name</span>
                                <span className={s.item}>
                                <ActiveButtonsTable id={el._id}
                                                    onLearnClick={onLearnClick}
                                                    onEditClick={onEditClick}
                                />
                            </span>
                            </div>
                        </div>
                    )
                    }
                </div>
            }
        </PacksBlock>
    );
};


const PacksBlock = styled.div`
  height: auto;
  overflow: hidden;
  min-height: 70%;
  max-height: 70%;
  width: 100%;
  margin-top: 2vw;
  box-shadow: -0.1vw -0.1vw 0.5vw #cbcbcb,
  0.1vw 0.1vw 0.5vw 0.1vw #cbcbcb;`
