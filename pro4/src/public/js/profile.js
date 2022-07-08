
const user = document.querySelector('.wrapper .user');
const user_i = document.querySelector('.wrapper .user i');
const user_span = document.querySelector('.wrapper .user span');

const my_project = document.querySelector('.wrapper .my_project');
const my_project_i = document.querySelector('.wrapper .my_project i');
const my_project_span = document.querySelector('.wrapper .my_project span');

const prj_favorite = document.querySelector('.wrapper .prj_favorite');
const prj_favorite_i = document.querySelector('.wrapper .prj_favorite i');
const prj_favorite_span = document.querySelector('.wrapper .prj_favorite span');

function set_all() {
    Object.assign(user_i.style , {
        borderRadius: '50%',
        backgroundColor: 'white',
        color: '#5a5a5a',
    })
    Object.assign(user_span.style , {
        opacity: '0.2',
    })
    Object.assign(my_project_i.style , {
        borderRadius: '50%',
        backgroundColor: 'white',
        color: '#5a5a5a',
    })
    Object.assign(my_project_span.style , {
        opacity: '0.2',
    })
    Object.assign(prj_favorite_i.style , {
        borderRadius: '50%',
        backgroundColor: 'white',
        color: '#5a5a5a',
    })
    Object.assign(prj_favorite_span.style , {
        opacity: '0.2',
    })
}



//----------------trans_nav_bar------------------
const ctn_about_me = document.querySelector('.ctn_about_me');
const ctn_my_project = document.querySelector('.ctn_my_project');
const ctn_favorite_project = document.querySelector('.ctn_favorite_project');


function set_nav_bar_close() {
    Object.assign(ctn_about_me.style , {
        display : 'none',
    })
    Object.assign(ctn_my_project.style , {
        display : 'none',
    })
    Object.assign(ctn_favorite_project.style , {
        display : 'none',
    })
}

function trans_user() {
    set_all();
    set_nav_bar_close();
    Object.assign(user_i.style , {
        borderRadius: '50% 0 0 50%',
        backgroundColor: '#a28ce6',
        color: 'white',
    })
    Object.assign(user_span.style , {
        opacity: '1',
        color: 'white',
    })
    Object.assign(ctn_about_me.style , {
        display : 'flex',
    })
}

function trans_my_project() {
    set_all();
    set_nav_bar_close();
    Object.assign(my_project_i.style , {
        borderRadius: '50% 0 0 50%',
        backgroundColor: '#5766dc',
        color: 'white',
    })
    Object.assign(my_project_span.style , {
        opacity: '1',
        color: 'white',
    })
    Object.assign(ctn_my_project.style , {
        display : 'flex',
    })
}

function trans_prj_favorite() {
    set_all();
    set_nav_bar_close();
    Object.assign(prj_favorite_i.style , {
        borderRadius: '50% 0 0 50%',
        backgroundColor: '#dc5788',
        color: 'white',
    })
    Object.assign(prj_favorite_span.style , {
        opacity: '1',
        color: 'white',
    })
    Object.assign(ctn_favorite_project.style , {
        display : 'flex',
    })
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

// ----------open and close card project--------------
const card_1 = document.querySelector('.card_1');
const card_2 = document.querySelector('.card_2');
const card_3 = document.querySelector('.card_3');


function close_card() {
    card_1.classList.remove('open');
    card_2.classList.remove('open');
    card_3.classList.remove('open');
}

function open_card_1() {
    close_card();
    card_1.classList.add('open');
    $('.card_1').addClass('animate__animated animate__slideInRight');

}
function open_card_2() {
    close_card();
    card_2.classList.add('open');
    $('.card_2').addClass('animate__animated animate__slideInRight');


}
function open_card_3() {
    close_card();
    card_3.classList.add('open');
    $('.card_3').addClass('animate__animated animate__slideInRight');

}

//---------------statistic all prj of user

const labels = [
    'GAME',
    'ART',
    'SOCIETY',
    'MUSIC',
    'SPORT',
    'OTHER',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: [
            '#6699FF',
            '#CC66FF',
            '#009900',  
            '#EEB4B4',
            '#CD853F',
            '#CDCDB4',
        ],
        borderColor: 'rgb(255, 99, 132)',
        data: [1 , 1, 2, 1, 2,0],
    }]
};


const config = {
    type: 'pie',
    data: data,
    options: {}
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);


