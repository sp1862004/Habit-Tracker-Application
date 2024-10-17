
const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container text-center">
                
                <h5 className="mb-3">Stay Connected and Keep Building Positive Habits!</h5>

                <div className="social-icons mb-3">
                    <a href="/" className="social-icon mx-2" style={{ transition: 'transform 0.3s ease' }}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="/" className="social-icon mx-2" style={{ transition: 'transform 0.3s ease' }}>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="/" className="social-icon mx-2" style={{ transition: 'transform 0.3s ease' }}>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/shailesh-patel-3102bb277" target="_blank" rel="noreferrer" className="social-icon mx-2" style={{ transition: 'transform 0.3s ease' }}>
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="https://github.com/sp1862004" target="_blank" rel="noreferrer" className="social-icon mx-2" style={{ transition: 'transform 0.3s ease' }}>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>

                
                <p className="mb-0">
                    © {new Date().getFullYear()} <span className="blogt">HABIT TRACKER</span> <i className="fa-regular fa-clock"></i> . All Rights Reserved.
                </p>
            </div>

          
        </footer>
    );
};

export default Footer;
