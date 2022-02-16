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
      },
      {
        "_id": "620ca31c99616b6afd577d5e",
        "user": "6209fb5b15391cb03d7d0d93",
        "title": "Flask Book",
        "description": "It's a Flask book for absolute beginner",
        "tag": "Study",
        "timestamp": "2022-02-16T07:09:16.685Z",
        "__v": 0
      },
      {
        "_id": "620ca32999616b6afd577d60",
        "user": "6209fb5b15391cb03d7d0d93",
        "title": "C++ Book",
        "description": "It's a C++ book for absolute beginner",
        "tag": "Study",
        "timestamp": "2022-02-16T07:09:29.509Z",
        "__v": 0
      },
      {
        "_id": "620ca33899616b6afd577d62",
        "user": "6209fb5b15391cb03d7d0d93",
        "title": "GO Book",
        "description": "It's a GO book for absolute beginner",
        "tag": "Study",
        "timestamp": "2022-02-16T07:09:44.983Z",
        "__v": 0
      },
      {
        "_id": "620ca34299616b6afd577d64",
        "user": "6209fb5b15391cb03d7d0d93",
        "title": "Ruby Book",
        "description": "It's a Ruby book for absolute beginner",
        "tag": "Study",
        "timestamp": "2022-02-16T07:09:54.809Z",
        "__v": 0
      },
      {
        "_id": "620ca34c99616b6afd577d66",
        "user": "6209fb5b15391cb03d7d0d93",
        "title": "JavaScript Book",
        "description": "It's a JavaScript book for absolute beginner",
        "tag": "Study",
        "timestamp": "2022-02-16T07:10:04.969Z",
        "__v": 0
      },
      {
        "_id": "620ca35499616b6afd577d68",
        "user": "6209fb5b15391cb03d7d0d93",
        "title": "NoSQL Book",
        "description": "It's a NoSQL book for absolute beginner",
        "tag": "Study",
        "timestamp": "2022-02-16T07:10:12.799Z",
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