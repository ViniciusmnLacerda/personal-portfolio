/* eslint-disable comma-dangle */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import { BiGitBranch } from 'react-icons/bi';
import { FaDocker, FaGithub, FaReact } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from 'react-icons/io';
import {
  SiJavascript,
  SiJest,
  SiMocha,
  SiRedux,
  SiTestinglibrary,
  SiTrello,
  SiTypescript,
  SiVisualstudiocode
} from 'react-icons/si';

const skills = [
  {
    icon: <SiTypescript />,
    title: 'TypeScript',
  },
  {
    icon: <FaReact />,
    title: 'ReactJS',
  },
  {
    icon: <IoLogoNodejs />,
    title: 'Node.js',
  },
  {
    icon: <FaDocker />,
    title: 'Docker',
  },
  {
    icon: <GrMysql />,
    title: 'MySQL',
  },
  {
    icon: <SiMocha />,
    title: 'Mocha',
  },
  {
    icon: <SiJest />,
    title: 'Jest',
  },
  {
    icon: <SiTestinglibrary />,
    title: 'RTL',
  },
  {
    icon: <IoLogoHtml5 />,
    title: 'HTML5',
  },
  {
    icon: <IoLogoCss3 />,
    title: 'CSS3',
  },
  {
    icon: <SiJavascript />,
    title: 'JavaScript',
  },
  {
    icon: <SiRedux />,
    title: 'Redux',
  },
  {
    icon: <BiGitBranch />,
    title: 'Git',
  },
  {
    icon: <FaGithub />,
    title: 'Github',
  },
  {
    icon: <SiVisualstudiocode />,
    title: 'VS Code',
  },
  {
    icon: <SiTrello />,
    title: 'Trello',
  },
];

export default skills;
