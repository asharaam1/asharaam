import axios from 'axios';

const username = 'asharaam1';

// GitHub API endpoints
const API_URL = `https://api.github.com/users/${username}/repos`;

// Fetch repositories from GitHub
export const fetchProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    // Filter and map the data to get only what we need
    const projects = response.data
      .filter(repo => !repo.fork && !repo.private) // Only include non-forked, public repos
      .map(repo => ({
        id: repo.id,
        name: repo.name,
        description: repo.description || 'No description provided',
        html_url: repo.html_url,
        homepage: repo.homepage, // Live demo URL if available
        topics: repo.topics || [],
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updated_at: repo.updated_at,
        // You'll need to add images manually or use a placeholder
        image: `/assets/images/projects/${repo.name}.jpg`,
      }));
    
    return projects;
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return [];
  }
};