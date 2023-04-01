import {surpriseMePrompts} from '../constants';
import React from 'react'
import FileSaver from 'file-saver';
const getRandomPrompt = (prompt ) => {
    let randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt=surpriseMePrompts[randomIndex]
    if(randomPrompt===prompt)
    return getRandomPrompt(prompt);
  return randomPrompt;
}
const downloadImage=async(_id,photo)=>{
  FileSaver.saveAs(photo,`download-${_id}.jpg`);
}
export {getRandomPrompt,downloadImage} ;
