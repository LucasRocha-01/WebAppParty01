import { ContainerBP, ContentBP, ImgPartyBP } from "./styles";

import PartyImg from "../../assets/images/party.jpg";
import horaImg from "../../assets/images/hora.svg";


export function BoxParty() {
    return(
        <li> 
            <ContainerBP>
                <span>12-03-21</span>
                <ContentBP>
                    <ImgPartyBP style={{backgroundImage: `url(${PartyImg})` }} />
                    <span>Color Party</span>

                    <img className="hourClock" src={horaImg} />
                    <p> 08:15 </p>
                </ContentBP> 
            </ContainerBP> 
        </li>
            
    )
}