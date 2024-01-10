let gap = window.innerWidth / 6;
let size = window.innerHeight / 4;
let growth = 1;

const ribbon = SVG().addTo('.js-ribbon-logo').size(window.innerWidth, window.innerHeight)

let ribbonSize =  window.innerHeight / 4;
let ribbonGap = window.innerWidth / 6;
let ribbonXDepth = -10;
let ribbonYDepth = 10;

const drawRibbonLogo = () => {

  ribbon.clear()




  const drawT = i => {
    const corner = ribbonSize * 0.25;

    const x1 = ribbonXDepth;
    const x2 = x1+ribbonXDepth ;
    const x3 = corner;
    const x4 = x3 + ribbonXDepth;
    const x5 = ribbonSize - corner;
    const x6 = x5 + ribbonXDepth;
    const x7 = ribbonSize;
    const x8 = x7 + ribbonXDepth;

    const y1 = 0;
    const y2 = y1 + ribbonYDepth;
    const y3 = corner;
    const y4 = y3 + ribbonYDepth ;
    const y5 = ribbonSize - corner;
    const y6 = y5 + ribbonYDepth;
    const y7 = ribbonSize;
    const y8 = y7 + ribbonYDepth;

const new_x1 = ribbonSize * 1.7;

const new_x4 = ribbonSize + ribbonXDepth;
const new_y1 = ribbonSize;

console.log(ribbonXDepth, ribbonYDepth, ribbonSize, ribbonGap);

    // const top = ribbon
    //   .path(`
    //     M ${new_x1}, 1.5 
    //     H 1.5
    //     L ${x2}, ${x8 / 2}
    //     H ${x4} 
    //     L ${x6}, ${x8 / 2}
    //     Z
    //    `)
    //   .move(
    //     i * (ribbonGap) + x8 * -0.1 + 45,
    //     y8 * 0 + 45)
    //   .attr({
    //     fill: '#000',
    //     'fill-rule': 'evenodd'
    //   })

    var group = ribbon.group()



      const top = group
      .path(`
        M 297.5,1.5
        H 125.5
        L 175, 74
        L 346, 74.5
        L 297.5, 1.5
        Z
       `)
  


    // current values
    //-10 -20 43.1875 33.1875 129.5625 119.5625 172.75 162.75


    const bottom = group.path(`
        M 298, 422
        H 126
        L 174, 496
        H 346
        L 298, 422
        Z
       `)
      // .move(
      //   i * (ribbonGap) + x8 * -0.1 + 45,
      //   y8 * 1.0 + 45)
      // .attr({
      //   fill: '#000',
      //   'fill-rule': 'evenodd'
      // })



      const vertical_side_1 = group.path(`
        M 346,369.559
        L 297,298
        L 296,419.945
        L 346,492.5
        V 369.559
        L 298, 422
        Z
       `)
      // .move(
      //   i * (ribbonGap) + x8 * -0.1 + 45,
      //   y8 * 0 + 45)
      // .attr({
      //   fill: '#000',
      //   'fill-rule': 'evenodd'
      // })


      const vertical_side_2 = group.path(`
        M 346,369.559
        L 297,298
        L 296,419.945
        L 346,492.5
        V 369.559
        L 298, 422
        Z
       `)
      // .move(
      //   i * (ribbonGap) + x8 * 0.96 + 45,
      //   y8 * 0 + 45)
      // .attr({
      //   fill: '#000',
      //   'fill-rule': 'evenodd'
      // })


      group.move(
        i * (ribbonGap) + x8 * -0.1 + 45,
        y8 * 0 + 45)

    //   const s1 = ribbon
    // //   .path(`
    //     M 49.5, 75
    //     L 1, 2.5
    //     V 125
    //     L 49.5, 197
    //     V 75
    //     Z
    //    `)
    //    .move(
    //     i * (ribbonGap) + x8 * -0.1 + 45,
    //     y8 * 0.5 + 45)
    //   .attr({
    //     fill: '#000',

    //   })

    //   const s2 = ribbon
    //   .path(`
    //     M 49.5, 75
    //     L 1, 2.5
    //     V 125
    //     L 49.5, 197
    //     V 75
    //     Z
    //    `)
    //    .move(
    //     i * (ribbonGap) + x8 * 0.5 + 45,
    //     y8 * 0.5 + 45)
    //   .attr({
    //     fill: '#000',

    //   })



      // const u1 = ribbon
      // .path(`
      //   M 123.5,1
      //   H 1
      //   L 49.5,74.5
      //   H 172.5
      //   L 123.5,1
      //   Z
      //  `)
      //  .move(
      //   i * (ribbonGap) + x8 * 0.5 + 45,
      //   y8 * 0.5 + 45)
      // .attr({
      //   fill: '#000',
      // })
      


      // const u2 = ribbon
      // .path(`
      //   M 123.5,1
      //   H 1
      //   L 49.5,74.5
      //   H 172.5
      //   L 123.5,1
      //   Z
      //  `)
      //  .move(
      //   i * (ribbonGap) + x8 * -0.8 + 45,
      //   y8 * 0.5 + 45)
      // .attr({
      //   fill: '#000',
      // })
      

          
    // const p2 = ribbon
    // .path(`


    //   Z
    //  `)
    // .move(
    //   i * (ribbonGap) + x8 * -0.1 + 45,
    //   y8 * 0.5 + 45)
    // .attr({
    //   fill: '#000',
    //   'fill-rule': 'evenodd'
    // })
  }

  const drawO = i => {
    const s1 = ribbonSize + ribbonXDepth;
    const s2 = ribbonSize + ribbonYDepth;
    const s3 = ribbonSize * 0.5
    const s4 = ribbonSize * 0.5

    ribbon
      .path(`
      	M 0, 0
        m ${s3}, 0
        a ${s3},${s3} 0 1,0 ${ribbonSize*-1},0
        a ${s3},${s3} 0 1,0 ${ribbonSize},0
        M ${ribbonXDepth}, ${ribbonYDepth}
        m ${s3}, 0
        a ${s3},${s3} 0 1,0 ${ribbonSize*-1},0
        a ${s3},${s3} 0 1,0 ${ribbonSize},0

        
       `)
      .move(
        i * ribbonGap + s1 * -0.5 + 45,
        s2 * -0.5 + 45)
      .attr({
        fill: '#000',
        'fill-rule': 'evenodd'
      })

  }

  const drawR = i => {
    const s1 = ribbonSize + ribbonXDepth;
    const s2 = ribbonSize + ribbonYDepth;
    const s3 = ribbonSize * 0.5

    ribbon
      .path(`
      	M 0 0 
        L ${ribbonSize} 0 
        L ${ribbonSize} ${ribbonSize} 
        L 0 ${ribbonSize} 
        L 0 0 
        
        M ${ribbonXDepth} ${ribbonYDepth} 
        L ${s1} ${ribbonYDepth} 
        L ${s1} ${s2} 
        L ${ribbonXDepth} ${s2} 
        L ${ribbonXDepth} ${ribbonYDepth}
       `)
      .move(
        i * (ribbonGap) + s1 * -0.5 + 45,
        s2 * -0.5 + 45)
      .attr({
        fill: '#000',
        'fill-rule': 'evenodd'
      })
	
  	let invert = ribbonXDepth < 0 && ribbonYDepth < 0
    let p1 = invert ? ribbonSize + ribbonXDepth : ribbonSize
    let p2 = invert ? 0 : ribbonYDepth

    ribbon
      .path(
        `M ${ribbonSize} 0 
        L ${s1} ${ribbonYDepth} 
        L ${p1} ${p2} 
        L ${ribbonSize} 0`
      )
      .move(
        i * (ribbonGap) + s1 * -0.5 + 45 + ribbonSize,
        s2 * -0.5 + 45)
      .attr({
        fill: "#000"
      })
    
    ribbon
      .path(
        invert ? `
	        M 0 ${ribbonSize} 
          L 0 ${ribbonSize + ribbonYDepth}
          L ${ribbonXDepth} ${ribbonSize + ribbonYDepth}
          L 0 ${ribbonSize}
        ` : `
        	M  0 ${ribbonSize} 
	        L ${ribbonXDepth} ${ribbonSize} 
  	      L ${ribbonXDepth} ${s2} 
    	    L 0 ${ribbonSize}
        `
      )
      .move(
        i * (ribbonGap) + s1 * -0.5 + 45,
        s2 * -0.5 + 45 + ribbonSize
      )
      .attr({
        fill: "#000"
      })
      
    invert = ribbonXDepth < 0 && ribbonYDepth > 0
      
    ribbon
      .path(
        invert ? `
	        M 0 0
          L 0 ${ribbonYDepth}
          L ${ribbonXDepth} ${ribbonYDepth}
        ` : `
        	M 0 0 
	        L ${ribbonXDepth} 0
          L ${ribbonXDepth} ${ribbonYDepth}
          L 0 0
        `
      )
      .move(
        i * (ribbonGap) + s1 * -0.5 + 45,
        s2 * -0.5 + 45)
      .attr({
        fill: "#000"
      })
  }

  const drawU = i => {
    const s1 = ribbonSize + ribbonXDepth;
    const s2 = ribbonSize + ribbonYDepth;

    const s10 = ribbonSize
    const s20 = s10 / 3
    const s30 = s10 - s20
    const s40 = s10 * 0.15
    const s50 = s10 - s40

    ribbon
      .path(`
      	M 0 0 
        L ${s10} 0
        L ${s10} ${s30} 
        C ${s10} ${s50} ${s50} ${s10} ${s30} ${s10} 
        L ${s20} ${s10} 
        C ${s40} ${s10} 0 ${s50} 0 ${s30} 
        
        M ${ribbonXDepth} ${ribbonYDepth} 
        L ${s10 + ribbonXDepth} ${ribbonYDepth}
        L ${s10 + ribbonXDepth} ${s30 + ribbonYDepth} 
        C ${s10 + ribbonXDepth} ${s50 + ribbonYDepth} ${s50 + ribbonXDepth} ${s10 + ribbonYDepth} ${s30 + ribbonXDepth} ${s10 + ribbonYDepth} 
        L ${s20 + ribbonXDepth} ${s10 + ribbonYDepth} 
        C ${s40 + ribbonXDepth} ${s10 + ribbonYDepth} ${ribbonXDepth} ${s50 + ribbonYDepth} ${ribbonXDepth} ${s30 + ribbonYDepth} 
       `)
      .move(
        i * (ribbonGap) + s1 * -0.5 + 45,
        s2 * -0.5 + 45
      )
      .attr({
        fill: '#000',
        'fill-rule': 'evenodd'
      })
    
    let invert = ribbonXDepth < 0 && ribbonYDepth < 0
    let p1 = invert ? ribbonSize + ribbonXDepth : ribbonSize
    let p2 = invert ? 0 : ribbonYDepth

    ribbon
      .path(
        `M ${ribbonSize} 0 
        L ${s1} ${ribbonYDepth} 
        L ${p1} ${p2}`
      )
      .move(
        i * (ribbonGap) + s1 * -0.5 + 45 + ribbonSize,
        s2 * -0.5 + 45)
      .attr({
        fill: '#000'
      })
     
    invert = ribbonXDepth > 0 && ribbonYDepth < 0
    p1 = invert ? ribbonXDepth : 0;
    p2 = invert ? 0 : ribbonYDepth;
    
    ribbon
      .path(
        `M 0 0 
        L ${ribbonXDepth} ${ribbonYDepth} 
        L ${p1} ${p2}`
      )
      .move(
        i * (ribbonGap) + s1 * -0.5 + 45,
        s2 * -0.5 + 45)
      .attr({
        fill: '#000'
      })


  }

  drawT(0)
  // drawO(1)
  // drawR(2)
  // drawU(3)
}

drawRibbonLogo()

const changeRibbonSize = v => {
  ribbonSize = parseInt(v)
  drawRibbonLogo()
}

const changeRibbonGap = v => {
  ribbonGap = parseInt(v)
  drawRibbonLogo()
}

const changeRibbonXDepth = v => {
  ribbonXDepth = parseInt(v)
  drawRibbonLogo()
}

const changeRibbonYDepth = v => {
  ribbonYDepth = parseInt(v)
  drawRibbonLogo()
}
