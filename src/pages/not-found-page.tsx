import React from "react";
import {Link} from 'react-router-dom'
import { RoutesPath } from "../config/routes";

const NotFoundPage = () => {
  return (
    <div>
      Not Found
      <div>
        <Link to={RoutesPath.main}>Volver a Main</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
