import React from "react";
import "./ProfileCard.css"; // Importing the CSS file
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
profileImage = "https://via.placeholder.com/150", // Default profile image
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
    {/* Profile Image */}
    <img
    src={profileImage}
    alt={`${firstName} ${lastName}'s profile`}
    className="profile-image"
    />

    {/* Name and Job Title */}
    <h2 className="profile-name">{`${firstName} ${lastName}`}</h2>
    <p className="profile-job-title">{jobTitle}</p>

    {/* Location and Phone */}
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

    {/* Email */}
    <a href={`mailto:${email}`} className="profile-email">
    {email}
    </a>

    {/* Bio */}
    <p className="profile-bio">{bio}</p>

    {/* Social Media Links */}
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
