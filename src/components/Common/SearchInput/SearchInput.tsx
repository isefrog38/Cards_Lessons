import React, {ChangeEvent, memo, useCallback, useState} from 'react';
import {InputWrapper} from "../../StylesComponents/CardsWrapper";

type SearchFieldPropsType = {
    width?: string
    margin?: string
    onChangeWithDebounce: (title: string) => void
    stateValue: string
    placeholder?: string
}

export const SearchField = memo(({
                                     onChangeWithDebounce,
                                     stateValue,
                                     placeholder,
                                     margin,
                                     width
                                 }: SearchFieldPropsType) => {
    const [value, setValue] = useState<string>(stateValue);
    const [timerId, setTimerId] = useState<number>(0);

    const onChangeSearchHandler = useCallback((title: ChangeEvent<HTMLInputElement>) => {
        setValue(title.currentTarget.value);
        clearTimeout(timerId);
        const id: number = +setTimeout(onChangeWithDebounce, 500, title.currentTarget.value);
        setTimerId(id);
    },[value, onChangeWithDebounce]);


    return (
        <InputWrapper
            margin={margin ? margin : undefined}
            width={width ? width : undefined}
            placeholder={placeholder}
            onChange={(e) => onChangeSearchHandler(e)}
            value={value}
        />
    )
});