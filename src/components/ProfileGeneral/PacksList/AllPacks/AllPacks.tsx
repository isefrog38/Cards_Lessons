import React, {memo, useState} from 'react';
import {useAppSelector, useTypedDispatch} from "../../../../Store-Reducers/Store";
import {CardTable} from "./Table/Table";
import {ProfileWrapper, TitleProfileWrapper} from '../../../StylesComponents/ProfileAndPacksWrapper';
import {Pagination} from "../../../Common/Pagination";
import {AddPackModal} from "../../../ModalWindow/AddPackModal/AddPackModal";
import {PaginationBlock, SearchBlock} from '../../../StylesComponents/CardsWrapper';
import {
    getOnePagePacksAC,
    PacksInitialStateType,
    setPageCountAC,
    setTitleForSearchAC
} from "../../../../Store-Reducers/Packs-Reducer";
import {getAllPacksTC} from "../../../../Thunk's/PacksThunk";
import {SearchField} from "../../../Common/SearchInput/SearchInput";
import {Button} from "../../../Common/Buttons/Button";
import {PageSelect} from "../../../../UtilsFunction/PageSelector";
import styled from "styled-components";

type AllPacksType = {
    namePage: string
}

export const AllPacks = memo(({namePage}: AllPacksType) => {

    const statePack = useAppSelector<PacksInitialStateType>(state => state.PacksReducer);
    const [showAddModal, setShowAddModal] = useState<boolean>(false);

    const dispatch = useTypedDispatch();

    const addPackHandler = () => setShowAddModal(true);
    const onPageChanged = (page: number) => {
        dispatch(getOnePagePacksAC({page}));
        dispatch(getAllPacksTC());
    };

    const onChangeDebounceRequest = (title: string) => {
        dispatch(getOnePagePacksAC({page: 1}));
        dispatch(setTitleForSearchAC({title}));
        dispatch(getAllPacksTC());
    };

    return (
        <ProfileWrapper>
            {showAddModal
                ? <AddPackModal setShow={setShowAddModal}/>
                : <></>
            }
            <TitleProfileWrapper fontSz={1.5}>{namePage}</TitleProfileWrapper>

            <SearchBlock>
                <SearchField stateValue={statePack.params.packName}
                             placeholder={"Search pack..."}
                             onChangeWithDebounce={onChangeDebounceRequest}
                />
                <Button name={'Add new pack'} onClick={addPackHandler}/>
            </SearchBlock>

            <CardTable itemPack={statePack.packs} isFetching={statePack.isFetching}/>

            <PaginationBlock>
                {statePack.cardPacksTotalCount > 10 &&
                    <><Pagination portionSize={10}
                                  totalItemsCount={statePack.cardPacksTotalCount}
                                  pageSize={statePack.params.pageCount}
                                  onPageChanged={onPageChanged}
                                  currentPage={statePack.params.page}/>
                        <ShowCardsPage>Show
                            <PageSelect value={statePack.params.pageCount}
                                        onChange={(page) => dispatch(setPageCountAC({pageCount: page}))}
                                        items={[5, 10, 15, 20]}/>
                            Cards per Page</ShowCardsPage>
                    </>}
            </PaginationBlock>


        </ProfileWrapper>
    );
});

const ShowCardsPage = styled.div`
  display: flex;
  font-size: 0.8vw;
  align-items: center;
  justify-content: space-between;
  width: 20%;`

