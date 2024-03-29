let gap = window.innerWidth / 5;
let size = window.innerHeight / 4;
let growth = 1;
const draw = SVG().addTo('.js-logo').size(window.innerWidth, window.innerHeight)

const drawLogo = () => {
  draw.clear()

  const drawT = i => {
    const s1 = size;
    const s2 = size * 0.2 * growth;
    const s3 = s1 - s2;

    draw
      .path(`M ${s2}  0 L ${s3} 0 L ${s3} ${s2} L ${s1} ${s2} L ${s1} ${s3} L ${s3} ${s3} L ${s3} ${s1} L ${s2} ${s1} L ${s2} ${s3} L 0 ${s3} L 0 ${s2} L ${s2} ${s2} L ${s2} 0`)
      .move(i * (gap) + size * 0.5 + 15, size * 0.5 + 15)
      .attr({
        fill: '#000'
      })
  }

  const drawO = i => {
    draw
      .rect(size, size)
      .radius(size * 0.5 * growth, size * 0.5 * growth)
      .move(i * (gap) + size * 0.5 + 15, size * 0.5 + 15)
      .attr({
        fill: '#000'
      })
  }

  const drawR = i => {
    draw.rect(size, size)
      .move(i * (gap) + size * 0.5 + 15, size * 0.5 + 15)
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
      .move(i * (gap) + size * 0.5 + 15, size * 0.5 + 15)
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

window.addEventListener('resize', () => {
	gap = window.innerWidth / 4;
	size = window.innerHeight;
	draw.size(window.innerWidth, window.innerHeight);
	drawLogo();
  });

drawLogo()

///

