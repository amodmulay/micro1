const Header = () => {
    const advantages = [

      "Independent Development and Deployment",
      "Technology Agnosticism",
      "Scalability",
      "Independent Deployments",
      "Simplified Maintenance",
      "Faster Development with Parallel Work",
      "Incremental Upgrades",
      "Reusability",
      "Improved Performance",
      "Fault Isolation",
      "Modular Testing",
      "Diverse Team Expertise",
      "Easier Experimentation",
      "Adaptability to Business Changes",
      "Modular Code Ownership",
    ];
  
    return (
      <header style={{ padding: '20px', backgroundColor: '#f0f4f8' }}>
        <h1>Advantages of Micro Frontends</h1>
        <ul style={{ lineHeight: '1.8' }}>
          {advantages.map((advantage, index) => (
            <li key={index}>{advantage}</li>
          ))}
        </ul>
      </header>
    );
  };
  
  export default Header;
  