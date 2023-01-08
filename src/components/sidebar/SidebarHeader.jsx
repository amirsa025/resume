import { useState } from "react";

import { Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";

import ThemeActionButton from "../ThemeActionButton";
import SocialMediaIcons from "../SocialMediaIcons";
import avatar from "../../assets/avatar.jpg";
import { alphabetPersian } from "../../constants/alphabetPersian";
import { CustomAvatar } from "../common";

const SidebarHeader = () => {
    const [start, setStart] = useState(false);

    return (
        <>
            <ThemeActionButton />
            <CustomAvatar avatar={avatar} size={200} fallback="YG" />
            <Typography variant="h6" color="#F93C92">
                <Typography variant="caption" color="tomato" className={"IRANSans"}>
                    {" {{ "}
                </Typography>
                <RandomReveal
                    isPlaying
                    duration={4}
                    characterSet={alphabetPersian}
                    characters="امیرمحمد ساکی زاده "
                    onComplete={() => setStart(true)}
                />

                <Typography variant="caption" color="tomato">
                    {" }} "}
                </Typography>
            </Typography>
            {start && (
                <Typography variant="caption" color="gray">
                    <Typography variant="caption" color="tomato">
                        [[{" "}
                    </Typography>
                    <RandomReveal
                        isPlaying
                        duration={4}
                        characterSet={alphabetPersian}
                        characters="توسعه دهنده وب"
                    />
                    <Typography variant="caption" color="tomato">
                        {" "}
                        ]]
                    </Typography>
                </Typography>
            )}

                <SocialMediaIcons />
        </>
    );
};

export default SidebarHeader;
