let header =document.querySelector('header');
let ctn__header = document.querySelector('.ctn__header');
let search = document.querySelector('header .search');
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;
    if (scrollY!=0) {
        Object.assign(header.style , {

        })

        Object.assign(ctn__header.style , {
            justifyContent : 'center',
        })

        
        Object.assign(search.style , {
            display : 'flex',
            animationName : 'searchtoLong',
            animationDuration: '0.5s',
            animationTimingFunction: 'linear',
            width : '20%',
        })
    } else {
        Object.assign(search.style , {
            animationName : 'searchtoNone',
            animationDuration: '0.5s',
            animationTimingFunction: 'linear',
            width : '0%',
        })
        setTimeout(()=> {
            Object.assign(search.style , {
                display : 'none',
            })
            Object.assign(ctn__header.style , {
                justifyContent : 'space-around',
               
            })
        },440)
    }
})