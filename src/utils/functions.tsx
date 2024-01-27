import { useState } from "react";

export const validateFormString = (string: string) => {
    const [warnings, setWarnings] = useState({ trigger: false });

    string === '' ? setWarnings({ ...warnings, trigger: true }) : setWarnings({ ...warnings, trigger: false });
};