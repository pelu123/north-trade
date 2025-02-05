import { BoxProvider } from "../../context/InfoBoxContext";
import Destacadas from "./Destacadas";
import InfoBox from "./InfoBox";

export default function DestacadasWrapper() {
    return (
        <BoxProvider>
            <Destacadas />
            <InfoBox />
        </BoxProvider>
    )
}