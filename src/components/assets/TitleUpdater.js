import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TitleUpdater = () => {
    const location = useLocation();

    useEffect(() => {
        const pageTitles = {
            "/": "Home - Abroad Mentors - Build future with us",
            "/about": "About - Abroad Mentors - Build future with us",
            "/contact": "Contact - Abroad Mentors - Build future with us",
            "/services": "Services - Abroad Mentors - Build future with us",
        };

        document.title = pageTitles[location.pathname] || "My React Website";
    }, [location.pathname]);

    return null;
};

export default TitleUpdater;