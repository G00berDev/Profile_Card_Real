import React from "react";
import "./ProfileCard.css";
import {
FaGithub,
FaInstagram,
FaFacebook,
FaLinkedin,
FaTwitter,
FaPhone,
FaMapMarkerAlt,
} from "react-icons/fa";

const ProfileCard = ({
profileImage = "https://via.placeholder.com/150",
firstName,
lastName,
jobTitle,
location,
phone,
email,
bio,
socialLinks = {},
}) => {
return (
<div className="profile-card">
    <img
    src={profileImage}
    alt={`${firstName} ${lastName}'s profile`}
    className="profile-image"
    />
    <h2 className="profile-name">{`${firstName} ${lastName}`}</h2>
    <p className="profile-job-title">{jobTitle}</p>
    <div className="profile-details">
    {location && (
        <p className="profile-location">
        <FaMapMarkerAlt /> {location}
        </p>
    )}
    {phone && (
        <p className="profile-phone">
        <FaPhone /> {phone}
        </p>
    )}
    </div>
    <a href={`mailto:${email}`} className="profile-email">
    {email}
    </a>
    <p className="profile-bio">{bio}</p>
    <div className="profile-socials">
    {socialLinks.github && (
        <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        >
        <FaGithub />
        </a>
    )}
    {socialLinks.instagram && (
        <a
        href={socialLinks.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        >
        <FaInstagram />
        </a>
    )}
    {socialLinks.facebook && (
        <a
        href={socialLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        >
        <FaFacebook />
        </a>
    )}
    {socialLinks.linkedin && (
        <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        >
        <FaLinkedin />
        </a>
    )}
    {socialLinks.twitter && (
        <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
        >
        <FaTwitter />
        </a>
    )}
    </div>
</div>
);
};

export default ProfileCard;
