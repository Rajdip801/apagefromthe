import React from "react";
import "../styles/gridad.css";

interface Gridad {
  title: string;
}

interface GridadsProps {
  gridads: Gridad[];
}

const Gridads: React.FC<GridadsProps> = ({ gridads }) => {
  return (
    <div className="gridadsection">
      <div className="gridad">
        {gridads.map((ad, index) => (
          <div key={index} className="space-1">
            <span>{ad.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gridads;