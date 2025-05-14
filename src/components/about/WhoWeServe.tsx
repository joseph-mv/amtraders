import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const audience = [
  "Importers and wholesalers",
  "E-commerce retailers",
  "Brick-and-mortar stores",
  "Construction firms and manufacturers",
  "Startups launching private labels",
  "Entrepreneurs expanding into new categories",
];
const WhoWeServe = () => {
  return (
    <div className="p-2">
      <h3 className="text-2xl font-semibold mb-4">Who We Serve</h3>
      <ul className="mx-auto  max-w-max  text-gray-700 space-y-3">
        {audience.map((item, idx) => (
          <li key={idx}>
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="mr-2" />{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WhoWeServe;
