document.addEventListener('DOMContentLoaded', function() {
    // Sample job data
    const jobs = [
        {
            title: "Senior Frontend Developer",
            company: "TechCorp Inc.",
            logo: "T",
            location: "Bangalore, India",
            type: "Full-time",
            tags: ["React", "TypeScript", "UI/UX"],
            salary: "₹18L - ₹24L",
            posted: "2 days ago"
        },
        {
            title: "Product Manager",
            company: "InnovateTech",
            logo: "I",
            location: "Mumbai, India",
            type: "Full-time",
            tags: ["Product Development", "Agile", "SaaS"],
            salary: "₹15L - ₹22L",
            posted: "3 days ago"
        },
        {
            title: "UX/UI Designer",
            company: "CreativeMinds",
            logo: "C",
            location: "Remote",
            type: "Full-time",
            tags: ["Figma", "User Research", "Prototyping"],
            salary: "₹12L - ₹18L",
            posted: "1 day ago"
        },
        {
            title: "Data Scientist",
            company: "DataDriven",
            logo: "D",
            location: "Hyderabad, India",
            type: "Full-time",
            tags: ["Python", "Machine Learning", "SQL"],
            salary: "₹20L - ₹28L",
            posted: "5 days ago"
        },
        {
            title: "DevOps Engineer",
            company: "CloudSolutions",
            logo: "C",
            location: "Pune, India",
            type: "Full-time",
            tags: ["AWS", "Docker", "Kubernetes"],
            salary: "₹22L - ₹30L",
            posted: "1 week ago"
        },
        {
            title: "Marketing Specialist",
            company: "GrowthMarketing",
            logo: "G",
            location: "Delhi, India",
            type: "Full-time",
            tags: ["Digital Marketing", "SEO", "Content Strategy"],
            salary: "₹8L - ₹14L",
            posted: "3 days ago"
        }
    ];

    // Populate job listings
    const jobsContainer = document.getElementById('jobs-container');
    
    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        
        jobCard.innerHTML = `
            <div class="job-header">
                <div class="company-logo">
                    <strong>${job.logo}</strong>
                </div>
                <div>
                    <h3 class="job-title">${job.title}</h3>
                    <p class="company-name">${job.company}</p>
                    <p class="company-name">${job.location} • ${job.type}</p>
                </div>
            </div>
            <div class="job-tags">
                ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
            </div>
            <div class="job-footer">
                <div class="job-salary">${job.salary}</div>
                <div class="job-posted">${job.posted}</div>
            </div>
        `;
        
        jobsContainer.appendChild(jobCard);
    });

    // Search functionality
    document.getElementById('search-jobs').addEventListener('click', function() {
        const keyword = document.getElementById('keyword').value.toLowerCase();
        const location = document.getElementById('location').value.toLowerCase();
        
        // Clear existing jobs
        jobsContainer.innerHTML = '';
        
        // Filter jobs based on search criteria
        const filteredJobs = jobs.filter(job => {
            const matchesKeyword = keyword === '' || 
                job.title.toLowerCase().includes(keyword) || 
                job.company.toLowerCase().includes(keyword) ||
                job.tags.some(tag => tag.toLowerCase().includes(keyword));
                
            const matchesLocation = location === '' || 
                job.location.toLowerCase().includes(location);
                
            return matchesKeyword && matchesLocation;
        });
        
        // Display filtered jobs
        filteredJobs.forEach(job => {
            const jobCard = document.createElement('div');
            jobCard.className = 'job-card';
            
            jobCard.innerHTML = `
                <div class="job-header">
                    <div class="company-logo">
                        <strong>${job.logo}</strong>
                    </div>
                    <div>
                        <h3 class="job-title">${job.title}</h3>
                        <p class="company-name">${job.company}</p>
                        <p class="company-name">${job.location} • ${job.type}</p>
                    </div>
                </div>
                <div class="job-tags">
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>
                <div class="job-footer">
                    <div class="job-salary">${job.salary}</div>
                    <div class="job-posted">${job.posted}</div>
                </div>
            `;
            
            jobsContainer.appendChild(jobCard);
        });
    });
});