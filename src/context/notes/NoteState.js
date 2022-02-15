import NoteContext from "./noteContext";
import { useState } from "react";

const NoteStates = (props) => {

    const initialNotes = [
        {
          "_id": "620bf49137add9c6f1afd716",
          "user": "6209fb5b15391cb03d7d0d93",
          "title": "Python Book",
          "description": "It's a Python book for absolute beginner",
          "tag": "Study",
          "timestamp": "2022-02-15T18:44:33.046Z",
          "__v": 0
        },
        {
          "_id": "620bf4a237add9c6f1afd718",
          "user": "6209fb5b15391cb03d7d0d93",
          "title": "Java Book",
          "description": "It's a Java book for absolute beginner",
          "tag": "Study",
          "timestamp": "2022-02-15T18:44:50.330Z",
          "__v": 0
        },
        {
          "_id": "620bf4b337add9c6f1afd71a",
          "user": "6209fb5b15391cb03d7d0d93",
          "title": "Django Book",
          "description": "It's a Django book for absolute beginner",
          "tag": "Study",
          "timestamp": "2022-02-15T18:45:07.859Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(initialNotes)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteStates;