import React, {useEffect, useRef } from 'react';
import Spielbrett from './pictures/spielbrettneu.png';



export default function Board()  {

    const canvasRef = useRef(null);
    
          
    useEffect(() => {
        
        const canvas = canvasRef.current; 
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "#ff8f00";
        ctx.fillRect(5,5,10,10);
        ctx.fillRect(20,5,10,10);
        ctx.fillRect(35,5,10,10);
        ctx.fillRect(50,5,10,10);
        ctx.fillRect(50,20,10,10);
        ctx.fillRect(50,35,10,10);
        ctx.fillRect(35,35,10,10);
        ctx.fillRect(20,35,10,10);
        ctx.fillRect(20,50,10,10);
        ctx.fillRect(20,65,10,10);
        ctx.fillRect(20,80,10,10);
        ctx.fillRect(35,80,10,10);
        ctx.fillRect(50,80,10,10);
        ctx.fillRect(65,80,10,10);
        ctx.fillRect(80,80,10,10);
        ctx.fillRect(95,80,10,10);
        ctx.fillRect(95,65,10,10);
        ctx.fillRect(95,50,10,10);
        ctx.fillRect(95,35,10,10);
        ctx.fillRect(110,35,10,10);
        ctx.fillRect(125,35,10,10);
        ctx.fillRect(140,35,10,10);
        ctx.fillRect(140,50,10,10);
        ctx.fillRect(140,65,10,10);
        ctx.fillRect(140,80,10,10);
        ctx.fillRect(140,95,10,10);
        ctx.fillRect(155,95,10,10);
        ctx.fillRect(170,95,10,10);
        ctx.fillRect(185,95,10,10);
        ctx.fillRect(200,95,10,10);
        ctx.fillRect(215,95,10,10);
        ctx.fillRect(215,80,10,10);
        ctx.fillRect(215,65,10,10);
        ctx.fillRect(215,50,10,10);
        ctx.fillRect(215,35,10,10);
        ctx.fillRect(215,20,10,10);
        ctx.fillRect(230,20,10,10);
        ctx.fillRect(245,20,10,10);
        ctx.fillRect(260,20,10,10);
        ctx.fillRect(275,20,10,10);
        ctx.fillRect(275,35,10,10);
        ctx.fillRect(275,50,10,10);
        ctx.fillRect(275,65,10,10);
        ctx.fillRect(275,80,10,10);
        ctx.fillRect(275,95,10,10);
        ctx.fillRect(275,110,10,10);
        ctx.fillRect(275,125,10,10);
        ctx.fillRect(260,125,10,10);
        ctx.fillRect(245,125,10,10);
        ctx.fillRect(230,125,10,10);
        ctx.fillRect(215,125,10,10);
        ctx.fillRect(200,125,10,10);
        ctx.fillRect(185,125,10,10);
        ctx.fillRect(170,125,10,10);
        ctx.fillRect(155,125,10,10);
        ctx.fillRect(140,125,10,10);
        ctx.fillRect(125,125,10,10);
        ctx.fillRect(110,125,10,10);
        ctx.fillRect(95,125,10,10);
        ctx.fillRect(80,125,10,10);
        ctx.fillRect(65,125,10,10);
        ctx.fillRect(50,125,10,10);
        ctx.fillRect(35,125,10,10);
        ctx.fillRect(20,125,10,10);
        const ctxend = canvas.getContext('2d');
        ctxend.fillStyle = "black";
        ctxend.fillRect(5,125,10,10);

        
        
        
    }, []);

  
    return(
            <canvas id="canvas" ref = {canvasRef} />
      
      
    )
}

