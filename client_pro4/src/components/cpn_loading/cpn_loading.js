import "./cpn_loading.css";

export function Cpn_loading() {
    return (    
        <div style={{position : 'fixed',top : '0' , bottom : '0', left : '0', right : '0',zIndex: '4',display : 'flex' , justifyContent : 'center',alignItems: 'center'}}>
          
            <div class="content_loading">
                <img style={{height : '60%'}} src={require('../../public/img/img_loading/loading.jpg')} />
            </div>
            
        </div>
    )
}