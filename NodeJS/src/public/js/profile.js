
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

function trans_user() {
    set_all();
    Object.assign(user_i.style , {
        borderRadius: '50% 0 0 50%',
        backgroundColor: '#a28ce6',
        color: 'white',
    })
    Object.assign(user_span.style , {
        opacity: '1',
        color: 'white',
    })
}

function trans_my_project() {
    set_all();
    Object.assign(my_project_i.style , {
        borderRadius: '50% 0 0 50%',
        backgroundColor: '#5766dc',
        color: 'white',
    })
    Object.assign(my_project_span.style , {
        opacity: '1',
        color: 'white',
    })
}

function trans_prj_favorite() {
    set_all();
    Object.assign(prj_favorite_i.style , {
        borderRadius: '50% 0 0 50%',
        backgroundColor: '#dc5788',
        color: 'white',
    })
    Object.assign(prj_favorite_span.style , {
        opacity: '1',
        color: 'white',
    })
}












