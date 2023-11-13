// import { useEffect } from "react";
// import { useState } from "react";

// export default function useCurrencyInfo(currency) {
//     let [data, setData] = useState({});
//     useEffect(() => {
//         let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
//         fetch(url)
//             .then((val) => val.json())
//             .then((jsonVal) => setData(jsonVal.currency))
//             // .catch((err) => console.log(err));
//             console.log(data);
//     }, [currency]);
//     console.log(data);
//     return data;
// }

import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;