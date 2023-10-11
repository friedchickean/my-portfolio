import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import FadeInUp from './FadeInUp';

interface TileProps {
  image: string;
  title: string;
  description: string;
  sourceCodeLink: string;
  languageIcons?: ReactNode[];
}

const ProjectTile: React.FC<TileProps> = ({ image, title, description, sourceCodeLink, languageIcons }) => {
  return (
    <div className="shadow-md rounded-md bg-slate-700/20 mb-5 flex flex-col w-full">
      <div className="bg-slate-800/30 rounded-t-md h-64 flex items-center justify-center border-b-2">
        <img src={image} alt={title} className="max-w-full max-h-full p-4" />
      </div>
      <h2 className="text-xl lg:text-2xl text-cyan-500 font-bold pt-4 pb-2 px-5">{title}</h2>

      <div className="flex-grow p-5 flex flex-col">
        <p className="text-slate-100 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3 text-xl lg:text-2xl text-slate-100 flex-wrap">
            {languageIcons && languageIcons.map((Icon, index) => <span key={index}>{Icon}</span>)}
          </div>
          <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:underline border-2 text-xs p-2 lg:text-md lg:px-4 lg:py-3 ">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};


export default ProjectTile;
