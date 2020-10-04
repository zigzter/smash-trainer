import { roster } from '../constants/roster';

const rosterIcons: { [name: string]: string } = {};

roster.forEach((characterName) => {
    let imageName = characterName.toLowerCase().split(' ').join('_').replace(/\./g, '').replace('&', 'and');
    if (imageName.slice(0, 3) === 'mii') {
        imageName = 'mii_fighter';
    }
    rosterIcons[characterName] = `https://ssbu-icons.s3-us-west-2.amazonaws.com/${imageName}.png`;
});

export default {
    rosterIcons,
};
