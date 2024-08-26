import React from 'react';
import emptyStar from "../../assets/images/rate/startRempli.png";
import fullStar from "../../assets/images/rate/startVide.png";


function Rate(props) {
      const score = props.score;
    const notes = [1, 2, 3, 4, 5];
    return (
      <div className="rate-contenair">
        {notes.map((note) =>
          score >= note ? (
            <img
              key={note.toString()}
              className="etoile"
              src={emptyStar}
              alt="star"
            />
          ) : (
            <img
              key={note.toString()}
              className="etoile"
              src={fullStar}
              alt="star"
            />
          )
        )}
      </div>
    );
}

export default Rate;
