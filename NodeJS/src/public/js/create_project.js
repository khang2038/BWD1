
// scroll 
var ctn_content_detail_prj = document.querySelector('.ctn_content_detail_prj');
var header_detail_prj = document.querySelector('.header_detail_prj');
var left_body_prj = document.querySelector('.left_body_prj');
var right_body_prj = document.querySelector('.right_body_prj');
var body_detail_prj = document.querySelector('.body_detail_prj');
var ctn_footer = document.querySelector('.ctn_footer');

$(document).ready(function(){
    $(window).scroll(function(){

        var body = $('html, body').scrollTop();
        var ctn_content_detail_prj_top = $('.ctn_content_detail_prj').offset().top;
        var header_top = $('header').offset().top; 
        var ctn_footer_top = $('.ctn__footer').offset().top;

        if (ctn_content_detail_prj_top<body) {
            if (ctn_footer_top-header_top<=screen.height) {
                Object.assign(left_body_prj.style , {
                    position: "initial",
                    display: 'none',
                })
            }
            else {
                Object.assign(left_body_prj.style , {
                    position: "fixed",
                    display: 'block',
                })
            }
            Object.assign(header_detail_prj.style , {

            })
            Object.assign(body_detail_prj.style , {
                justifyContent : 'flex-end',
            })
            Object.assign(left_body_prj.style , {
                position: 'fixed',
                top: '120px',
                left: '0',
            })
            Object.assign(right_body_prj.style , {
                
            })
        } else if (ctn_content_detail_prj_top>=body) {
            Object.assign(body_detail_prj.style , {
                justifyContent : 'center',
            })
            Object.assign(left_body_prj.style , {
                position: "initial",
                display: 'block',
            })
            Object.assign(right_body_prj.style , {
                
            })
        } 
        

    })
})


//trans_header
let block_story = document.querySelector('.block_story');
let block_FAQ = document.querySelector('.block_FAQ');
let block_comments = document.querySelector('.block_comments');
let block_community = document.querySelector('.block_community');

function open_story() {
    if (block_FAQ.classList.contains('open')) {
        block_FAQ.classList.remove('open');
    }
    if (block_comments.classList.contains('open')) {
        block_comments.classList.remove('open');
    }
    block_story.classList.add('open');
}

function open_FAQ() {
    if (block_story.classList.contains('open')) {
        block_story.classList.remove('open');
    }
    if (block_comments.classList.contains('open')) {
        block_comments.classList.remove('open');
    }
    block_FAQ.classList.add('open');
}

function open_comments() {
    if (block_FAQ.classList.contains('open')) {
        block_FAQ.classList.remove('open');
    }
    if (block_story.classList.contains('open')) {
        block_story.classList.remove('open');
    }
    block_comments.classList.add('open');
}

//money increase
const total_money = document.querySelector('.main_prj_content .ctn_statistic .ctn_pledged_backers .pledged span');
const total_backers = document.querySelector('.main_prj_content .ctn_statistic .ctn_pledged_backers .backers span');
const percent = document.querySelector('.percent_complete span')

function counterUp(el, to) {
	let speed = 200
	let from = 0
	let step = to / speed
	const counter = setInterval(function () {
		from += step
		if (from > to) {
			clearInterval(counter)
			el.innerText = to
		} else {
			el.innerText = Math.ceil(from)
		}
	}, 1)
}
function handle_user() {
    var update1 = document.querySelector(`.user-drop`);
    
    if (update1.classList.contains('open1')){
        update1.classList.remove('open1');
    } 
    else {
        update1.classList.add('open1');
    }
    
}

counterUp(total_money, 231700);
counterUp(total_backers, 1682);
counterUp(percent, 78);


























