import { useState } from "react";
import { Box, InputBase, Button, styled, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";

import { NoteObj } from "../models/note";
import { DETAILS_LIMIT, TITLE_LIMIT } from "../constants/constant";

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 0;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid rgba(17, 17, 17, 0.3);
    width: 300px;
    padding-right: 25px;
  }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }
  & > span {
    font-size: 10px;
    position: relative;
    right: 40px;
  }
`;
const Error = styled(Typography)`
  color: red;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  width: 50%;
`;
const defaultObj = {
  id: 0,
  title: "",
  details: "",
  color: "#f5f5f5",
  date: new Date().toLocaleString().toString(),
};
interface ICreateNoteProps {
  addNotes: (note: NoteObj) => void;
}
const CreateNote: React.FC<ICreateNoteProps> = ({ addNotes }) => {
  const [notes, setNotes] = useState<NoteObj>(defaultObj);
  const [error, setError] = useState<string>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (error) {
      setError("");
    }
    setNotes({ ...notes, [e.target.name]: e.target.value });
  };
  const onCreateNote = () => {
    if (!notes.title && !notes.details) {
      setError("All Fields are mandatory");
      return;
    }
    addNotes({ ...notes, id: uuid() });
    setNotes(defaultObj);
  };
  return (
    <Container>
      {/* title */}
      <InputBase
        placeholder="Title"
        value={notes.title}
        onChange={(e) => onValueChange(e)}
        name="title"
        inputProps={{ maxLength: TITLE_LIMIT }}
      />
      <Box component="span">
        {notes.title.length}/{TITLE_LIMIT}
      </Box>
      {/* details */}
      <InputBase
        placeholder="Details"
        value={notes.details}
        onChange={(e) => onValueChange(e)}
        name="details"
        inputProps={{ maxLength: DETAILS_LIMIT }}
      />
      <Box component="span">
        {notes.details.length}/{DETAILS_LIMIT}
      </Box>
      {/* color */}
      <InputBase
        type="color"
        value={notes.color}
        onChange={(e) => onValueChange(e)}
        name="color"
      />
      {/* create btn */}
      <Button variant="outlined" onClick={() => onCreateNote()}>
        Create
      </Button>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default CreateNote;
