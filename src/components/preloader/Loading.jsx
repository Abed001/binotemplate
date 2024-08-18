import React, { useState } from 'react'
import SyncLoader from "react-spinners/SyncLoader";
import { motion } from 'framer-motion';
import { slideUpandfade } from './Anime';

function Loading() {

    let [color, setColor] = useState("#E74E3E");
    return (
        <motion.div variants={slideUpandfade} initial="initial" exit="exit" className=' h-[100vh] w-[100%] flex justify-center items-center'>
            <motion.div>
                <SyncLoader
                    color={color}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader" />
            </motion.div>
        </motion.div>
    )
}

export default Loading
