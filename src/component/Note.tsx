import { Box, styled, Typography } from "@mui/material";
import { NoteObj } from "../models/note";
import SingleNote from "./SingleNote";

const FlexBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

interface INotesProps {
  notes: NoteObj[];
  deleteNote: (id: number) => void;
}

const Note: React.FC<INotesProps> = ({ notes, deleteNote }) => {
  return (
    <Box>
      <Typography variant="h6">Notes</Typography>
      <FlexBox>
        {notes.map((note) => (
          <SingleNote note={note} deleteNote={deleteNote} />
        ))}
      </FlexBox>
    </Box>
  );
};

export default Note;
