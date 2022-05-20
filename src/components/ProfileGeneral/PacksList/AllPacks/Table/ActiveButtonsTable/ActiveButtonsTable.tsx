import React, {useState} from 'react';
import styled from "styled-components";
import {DeletePackModal} from "../../../../../ModalWindow/DeletePackModal/DeletePackModal";
import {useNavigate} from "react-router-dom";
import {PATH} from "../../../../../../UtilsFunction/const-enum-path";
import {EditPackModal} from '../../../../../ModalWindow/EditPackModal/EditPackModal';
import {OnePacksType} from "../../../../../../Types/PacksTypes";
import {colors} from "../../../../../StylesComponents/Colors";

type ActiveButtonsTableType = {
    el: OnePacksType
    myId: string | null
}

export const ActiveButtonsTable = ({myId, el}: ActiveButtonsTableType) => {

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);
    const navigate = useNavigate();

    const deletePackHandler = () => setShowDeleteModal(true);
    const editPackHandler = () => setShowEditModal(true);
    const onLearnClick = (id: string) => navigate(PATH.learnPack + `/:${id}`);

    return (
        <>
            {showDeleteModal && <DeletePackModal id={el._id} setShow={setShowDeleteModal}/>}
            {showEditModal && <EditPackModal el={el} setShow={setShowEditModal}/>}

            {myId === el.user_id &&
                <>
                    <Button color={colors.WhiteColor} bgColor={'#F1453D'} onClick={deletePackHandler}>
                        Delete
                    </Button>
                    <Button color={colors.Blue} bgColor={colors.AzureishWhite} onClick={editPackHandler}>
                        Edit
                    </Button>
                </>}

            <Button color={colors.Blue} bgColor={colors.AzureishWhite} disabled={el.cardsCount === 0}
                    onClick={() => onLearnClick(el._id)}>
                Learn
            </Button>
        </>
    )
};


const Button = styled.button<{ color: string, bgColor: string }>`
  cursor: pointer;
  background-color: ${({bgColor}) => bgColor};
  border: none;
  border-radius: 0.15vw;
  font-size: 0.8vw;
  padding: 7px 12px;
  margin-left: 13px;
  color: ${({color}) => color};
  font-weight: 700;
  text-align: center;

  &:disabled {
    opacity: .3;
    cursor: no-drop;
  }`