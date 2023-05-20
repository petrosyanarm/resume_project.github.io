import React, {useEffect, useState} from 'react';
function Web(props) {
    let str =["DESIGNER","DEVELOPER"]
    const [kod,setKod]=useState('')

    useEffect(()=>{
        let i = 0
        let j = 0
        let wait = 6
        let s = ""
        setInterval(()=>{
            if(wait-- >0) return
            if(wait===-1) setKod(s)
            if(i<str.length){
                if(j<str[i].length){

                    setKod( s +=str[i][j++])
                }
                else{
                    wait=8; j=0;i++;
                    s=""
                }
            }else{
                wait=8
                i=0
                j=0
            }

        },300)
    },[])
    return (

        <div className={"web"}>
            <span className={'web_span'}>WEB {kod}</span>
        </div>
    );
}

export default Web;