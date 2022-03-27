import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number | number[]
    step?: number
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,step
        // min, max, step, disable, ...
    }
) => {

    const onChangeCallback = (event: Event) => {
        // @ts-ignore
        onChangeRange([event.target.value[0] ,event.target.value[1]])




    }

    return (
        <>
            <Box sx={{marginLeft: 2, marginTop: -0.5, marginRight: 2, width: 122 }}>
                <Slider
                    value={value}
                    onChange={onChangeCallback}
                    color={'primary'}
                    step={step}
                />
            </Box>

        </>
    )
}

export default SuperDoubleRange
