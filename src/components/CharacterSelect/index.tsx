import React, { SyntheticEvent, useState } from 'react';
import Select from 'react-select';
import images from '../../constants/imageSources';
import { roster } from '../../constants/roster';
import { characterSelected } from '../actions';

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

const CharacterSelect = () => {
    const [character, setCharacter] = useState('');
    const onChange = ({ value }: any) => {
        setCharacter(value);
    };
    const onSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
    };
    return (
        <div>
            <Select onChange={onChange} components={{ Option, SingleValue: Option }} options={options} />
            <button onSubmit={onSubmit}>Submit</button>
        </div>
    );
};

export default CharacterSelect;
