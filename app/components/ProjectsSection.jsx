"use client"
import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import {useState} from 'react';

const projectData = [
  {
    id: 1,
    title: 'ParkEase WebApp',
    description: 'The ParkEase web app allows administrators to manage parking lots, track parking space usage, and oversee transactions. It features real-time monitoring, reporting tools, and secure data management to optimize operations.',
    imgUrl: '/images/pew.png',
    tag: ["all", "web"],
    previewUrl: '/',
    gitUrl: '/'
  },
  {
    id: 2,
    title: 'GoviSaviya',
    description: 'The Govi Saviya web app is a comprehensive platform connecting farmers directly with buyers. It allows farmers to list products, manage bids, and respond to buyer requests. Buyers can place orders, track shipments, and use a shopping cart for a seamless purchasing experience.',
    imgUrl: '/images/govi.jpeg',
    tag: ["all", "web"],
    previewUrl: '/',
    gitUrl: '/'
  },
  {
    id: 3,
    title: 'ParkEase Driver MobileApp',
    description: 'The ParkEase driver app helps users find available parking spots in real-time. It uses QR codes for entry and exit, automatically calculates tolls, and offers payment options while maintaining a history of parking sessions and receipts.',
    imgUrl: '/images/pem.png',
    tag: ["all", "mobile"],
    previewUrl: '/',
    gitUrl: '/'
  },
  {
    id: 4,
    title: 'ParkEase Warden MobileApp',
    description: 'The ParkEase warden app lets wardens assign parking spots, monitor parking activity, and validate payments. It streamlines vehicle tracking and ensures efficient parking enforcement using a QR code system.',
    imgUrl: '/images/pem.png',
    tag: ["all", "mobile"],
    previewUrl: '/',
    gitUrl: '/'
  },

  {
    id: 5,
    title: 'SmartStock',
    description: 'A Laravel-based inventory management system that tracks items, categories, suppliers, and stock levels, offering features like real-time updates, low-stock alerts, reporting, and role-based access for efficient inventory control.',
    imgUrl: '/images/inv.png',
    tag: ["all", "web"],
    previewUrl: '/',
    gitUrl: '/'
  },
];

const ProjectsSection = () => {

  const [tag, setTag] = useState("all");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  }

  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(tag)
  );

  return (
    <>
      <h2 className="text-3xl font-semibold mb-6">My Projects</h2>

      <div className='text-white flex flex-row justify-center items-center gap-3 py-6'>
        <ProjectTag onClick={handleTagChange} name="all" isSelected={tag==="all"}/>
        <ProjectTag onClick={handleTagChange} name="web" isSelected={tag==="web"}/>
        <ProjectTag onClick={handleTagChange} name="mobile" isSelected={tag==="mobile"}/>
      </div>

      {/* Responsive grid to show 1 card on small screens and 3 on medium or larger screens */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.imgUrl}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
