import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";
import {ContainerWrapper, Flex,Title} from '../Spinner/SpinnerElements'

const Spinner = () => {
    return (
        
        <Flex>
        <ScaleLoader
            size={150}
            height="160px"
            width="32px"
            color="#01BF71"
            radius="8px"
        />
        </Flex>
      
    );
};


export default Spinner;