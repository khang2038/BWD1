import "./messa.css"

export default function Messa({own}){
    return(
        <div className={own ? "messa own" : "messa"}>
            <div className="messaTop">
                <img
                    className="messaImg"
                    src="https://storage.googleapis.com/pik-buk/inspitrip/2019_1dae4334-8ae5-4f4f-bcbb-ae9c9a836706.jpg?w=800"
                    alt="" 
                />
                <p className="messaText">Hello this is a message</p>
            </div>

            <div className="messaBottom">
                1 hour ago
            </div>
        </div>
    )
}