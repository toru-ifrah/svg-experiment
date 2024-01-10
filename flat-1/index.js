let gap = window.innerWidth / 6;
let size = window.innerHeight / 4;
let growth = 0;
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
        fill: '#000',
        class: 'letter-t'
      })
  }

  const drawO = i => {
    draw
      .rect(size, size)
      .radius(size * 0.5 * growth, size * 0.5 * growth)
      .move(i * (gap) + size * 0.5 + 15, size * 0.5 + 15)
      .attr({
        fill: '#000',
        class: 'letter-o'
      })
  }

  const drawR = i => {
    draw.rect(size, size)
      .move(i * (gap) + size * 0.5 + 15, size * 0.5 + 15)
      .attr({
        fill: '#000',
        class: 'letter-r'
      })
  }

  const drawU = i => {
    const s1 = size
    const s2 = s1 / 3
    const s3 = s1 - s2
    const s4 = s1 * 0.15 * growth
    const s5 = s1 - s4

   var u = draw
      .path(`
      	M 0 0 
        H ${s1} 
        V ${s3} 
        C ${s1} ${s5} ${s5} ${s1} ${s3} ${s1} 
        H ${s2} 
        C ${s4} ${s1} 0 ${s5} 0 ${s3}`)
      .move(i * (gap) + size * 0.5 + 15, size * 0.5 + 15)
      .attr({
        fill: '#000',
        class: 'letter-u'
      })

      // u.animate({
      //   duration: 2000,
      //   delay: 1000,
      //   when: 'now',
      //   swing: true,
      //   times: 5,
      //   wait: 200
      // }).attr({ fill: '#f03' })

      
  }

  drawT(0)
  drawO(1)
  drawR(2)
  drawU(3)

}


window.addEventListener('resize', () => {
	gap = window.innerWidth / 4;
	size = window.innerHeight;
	draw.size(window.innerWidth, window.innerHeight);
	drawLogo();
  });


  // var gradient = draw.gradient('linear', function(add) {
  //   add.stop({ offset: 0, color: '#EDFE06' })
  //   add.stop({ offset: 1, color: '#58CFFB' })
  // })


  drawLogo()





// controls
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
function createSlider(min, max, value, step, changeFunction) {
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.min = min;
  slider.max = max;
  slider.value = value;
  slider.step = step;
  slider.className = 'slider';
  slider.oninput = changeFunction;
  slider.onchange = changeFunction;
  return slider;
}

const controlsDiv = document.querySelector('.controls');

controlsDiv.appendChild(createSlider(0, 400, 34, 1, e => changeGap(e.target.value)));
controlsDiv.appendChild(createSlider(0, 1, 1, 0.1, e => changeGrowth(e.target.value)));
controlsDiv.appendChild(createSlider(0, 300, 30, 1, e => changeSize(e.target.value)));


//gsap
// gsap.from(".js-logo svg", {
//   width: 0,
//   duration: 5,
//   ease: "power2.inOut",
// });

// gsap.from(".loader-2", {
//   width: 0,
//   delay: 1.9,
//   duration: 2,
//   ease: "power2.inOut",
// });


// // update the gap value to 1
// gsap.to(".letter-t", {
//   x: 0,
//   duration: 1,
//   ease: "power2.inOut",
// });

