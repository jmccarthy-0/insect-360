import { useState } from "react";
import AppIntro from "../../components/AppIntro/AppIntro";

interface IndexProps {
    setDisplaySpeciesMenu: (value: boolean | ((prevVar: boolean) => boolean)) => void;
}

const Index = ({setDisplaySpeciesMenu}: IndexProps) => {
    return <AppIntro setDisplaySpeciesMenu={setDisplaySpeciesMenu}/>
}

export default Index;