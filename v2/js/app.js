'use strict';
console.log('scrolly script working');

/***************************************
*   SCROLLYTELLING GRAPHIC             *
***************************************/

// select DOM elements
const scrolly = document.querySelector('.scrolly');
const arrow = document.querySelector('.arrow');

const graphicDiv = document.querySelector('.graphic');
const desktopImages = document.querySelectorAll('.image');

const cuba_map = document.querySelector('svg#cuba-mapa path');
const canarias_map = document.querySelectorAll('svg#canarias-mapa path');
const francia_map = document.querySelectorAll('svg#francia path');
const tenerife_arrow = document.querySelector('#tenerife-arrow');
const paris_return_arrow = document.querySelector('#paris-return-arrow');

let drawPaths = document.querySelectorAll('.arrow-path');
console.log(drawPaths);



for (let path of drawPaths) {
    // Get length of path
    let pathLength = path.getTotalLength();
    // Make very long dashes (the length of the path itself)
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    // Offset the dashes so the it appears hidden entirely
    path.style.strokeDashoffset = pathLength;
}
function drawing(pathElement, event) {
    // When the page scrolls...
    window.addEventListener("scroll", function(e) {
        // path length
        let pathLength = pathElement.getTotalLength();
        // What % down is it? 
        var scrollPercentage = (document.documentElement.scrollTop - event.element.offsetTop) / (1.3 * document.documentElement.clientHeight);
            
        // Length to offset the dashes
        if (0 <= scrollPercentage && scrollPercentage <= 1) {
            var drawLength = pathLength * scrollPercentage;
        }

        // Draw in reverse
        pathElement.style.strokeDashoffset = pathLength - drawLength;

    });
}

// initialize scrollama
let scroller = scrollama();

// scrollama event handlers
function handleStepEnter(event) {

    let index = event.element.dataset.step;

    // set both mobile and desktop divs to visible
    // media queries will show/hide them depending on the screen width
    if (index == 1) {
        console.log('step 1');

    } else if (index == 2) {
        console.log('step 2');

        arrow.style.opacity = 0;

    } else if (index == 3) {
        console.log('step 3');
        arrow.style.opacity = 0;
        cuba_map.style.fill = 'pink';

        document.querySelector('#cienfuegos').style.opacity = 1;


    } else if (index == 4) {
        console.log('step 4');

    } else if (index == 5) {
        console.log('step 5');

        cuba_map.style.stroke = 'none';
        document.querySelector('svg#canarias-mapa path').style.stroke = 'var(--gray)';

        document.querySelector('#tenerife').style.opacity = 1;

        tenerife_arrow.style.opacity = 1;
        drawing(tenerife_arrow, event);

    } else if (index == 6) {
        console.log('step 6');

        tenerife_arrow.style.opacity = 0;
        cuba_map.style.fill = 'var(--map)';
        canarias_map.forEach((element) => {
            element.style.fill = 'pink';
        })

    } else if (index == 8) {
        console.log('step 8');
        document.querySelector('#cuba-arrow').style.opacity = 1;
        drawing(document.querySelector('#cuba-arrow'), event);

    } else if (index == 9) {
        console.log('step 9');
        document.querySelector('#cuba-arrow').style.opacity = 0;

        cuba_map.style.fill = 'pink';
        canarias_map.forEach((element) => {
            element.style.fill = 'var(--map)';
        })

    } else if (index == 11) {
        console.log('step 11');
        document.querySelector('#paris').style.opacity = 1;
        document.querySelector('#paris_arrow').style.opacity = 1;

        drawing(document.querySelector('#paris_arrow'), event);

    } else if (index == 12) {
        console.log('step 12');
        document.querySelector('#paris_arrow').style.opacity = 0;

        francia_map.forEach( (el) => {
            el.style.fill = 'pink';
        })
        cuba_map.style.fill = 'var(--map)';

    } else if (index == 13) {
        console.log('step 13');
        document.querySelector('#havana').style.opacity = 1;
        document.querySelector('#havana-arrow').style.opacity = 1;
        drawing(document.querySelector('#havana-arrow'), event);

    } else if (index == 13.5) {

        francia_map.forEach( (el) => {
            el.style.fill = 'var(--map)';
        })
        cuba_map.style.fill = 'pink';
        document.querySelector('#havana-arrow').style.opacity = 0;

    } else if (index == 14) {
        console.log('step 14');
        paris_return_arrow.style.opacity = 1;
        drawing(paris_return_arrow, event);


    } else if (index == 15) {
        console.log('step 15');
        paris_return_arrow.style.opacity = 0;

        francia_map.forEach( (el) => {
            el.style.fill = 'pink';
        })
        cuba_map.style.fill = 'var(--map)';
    }

}

function handleStepExit(event) {

    if (event.direction === 'up') {

        // set both mobile and desktop divs to hidden
        // media queries will show/hide them depending on the screen width
        let index = event.element.dataset.step;
        if (index == 1) {
            console.log('step 1 out');

        } else if (index == 2) {
            console.log('step 2 out');
            arrow.style.opacity = 1;

        } else if (index == 3) {
            console.log('step 3 out');
            cuba_map.style.stroke = 'none';
            document.querySelector('#cienfuegos').style.opacity = 0;

            cuba_map.style.fill = 'var(--map)';

        } else if (index == 4) {
            console.log('step 4 out');

        } else if (index == 5) {
            console.log('step 5 out');
            tenerife_arrow.style.opacity = 0;

            document.querySelector('#tenerife').style.opacity = 0;

            cuba_map.style.fill = 'pink';

        } else if (index == 6) {
            console.log('step 6 out');
            tenerife_arrow.style.opacity = 1;

            cuba_map.style.fill = 'pink';
            canarias_map.forEach((element) => {
                element.style.fill = 'var(--map)';
            })

        } else if (index == 8) {
            console.log('step 8 out');
            document.querySelector('#cuba-arrow').style.opacity = 0;

        } else if (index == 9) {
            console.log('step 9 out');
            document.querySelector('#cuba-arrow').style.opacity = 1;

            cuba_map.style.fill = 'var(--map)';
            canarias_map.forEach((element) => {
                element.style.fill = 'pink';
            })

        } else if (index == 11) {
            console.log('step 11 out');
            document.querySelector('#paris_arrow').style.opacity = 0;
            document.querySelector('#paris').style.opacity = 0;
        }
         else if (index == 12) {
             console.log('step 12 out');
            document.querySelector('#paris_arrow').style.opacity = 1;

            francia_map.forEach( (el) => {
                el.style.fill = 'var(--map)';
            })
            cuba_map.style.fill = 'pink';

        } else if (index == 13) {
            console.log('step 13 out');
            document.querySelector('#paris_arrow').style.opacity = 0;
            document.querySelector('#havana-arrow').style.opacity = 0;
            document.querySelector('#havana').style.opacity = 0;

        } else if (index == 13.5) {

            francia_map.forEach( (el) => {
                el.style.fill = 'pink';
            })
            cuba_map.style.fill = 'var(--map)';
            document.querySelector('#havana-arrow').style.opacity = 1;
    
        } else if (index == 14) {
            console.log('step 14 out');
            paris_return_arrow.style.opacity = 0;

        } else if (index == 15) {
            paris_return_arrow.style.opacity = 1;

            francia_map.forEach( (el) => {
                el.style.fill = 'var(--map)';
            })
            cuba_map.style.fill = 'pink';
        }
    }
}

scroller
    .setup({
        step: '.step',
        // debug: true,
        offset: 1,
        // progress: true
    })
    .onStepEnter(handleStepEnter)
    .onStepExit(handleStepExit);
    // .onStepProgress(handleStepProgress);
