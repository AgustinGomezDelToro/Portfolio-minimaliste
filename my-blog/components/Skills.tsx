import {SiTypescript, SiReact, SiPython, SiMongodb, SiDocker, SiPhpmyadmin, SiKubernetes, SiGithub, SiGitlab, SiLaravel} from 'react-icons/si';
import { BiLogoPostgresql } from "react-icons/bi";
import { FaPhp, FaEthereum } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { CgMonday } from "react-icons/cg";




export const Skills = () => (
    <div>
        <div>
            <SiTypescript size="30" title="JavaScript" />
            <SiReact size="30" title="React" />
            <SiPython size="30" title="Python" />
            <FaPhp size="30" title="PHP" />
            <SiLaravel size="30" title="Laravel" />
            <BiLogoPostgresql size="30" title="PostgreSQL" />
            <SiMongodb size="30" title="MongoDB" />
            <SiPhpmyadmin size="30" title="PhpMyAdmin" />
            <FaAws size="30" title="AWS" />
            <FaEthereum size="30" title="Ethereum" />
            <SiDocker size="30" title="Docker" />
            <SiKubernetes size="30" title="Kubernetes" />
            <SiGithub size="30" title="Github" />
            <SiGitlab size="30" title="Gitlab" />
            <CgMonday size="30" title="Monday" />
        </div>
        <style jsx>{`
      div {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    `}</style>
    </div>
);

export default Skills;
