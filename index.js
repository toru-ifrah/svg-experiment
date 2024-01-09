let gap = 34;
let size = 30;
let growth = 1;
const draw = SVG().addTo('.js-logo').size(300, 300)

const drawLogo = () => {
  draw.clear()

  const drawT = i => {
    const s1 = size;
    const s2 = size * 0.2 * growth;
    const s3 = s1 - s2;

    draw
      .path(`M ${s2}  0 L ${s3} 0 L ${s3} ${s2} L ${s1} ${s2} L ${s1} ${s3} L ${s3} ${s3} L ${s3} ${s1} L ${s2} ${s1} L ${s2} ${s3} L 0 ${s3} L 0 ${s2} L ${s2} ${s2} L ${s2} 0`)
      .move(i * (gap) + size * -0.5 + 15, size * -0.5 + 15)
      .attr({
        fill: '#000'
      })
  }

  const drawO = i => {
    draw
      .rect(size, size)
      .radius(size * 0.5 * growth, size * 0.5 * growth)
      .move(i * (gap) + size * -0.5 + 15, size * -0.5 + 15)
      .attr({
        fill: '#000'
      })
  }

  const drawR = i => {
    draw.rect(size, size)
      .move(i * (gap) + size * -0.5 + 15, size * -0.5 + 15)
      .attr({
        fill: '#000'
      })
  }

  const drawU = i => {
    const s1 = size
    const s2 = s1 / 3
    const s3 = s1 - s2
    const s4 = s1 * 0.15 * growth
    const s5 = s1 - s4

    draw
      .path(`
      	M 0 0 
        H ${s1} 
        V ${s3} 
        C ${s1} ${s5} ${s5} ${s1} ${s3} ${s1} 
        H ${s2} 
        C ${s4} ${s1} 0 ${s5} 0 ${s3}`)
      .move(i * (gap) + size * -0.5 + 15, size * -0.5 + 15)
      .attr({
        fill: '#000'
      })
  }

  drawT(0)
  drawO(1)
  drawR(2)
  drawU(3)
}

const changeGap = v => {
  gap = parseInt(v)
  drawLogo()
}

const changeGrowth = v => {
  growth = parseFloat(v)
  drawLogo()
}

const changeSize = v => {
  size = parseInt(v)
  drawLogo()
}

drawLogo()

///

const ribbon = SVG().addTo('.js-ribbon-logo').size("100%", 90)

let ribbonSize = 60;
let ribbonGap = 100;
let ribbonXDepth = -10;
let ribbonYDepth = 10;

const drawRibbonLogo = () => {

  ribbon.clear()

  const drawT = i => {
    const corner = ribbonSize * 0.25

    const x1 = 0;
    const x2 = x1+ribbonXDepth;
    const x3 = corner;
    const x4 = x3 + ribbonXDepth;
    const x5 = ribbonSize - corner;
    const x6 = x5 + ribbonXDepth;
    const x7 = ribbonSize;
    const x8 = x7 + ribbonXDepth;

    const y1 = 0;
    const y2 = y1 + ribbonYDepth;
    const y3 = corner;
    const y4 = y3 + ribbonYDepth;
    const y5 = ribbonSize - corner;
    const y6 = y5 + ribbonYDepth;
    const y7 = ribbonSize;
    const y8 = y7 + ribbonYDepth;

    const p1 = ribbon
      .path(`
        M ${x1} ${y3}
        L ${x3} ${y3}
        L ${x3} ${y1}
        L ${x5} ${y1}
        L ${x6} ${y2}
        L ${x6} ${y3}
        L ${x7} ${y3}
        L ${x8} ${y4}
        L ${x8} ${y6}
        L ${x6} ${y6}
        L ${x6} ${y8}
        L ${x4} ${y8}
        L ${x3} ${y7}
        L ${x3} ${y6}
        L ${x2} ${y6}
        L ${x1} ${y5}
        L ${x1} ${y3}
        
        
        M ${x2} ${y4}
        L ${x4} ${y4}
        L ${x4} ${y2}
        L ${x5} ${y2}
        L ${x5} ${y3}
        L ${x6} ${y4}
        L ${x7} ${y4}
        L ${x7} ${y5}
        L ${x5} ${y5}
        L ${x5} ${y7}
        L ${x4} ${y7}
        L ${x4} ${y6}
        L ${x3} ${y5}
        L ${x2} ${y5}
        L ${x2} ${y4}
       `)
      .move(
        i * (ribbonGap) + x8 * -0.5 + 45,
        y8 * -0.5 + 45)
      .attr({
        fill: '#000',
        'fill-rule': 'evenodd'
      })
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
  drawO(1)
  drawR(2)
  drawU(3)
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
