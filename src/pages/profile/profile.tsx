import { ProfileContainer, Column1, Column2, Column3 } from "./profile.styled";

import {HistoriaPersonal} from '../../components/Profile/HistoriaPersonal/HistoriaPersonal';
import {Perfil} from '../../components/Profile/Perfil/Perfil';
import { MyHabilities } from "../../components/Profile/MyHabilities/MyHabilities";
import { MyCualitie} from '../../components/Profile/MyCulitie/MyCualitie';
export default function Profile() {
  return (
    <ProfileContainer>
      <Column1>
      <Perfil/>
      </Column1>
      <Column2>
        <HistoriaPersonal/>
      </Column2>
      <Column3>
      <MyHabilities/>
      <MyCualitie/>
      </Column3>
    </ProfileContainer>
  )
}