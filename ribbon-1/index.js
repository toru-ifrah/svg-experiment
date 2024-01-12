

const ribbon = SVG().addTo('.js-ribbon-logo').size(100, 100)


let ribbonSize = 60;
let ribbonGap = 10;
let ribbonXDepth = 10;
let ribbonYDepth = 10;

const drawRibbonLogo = () => {

  ribbon.clear()




//   const drawT = i => {
//     const corner = ribbonSize * 0.25;

//     const x1 = ribbonXDepth;
//     const x2 = x1+ribbonXDepth ;
//     const x3 = corner;
//     const x4 = x3 + ribbonXDepth;
//     const x5 = ribbonSize - corner;
//     const x6 = x5 + ribbonXDepth;
//     const x7 = ribbonSize;
//     const x8 = x7 + ribbonXDepth;

//     const y1 = 0;
//     const y2 = y1 + ribbonYDepth;
//     const y3 = corner;
//     const y4 = y3 + ribbonYDepth ;
//     const y5 = ribbonSize - corner;
//     const y6 = y5 + ribbonYDepth;
//     const y7 = ribbonSize;
//     const y8 = y7 + ribbonYDepth;


//     const s1 = ribbonSize + ribbonXDepth;
//     const s2 = ribbonSize + ribbonYDepth;
//     const s3 = ribbonSize * 0.5
//     const s4 = ribbonSize * 0.5



//     const x10 = ribbonSize * 1.4
//     const x20 = x10 / 3.5;
//     // const s20 = s10 / 3
//     // const s30 = s10 - s20
//     // const s40 = s10 * 0.15
//     // const s50 = s10 - s40

//     const y10 = ribbonYDepth / 6;

//     const h10 = ribbonYDepth / 6; ;

// // const new_x1 = ribbonSize * 1.7;

// // const new_x4 = ribbonSize + ribbonXDepth;
// // const new_y1 = ribbonSize;


//     // current values
//     //-10 -20 43.1875 33.1875 129.5625 119.5625 172.75 162.75

//     // const top = ribbon
//     //   .path(`
//     //     M ${new_x1}, 1.5 
//     //     H 1.5
//     //     L ${x2}, ${x8 / 2}
//     //     H ${x4} 
//     //     L ${x6}, ${x8 / 2}
//     //     Z
//     //    `)
//     //   .move(
//     //     i * (ribbonGap) + x8 * -0.1 + 45,
//     //     y8 * 0 + 45)
//     //   .attr({
//     //     fill: '#000',
//     //     'fill-rule': 'evenodd'
//     //   })


//     const t_x1 = ribbonSize * 1.6;
//     const t_x2 = ribbonSize + ribbonXDepth;
//     const h_value = (ribbonSize + ribbonXDepth) / 1.35 ;


//     const size_1 = size;
//     const size_2 = size * 0.2 * growth;
//     const size_3 = s1 - s2;

//     var group = ribbon.group()

//     const top = group
//     .path(`M ${s2}  0 L ${s3} 0 L ${s3} ${s2} L ${s1} ${s2} L ${s1} ${s3} L ${s3} ${s3} L ${s3} ${s1} L ${s2} ${s1} L ${s2} ${s3} L 0 ${s3} L 0 ${s2} L ${s2} ${s2} L ${s2} 0`)


//       const bottom = group.path(`
//       M ${298 + ribbonXDepth}, ${422 + ribbonYDepth}
//       H ${126 + ribbonXDepth}
//       L ${174 + ribbonXDepth}, ${496 + ribbonYDepth}
//       H ${346 + ribbonXDepth}
//       L ${298 + ribbonXDepth}, ${422 + ribbonYDepth}
//       Z
//   `);

//       const h4 = group.path(`
//         M ${346 + ribbonXDepth}, ${369.559 + ribbonYDepth}
//         L ${297 + ribbonXDepth}, ${298 + ribbonYDepth}
//         L ${296 + ribbonXDepth}, ${419.945 + ribbonYDepth}
//         L ${346 + ribbonXDepth}, ${492.5 + ribbonYDepth}
//         V ${369.559 + ribbonYDepth}
//         L ${298 + ribbonXDepth}, ${422 + ribbonYDepth}
//         Z
//        `)

//        const h1 = group.path(`
//        M 174, 74.0591
//        L 125,2.5
//        L 124,124.445
//        L 174,197
//        V 74.0591
//        Z
//       `)

//        const h2 = group.path(`
//        M 346,369.559
//        L 297,298
//        L 296,419.945
//        L 346,492.5
//        V 369.559
//        Z
//       `)


//       const h3 = group.path(`
//       M 174,368.559
//       L 125,297
//       L 124,418.945
//       L 174,491.5
//       V 368.559
//       Z
      
//      `)


//      const h5 = group.path(`
//      M 345.5,75.5
//      L 297.5,2.5
//      L 297,125.5
//      L 345.5,197.5
//      V 75.5
//      Z
//     `)


//     const u1 = group.path(`
//     M 125,125
//     H 1.72815
//     L 49.5,199.5
//     L 174,198.5
//     L 174,198.5
//     Z
//    `)

//    const u2 = group.path(`
//    M 420.272,298
//    H 297
//    L 344.772,372.5
//    L 469.272,371.5
//    L 420.272,298
//    Z
//   `)


//   const u4 = group.path(`
//   M 125.272,297
//   H 2
//   L 49.7718,371.5
//   L 174.272,370.5
//   L 125.272,297
//   Z
//  `)


// //  const u2 = group.path(`
// //  M 420.272,298
// //  H 297
// //  L 344.772,372.5
// //  L 469.272,371.5
// //  L 420.272,298
// //  Z
// // `)



//       group.move(
//         i * (ribbonGap) + x8 * -0.1 + 45,
//         y8 * 0 + 45)



//     //   const s1 = ribbon
//     // //   .path(`
//     //     M 49.5, 75
//     //     L 1, 2.5
//     //     V 125
//     //     L 49.5, 197
//     //     V 75
//     //     Z
//     //    `)
//     //    .move(
//     //     i * (ribbonGap) + x8 * -0.1 + 45,
//     //     y8 * 0.5 + 45)
//     //   .attr({
//     //     fill: '#000',

//     //   })

//     //   const s2 = ribbon
//     //   .path(`
//     //     M 49.5, 75
//     //     L 1, 2.5
//     //     V 125
//     //     L 49.5, 197
//     //     V 75
//     //     Z
//     //    `)
//     //    .move(
//     //     i * (ribbonGap) + x8 * 0.5 + 45,
//     //     y8 * 0.5 + 45)
//     //   .attr({
//     //     fill: '#000',

//     //   })


//       // const u1 = ribbon
//       // .path(`
//       //   M 123.5,1
//       //   H 1
//       //   L 49.5,74.5
//       //   H 172.5
//       //   L 123.5,1
//       //   Z
//       //  `)
//       //  .move(
//       //   i * (ribbonGap) + x8 * 0.5 + 45,
//       //   y8 * 0.5 + 45)
//       // .attr({
//       //   fill: '#000',
//       // })
      


//       // const u2 = ribbon
//       // .path(`
//       //   M 123.5,1
//       //   H 1
//       //   L 49.5,74.5
//       //   H 172.5
//       //   L 123.5,1
//       //   Z
//       //  `)
//       //  .move(
//       //   i * (ribbonGap) + x8 * -0.8 + 45,
//       //   y8 * 0.5 + 45)
//       // .attr({
//       //   fill: '#000',
//       // })
      

          
//     // const p2 = ribbon
//     // .path(`


//     //   Z
//     //  `)
//     // .move(
//     //   i * (ribbonGap) + x8 * -0.1 + 45,
//     //   y8 * 0.5 + 45)
//     // .attr({
//     //   fill: '#000',
//     //   'fill-rule': 'evenodd'
//     // })
//   }


const calculateOffset = (x, y) => {
   

  x += ribbonXDepth;
  y += ribbonYDepth;

  return x + ' ' + y;
}


// document.querySelector('.ribbon-x').change = () => {
 let ribbon_y = document.querySelector('#ribbonYDepth').value ;
 let ribbon_x = document.querySelector('#ribbonXDepth').value ;
 let ribbon_size = document.querySelector('#ribbonSize').value ;
 document.querySelector('.console-ribbon').innerHTML = ribbon_x + ' ' + ribbon_y + ' ' + ribbon_size ;
// }


const drawT = i => {

  const canvas_width = 100;
  const canvas_height = 100;

  const corner = ribbonSize * 0.25;

  const x1 = (canvas_width / 2) - (ribbonSize / 2);
  const x2 = ribbonSize - x1;
  const x4 = (canvas_width / 2) + (ribbonSize / 2);
  const x3 = x4 - (x2 - x1);

  const y1 = (canvas_height / 2) - (ribbonSize / 2);
  const y2 = ribbonSize - y1;
  const y4 = (canvas_height / 2) + (ribbonSize / 2);
  const y3 = y4 - (y2 - y1);


  var group = ribbon.group()
  console.log('x1 = ' + x1 + '\nx2 = ' + x2 + '\nx3 = ' + x3 + '\nx4 = ' + x4 );
  console.log('y1 = ' + y1 + '\ny2 = ' + y2 + '\ny3 = ' + y3 + '\ny4 = ' + y4 );

      group
      .path(`
        M ${x2} ${y1}
        L ${x3} ${y1} 
        L ${y2 + ribbonXDepth} ${y1 + ribbonYDepth}
        L ${y1 + ribbonXDepth} ${y1 + ribbonYDepth}
        Z
      `)

      group
      .path(`
        M ${x1} ${y2}
        L ${x2} ${y2} 
        L ${y1 + ribbonXDepth} ${y2 + ribbonYDepth}
        L ${ribbonXDepth} ${y2 + ribbonYDepth}
        Z
      `)

      group
      .path(`
        M ${x3} ${y2}
        L ${x4} ${y2} 
        L ${y3 + ribbonXDepth} ${y2 + ribbonYDepth}
        L ${y2 + ribbonXDepth} ${y2 + ribbonYDepth}
        Z
      `)

      group
      .path(`
        M ${x3} ${y3}
        L ${x4} ${y3} 
        L ${y3 + ribbonXDepth} ${y3 + ribbonYDepth}
        L ${y2 + ribbonXDepth} ${y3 + ribbonYDepth}
        Z
      `)

      group
      .path(`
        M ${x1} ${y3}
        L ${x2} ${y3} 
        L ${y1 + ribbonXDepth} ${y3 + ribbonYDepth}
        L ${ribbonXDepth} ${y3 + ribbonYDepth}
        Z
      `)


      // M 80 60
      // L 70 70 
      // L 70 50
      // L 80 40
      // Z


      // M 20 60
      // L 9 30 
      // L 9 10
      // L 20 40
      // Z
    

      // M 80 60
      // L 69 69 
      // L 69 10
      // L 80 40
      // Z
    
      // right
      group
      .path(`
        M ${x4} ${y3}
        L ${x3 + ribbonXDepth} ${y3 + ribbonXDepth} 
        L ${x3 + ribbonXDepth} ${y2 + ribbonYDepth}
        L ${x4} ${y2}
        Z
      `)

    
      // left
      group
      .path(`
        M ${x1} ${y3}
        L ${ribbonXDepth} ${y3 + ribbonYDepth} 
        L ${ribbonXDepth} ${y2 + ribbonYDepth}
        L ${x1} ${y2}
        Z
      `)

      group
      .path(`
        M ${x3} ${y1}
        L ${x3} ${y2}
        L ${x2 + ribbonXDepth} ${y2 + ribbonYDepth}
        L ${x2 + ribbonXDepth} ${y1 + ribbonYDepth}
        Z
      `)

      // group
      //   .path(`
      //     M ${x3} ${y1}
      //     L ${x3} ${y2}
      //     L ${x2 + ribbonXDepth} ${y2 + ribbonYDepth}
      //     L ${x2 + ribbonXDepth} ${y1 + ribbonYDepth}
      //     Z
      //   `)

      group
        .path(`
          M ${x2} ${y1}
          L ${x2} ${y2} 
          L ${y1 + ribbonXDepth} ${y2 + ribbonYDepth}
          L ${y1 + ribbonXDepth} ${y1 + ribbonYDepth}
          Z
        `)

        group
        .path(`
          M ${x2} ${y4}
          L ${x2} ${y3} 
          L ${x1 + ribbonXDepth} ${y3 + ribbonYDepth}
          L ${x1 + ribbonXDepth} ${y4 + ribbonYDepth}
          Z
        `)

        group
        .path(`
          M ${x3} ${y3}
          L ${x3} ${y4} 
          L ${x2 + ribbonXDepth} ${y4 + ribbonYDepth}
          L ${x2 + ribbonXDepth} ${y3 + ribbonYDepth}
          Z
        `)


      group
        .path(`
          M ${x2} ${y4}
          L ${x3} ${y4}
          L ${x2 + ribbonXDepth} ${y4 + ribbonYDepth}
          L ${x1 + ribbonXDepth} ${y4 + ribbonYDepth}
          Z
        `)















    //  group
    //  .path(`
    //    M 0 25 
    //    L ${calculateOffset(25,25)}
    //    L 25 5
    //    L 25 25
    //    Z
    //   `)

      // group
      // .path(`
      //   M 50 0 
      //   L ${calculateOffset(25,25)}
      //   L 25 5
      //   L 25 25
      //   Z
      //  `)
 



      // L ${ribbonSize} ${ribbonSize} 
      // L ${offset} ${ribbonSize} 
      // L 0 0 
    // group
    // .path(`
    //   M 0 0 
    //   L ${ribbonSize - offset} 0 
    //   L ${ribbonSize} ${ribbonSize} 
    //   L ${offset} ${ribbonSize} 
    //   L 0 0 
    //  `)

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

//   const drawT = i => {
//     const corner = ribbonSize * 0.25

//     const x1 = 0;
//     const x2 = x1 + ribbonXDepth;
//     const x3 = corner;
//     const x4 = x3 + ribbonXDepth;
//     const x5 = ribbonSize - corner;
//     const x6 = x5 + ribbonXDepth;
//     const x7 = ribbonSize;
//     const x8 = x7 + ribbonXDepth;

//     const y1 = 0;
//     const y2 = y1 + ribbonYDepth;
//     const y3 = corner;
//     const y4 = y3 + ribbonYDepth;
//     const y5 = ribbonSize - corner;
//     const y6 = y5 + ribbonYDepth;
//     const y7 = ribbonSize;
//     const y8 = y7 + ribbonYDepth;

//     const p1 = ribbon
//       .path(`
//         M ${x1} ${y3}
//         L ${x3} ${y3}
//         L ${x3} ${y1}
//         L ${x5} ${y1}
//         L ${x6} ${y2}
//         L ${x6} ${y3}
//         L ${x7} ${y3}
//         L ${x8} ${y4}
//         L ${x8} ${y6}
//         L ${x6} ${y6}
//         L ${x6} ${y8}
//         L ${x4} ${y8}
//         L ${x3} ${y7}
//         L ${x3} ${y6}
//         L ${x2} ${y6}
//         L ${x1} ${y5}
//         L ${x1} ${y3}
        
        
//         M ${x2} ${y4}
//         L ${x4} ${y4}
//         L ${x4} ${y2}
//         L ${x5} ${y2}
//         L ${x5} ${y3}
//         L ${x6} ${y4}
//         L ${x7} ${y4}
//         L ${x7} ${y5}
//         L ${x5} ${y5}
//         L ${x5} ${y7}
//         L ${x4} ${y7}
//         L ${x4} ${y6}
//         L ${x3} ${y5}
//         L ${x2} ${y5}
//         L ${x2} ${y4}
//        `)



//     moving the shape
//     const y1 = ribbonYDepth + 45;
//     const y2 = y1 + ribbonYDepth;
//     const y3 = corner;
//     const y4 = y3 + ribbonYDepth;
//     const y5 = ribbonSize - corner;
//     const y6 = y5 + ribbonYDepth;
//     const y7 = ribbonSize;
//     const y8 = y7 + ribbonYDepth;
//     const y9 = y8 + ribbonYDepth;

//     const s1 = ribbonSize + ribbonXDepth;
//     const s2 = ribbonSize + ribbonYDepth;
//     const s3 = ribbonSize * 0.5;
  
  
//     const x1 = i * (ribbonGap) + s1 * -0.1 + 45 + ribbonXDepth;
//     const x2 = x1 + ribbonXDepth;
//     const x3 = corner;
//     const x4 = x3 + ribbonXDepth;
//     const x5 = ribbonSize - corner;
//     const x6 = x5 + ribbonXDepth;
//     const x7 = ribbonSize;
//     const x8 = x7 + ribbonXDepth;
//     const x9 = x8 * 3.3;
    
//     var group = ribbon.group()

//   const top = group
//       .path(`
//       M ${x1 + s1 * 0.5}, ${y1} 
//       H ${x1 + s1 * 0.1} 
//       L ${x1 + s3}, ${y1 + s3} 
//       L ${x1 + s1 * 0.9}, ${y1 + s3} 
//       L ${x1 + s1 * 0.9}, ${y1} 
//       Z
//     `)

//     group.move(
//         i * (ribbonGap) + x8 * -0.1 + 45,
//         y8 * 0 + 45);




//     drawing the shapes

//     var group = ribbon.group();
  
//     const s1 = ribbonSize + ribbonXDepth;
//     const s2 = ribbonSize + ribbonYDepth;
//     const s3 = ribbonSize * 0.5;
  
//     const x1 = i * (ribbonGap) + s1 * -0.1 + 45 + ribbonXDepth;
//     const y1 = ribbonYDepth + 45;
  
//     const drawTrapezium = (x, y, width, height) => {
//       const trapeziumPath = `
//         M ${x + width * 0.5} ${y}
//         H ${x + width * 0.1}
//         L ${x + width * 0.3} ${y + height * 0.25}
//         L ${x + width * 0.7} ${y + height * 0.25}
//         L ${x + width * 0.9} ${y}
//         Z
//       `;
  
//       const trapezium = group.path(trapeziumPath).attr({
//         fill: 'none',
//         stroke: '#000',
//       });
//     };




    
  
//     drawTrapezium(125.5, 1.5, 171, 73);
//     drawTrapezium(125, 74.0591, 50, 122);
//     drawTrapezium(297, 369.559, 50, 122);
//     drawTrapezium(125, 368.559, 50, 122);
//     drawTrapezium(297.5, 75.5, 48, 122);
//     drawTrapezium(1.72815, 125, 172.272, 74);
//     drawTrapezium(2, 297, 169, 122);
//     drawTrapezium(297, 298, 170.272, 124);
//     drawTrapezium(296, 122, 172.272, 74);
//     drawTrapezium(50, 199, 48.5, 170.5);
//     drawTrapezium(422.5, 128, 48.5, 171.199);


//  }
  
  
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
