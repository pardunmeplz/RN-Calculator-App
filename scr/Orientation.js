import { useEffect, useState } from "react";
import { Dimensions } from "react-native";

export function useOrientation(){
    const [orientation, setOrientation] = useState(true)

    useEffect(()=>{
        Dimensions.addEventListener('change',({window:{width,height}})=> setOrientation(width<height))
    })
    return orientation
}