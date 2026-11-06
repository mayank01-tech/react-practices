import React from 'react'
import Card from "./components/card";
const jobs = [
  {
    id: 1,
    brandLogo: "https://i.pinimg.com/736x/52/6d/7e/526d7e185c125ee44ab32230bc25bc9b.jpg",
    company: "Google",
    datePosted: "2 days ago",
    designation: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Bengaluru, India"
  },
  {
    id: 2,
    brandLogo: "https://i.pinimg.com/736x/74/88/6b/74886b52f5219b5fb45546c95e23202c.jpg",
    company: "Amazon",
    datePosted: "5 days ago",
    designation: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$55/hr",
    location: "Mumbai, India"
  },
  {
    id: 3,
    brandLogo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
    company: "Microsoft",
    datePosted: "1 day ago",
    designation: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    brandLogo: "https://i.pinimg.com/736x/ea/60/e2/ea60e224dd6d009926b751998e011154.jpg",
    company: "Netflix",
    datePosted: "3 days ago",
    designation: "Backend Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    id: 5,
    brandLogo: "https://i.pinimg.com/1200x/0e/82/eb/0e82ebf53c1b2a19b7cc92ef74282029.jpg",
    company: "Meta",
    datePosted: "6 days ago",
    designation: "Product Designer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Delhi, India"
  },
  {
    id: 6,
    brandLogo: "https://i.pinimg.com/736x/88/a0/ea/88a0eab104bc721ab55ea8d7e25c452f.jpg",
    company: "Adobe",
    datePosted: "4 days ago",
    designation: "Software Engineer",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$28/hr",
    location: "Noida, India"
  },
  {
    id: 7,
    brandLogo: "https://i.pinimg.com/736x/e2/b7/48/e2b74811d8f20d1373ec2d085d1fcfb7.jpg",
    company: "Spotify",
    datePosted: "Today",
    designation: "Mobile App Developer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Remote"
  },
  {
    id: 8,
    brandLogo: "https://i.pinimg.com/736x/50/bb/e3/50bbe3e676265251a093cece47b5d8ea.jpg",
    company: "Airbnb",
    datePosted: "1 week ago",
    designation: "DevOps Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Pune, India"
  },
  {
    id: 9,
    brandLogo: "https://i.pinimg.com/1200x/27/55/d5/2755d5f5a5726b96d83363c7d11e84f8.jpg",
    company: "Slack",
    datePosted: "3 hours ago",
    designation: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Chennai, India"
  },
  {
    id: 10,
    brandLogo: "https://i.pinimg.com/736x/1b/56/fd/1b56fd706cdbaa4646fd0472193d5005.jpg",
    company: "Apple",
    datePosted: "2 weeks ago",
    designation: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Gurugram, India"
  }
];

const App = () => {
  return (

  <div className="parent">
{jobs.map(function(elem,idx){
return<div key={idx}> <Card  company={elem.company} location={elem.location} logo={elem.brandLogo} datePosted={elem.datePosted} tag1={elem.tag1} post={elem.designation} tag2={elem.tag2} pay={elem.pay}/></div>
})}
  </div>
 
  
  )
}

export default App
