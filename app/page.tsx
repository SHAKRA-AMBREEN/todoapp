"use client"

import CounterApp from "./counter-app";
import CounterAppAdvance from "./counter-app-advance";
import StrPrac from "./str-prac";
import Todo from "./todo";
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";


export default function page() {
    return (
        <>
         <ChakraProvider>  
            <ColorModeScript initialColorMode="light"/>
        {/* <h2> String Practice and useState Practice </h2> */}
        {/* <StrPrac /> */}
        {/* <br /> */}

        {/* <h2> Counter App </h2> */}
        {/* <CounterApp /> */}
        {/* <br /> */}

        {/* <h2> Counter App Advance </h2> */}

        {/* <CounterAppAdvance /> */}
        
        {/* <h1>Todo Application </h1> */}
        <Todo/>
        </ChakraProvider> 
        </>
    );
}