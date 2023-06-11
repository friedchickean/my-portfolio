import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface TileProps {
  image: string;
  title: string;
  description: string;
  sourceCodeLink: string;
  languageIcons?: ReactNode[];
}

const ProjectTile: React.FC<TileProps> = ({ image, title, description, sourceCodeLink, languageIcons }) => {
  return (
    <div className="shadow-md rounded-md bg-slate-700/20 mb-5 w-full flex flex-col">
      <div className="bg-slate-600 rounded-t-md h-64 flex items-center justify-center">
        <img src={image} alt={title} className="max-w-full max-h-full p-4" />
      </div>
      <h2 className="text-xl lg:text-2xl text-cyan-500 font-bold pt-4 pb-2 px-5">{title}</h2>

      <div className="flex-grow p-5 flex flex-col">
        <p className="text-slate-100 flex-grow">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex gap-3 text-xl">
            {languageIcons && languageIcons.map((Icon, index) => <span key={index}>{Icon}</span>)}
          </div>
          <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer" className="text-slate-100 hover:underline px-4 py-3 border-2">
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};


export default ProjectTile;
