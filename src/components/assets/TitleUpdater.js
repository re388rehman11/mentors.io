// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const TitleUpdater = () => {
//     const location = useLocation();

//     useEffect(() => {
//         const pageTitles = {
//             "/": "Home - Abroad Mentors - Build future with us",
//             "/about": "About - Abroad Mentors - Build future with us",
//             "/contact": "Contact - Abroad Mentors - Build future with us",
//             "/services": "Services - Abroad Mentors - Build future with us",
//             "/uk": "uk - Abroad Mentors - Build future with us",
//             "/usa": "usa - Abroad Mentors - Build future with us",
//             "/cyprus": "cyprus - Abroad Mentors - Build future with us",
//             "/canada": "canada - Abroad Mentors - Build future with us",
//             "/finland": "finland - Abroad Mentors - Build future with us",
//             "/australia": "australia - Abroad Mentors - Build future with us",
//             "/highlights": "highlights - Abroad Mentors - Build future with us",
//         };

//         document.title = pageTitles[location.pathname] || "My React Website";
//     }, [location.pathname]);

//     return null;
// };

// export default TitleUpdater;











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
            "/uk": "UK - Abroad Mentors - Build future with us",
            "/usa": "USA - Abroad Mentors - Build future with us",
            "/cyprus": "Cyprus - Abroad Mentors - Build future with us",
            "/canada": "Canada - Abroad Mentors - Build future with us",
            "/finland": "Finland - Abroad Mentors - Build future with us",
            "/australia": "Australia - Abroad Mentors - Build future with us",
            "/highlights": "Highlights - Abroad Mentors - Build future with us",
        };

        document.title = pageTitles[location.pathname] || "Abroad Mentors - Build future with us";
    }, [location.pathname]);

    return null;
};

export default TitleUpdater;
