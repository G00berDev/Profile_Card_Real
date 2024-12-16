import React from "react";
import ProfileCard from "./ProfileCard";

const App = () => {
const user = {
profileImage: "https://via.placeholder.com/150", 
firstName: "Stryder",
lastName: "Bateman",
jobTitle: "Aspiring Software Engineer",
location: "Phoenix, AZ",
phone: "555-555-5555",
email: "stryderbateman@example.com",
bio: "Driven to empower people through technology. Learning React, Node.js, and EJS to make the world a better place.",
socialLinks: {
    github: "https://github.com/stryderbateman",
    instagram: "https://instagram.com/stryderbateman",
    facebook: "https://facebook.com/stryderbateman",
    linkedin: "https://linkedin.com/in/stryderbateman",
    twitter: "https://twitter.com/stryderbateman",
},
};

return (
<div className="App">
    <ProfileCard {...user} />
</div>
);
};

export default App;
