import React, { FC } from 'react';
import { createStyles, makeStyles, styled } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        group: {
            // border: '1px solid red',
            borderRadius: 6,
            height: 28,
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
        },
        move: {
            height: 28,
            border: '1px solid red',
            borderTopLeftRadius: ({ index }: any) => (index === 0 ? 5 : 0),
        },
    }),
);

interface MProps {
    move: string;
    index: number;
    lastIndex: number;
}

const Move: FC<MProps> = ({ move, index, lastIndex }) => {
    return (
        <div
            style={{
                height: 28,
                border: '1px solid red',
                borderTopLeftRadius: index === 0 ? 5 : 0,
                borderBottomLeftRadius: index === 0 ? 5 : 0,
                borderTopRightRadius: index === lastIndex ? 5 : 0,
                borderBottomRightRadius: index === lastIndex ? 5 : 0,
            }}
        >
            {move}
        </div>
    );
};

interface Props {
    moves?: string[];
}

const test = ['short hop', 'fast fall', 'neutral', 'air'];

const MoveChain: FC<Props> = ({ moves }) => {
    const classes = useStyles();
    return (
        <div className={classes.group}>
            {test.map((move, index, arr) => {
                return <Move move={move} index={index} lastIndex={arr.length - 1} />;
            })}
        </div>
    );
};

export default MoveChain;
