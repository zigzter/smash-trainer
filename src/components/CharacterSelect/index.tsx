import * as React from 'react';
import Select from 'react-select';
import images from '../../constants/imageSources';
import { roster } from '../../constants/roster';

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
    return (
        <div>
            <Select components={{ Option, SingleValue: Option }} options={options} />
        </div>
    );
};

export default CharacterSelect;
