import { makeBadge, ValidationError } from 'badge-maker'

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //create the badge info using the badge-maker
  let badgeInfo = {
    label: `${license}`,
    message: 'passed',
    color: 'brightgreen',
  }

  if(license != 'null' || license != ''){
    return makeBadge(badgeInfo);
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'GNU AGPLv3'){
    return `https://choosealicense.com/licenses/agpl-3.0`;
  }
  else if(license === 'GNU GPLv3'){
    return `https://choosealicense.com/licenses/gpl-3.0`;
  }
  else if(license === 'GNU LGPLv3'){
    return `https://choosealicense.com/licenses/lgpl-3.0`;
  }
  else if(license === 'Mozilla Public License 2.0'){
    return `https://choosealicense.com/licenses/mpl-2.0`;
  }
  else if(license === 'Apache License 2.0'){
    return `https://choosealicense.com/licenses/apache-2.0`;
  }
  else if(license === 'MIT License'){
    return `https://choosealicense.com/licenses/mit`;
  }
  else if(license === 'Boost Software License 1.0'){
    return `https://choosealicense.com/licenses/bsl-1.0`;
  }
  else if(license === 'The Unlicense'){
    return `https://choosealicense.com/licenses/unlicense`;
  }       
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'null' || license != ''){
    return `This project is licensed under the ${license} license - see details here ${renderLicenseLink(license)}`;
  }
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description 
  ${data.description}
  
  ## Table of Contents
  [Installation](#Installation)  
  [Usage](#Usage)  
  [Credits](#Credits)  
  [License](#License)  
  [Badges](#Badges)  
  [Features](#Features)  
  [Tests](#Tests)  
  [Questions](#Questions)  

  ## Installation 
  ${data.install}
  
  ## Usage 
  ${data.usage}
  
  ## Credits 
  ${data.contribution}
  
  ## License 
  ${renderLicenseSection(data.licenseName)}
  
  ## Badges 
  ${renderLicenseBadge(data.licenseName)}
  
  ## Features 
  ${data.information}
  
  ## Tests 
  ${data.testing}
  
  ## Questions 
  If you have any questions you can reach me at https://github.com/${data.username} or ${data.email}`;
}

export default generateMarkdown;
