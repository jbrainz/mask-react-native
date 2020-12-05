/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import { BorderlessButton } from "react-native-gesture-handler";

import { Box, RoundedIcon } from "../../components";



interface OutfitProps {
    outfit: {
        color: string;
        aspectRatio: number;
        id: number;
    }
    width: number;
}
const Outfit = ({ outfit: { color: backgroundColor, aspectRatio }, width }: OutfitProps) => {
    const [selected, setSelected] = useState(false);
    return (
        <BorderlessButton onPress={() => {setSelected((prev) => !prev); 
            
        }}>
            <Box borderRadius="m"
                marginBottom="m"
                alignItems="flex-end"
                padding="m"
                style={{ backgroundColor, width, height: width * aspectRatio }}>
                {selected && (
                    <RoundedIcon name="check"
                        backgroundColor="primary"
                        color="white"
                        size={24}
                    />
                )}
            </Box>
        </BorderlessButton>

    );
};

export default Outfit;
