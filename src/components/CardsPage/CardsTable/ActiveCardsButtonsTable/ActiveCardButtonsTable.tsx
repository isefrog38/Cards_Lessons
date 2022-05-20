import React, {useState} from 'react';
import styled from "styled-components";
import {DeleteCardModal} from "../../../ModalWindow/DeleteCardModal/DeleteCardModal";
import {OneCardType} from "../../../../Types/CardTypes";
import {EditCardModal} from "../../../ModalWindow/EditCardModal/EditCardModal";

type ActiveButtonsTableType = {
    myId: string | null
    el: OneCardType
}

export const ActiveCardButtonsTable = ({el, myId}: ActiveButtonsTableType) => {

    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [showEditModal, setShowEditModal] = useState<boolean>(false);

    const deletePackHandler = () => setShowDeleteModal(true);
    const editPackHandler = () => setShowEditModal(true);

    return (
        <>
            {showDeleteModal && <DeleteCardModal el={el} setShow={setShowDeleteModal}/>}
            {showEditModal && <EditCardModal el={el} setShow={setShowEditModal}/>}

            {el.user_id === myId
                && <>
                    <DeleteTableButton onClick={deletePackHandler}>
                        Delete
                    </DeleteTableButton>
                    <TableButton onClick={editPackHandler}>
                        Edit
                    </TableButton>
                </>
            }
        </>
    );
};


const TableButton = styled.button`
  cursor: pointer;
  background-color: #D7D8EF;
  border: none;
  border-radius: 3px;
  padding: 7px 12px;
  margin-left: 13px;
  color: #21268F;
  font-size: 13px;
  font-weight: 700;
  text-align: center;

  &:disabled {
    opacity: .3;
    cursor: no-drop;
  }

  @media (max-width: 1550px) {
    padding: 6px 10px;
    font-size: 10px;
  }
`;
const DeleteTableButton = styled.button`
  border-radius: 3px;
  border: none;
  cursor: pointer;
  background-color: #F1453D;
  padding: 7px 12px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 700;
  text-align: center;

  &:disabled {
    opacity: .3;
    cursor: no-drop;
  }

  @media (max-width: 1550px) {
    padding: 6px 10px;
    font-size: 10px;
  }
`;