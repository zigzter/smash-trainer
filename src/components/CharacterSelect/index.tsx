import React, { SyntheticEvent, useState, FC } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import images from '../../constants/imageSources';
import { roster } from '../../constants/roster';
import { characterSelected } from '../../actions';

const options = roster.map((character) => ({
    value: character,
    label: character,
}));

const Option = ({ children, innerProps }: { children: any; innerProps: any }) => {
    const iconSize = 26;
    return (
        <div {...innerProps} style={{ display: 'flex', alignItems: 'center' }}>
            <img height={iconSize} width={iconSize} src={images.rosterIcons[children]} alt="" />
            {children}
        </div>
    );
};

const CharacterSelect: FC = () => {
    const [character, setCharacter] = useState('');
    const dispatch = useDispatch();
    const onChange = ({ value }: any) => {
        setCharacter(value);
    };
    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        dispatch(characterSelected(character));
    };
    return (
        <>
            <Select onChange={onChange} components={{ Option, SingleValue: Option }} options={options} />
            <button onClick={onSubmit}>Submit</button>
        </>
    );
};

export default CharacterSelect;
