import { Button, Card, CardContent, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NoteObj } from "../models/note";

const StyledCard = styled(Card)`
  width: 400px;
  margin: 10px;
`;
const Wrapper = styled(Box)`
  & > p {
    color: #ad7fa3;
    font-size: 17px;
    line-height: 23px;
  }
  & > button {
    border: 1px solid #000;
    background: #fff;
    margin-top: 5px;
  }
`;

interface INoteProps {
  note: NoteObj;
  deleteNote: (id: number) => void;
}
const SingleNote: React.FC<INoteProps> = ({ note, deleteNote }) => {
  return (
    <StyledCard style={{ backgroundColor: note.color }}>
      <CardContent>
        <Wrapper>
          <Typography>{note.title}</Typography>
          <Typography>{note.details}</Typography>
          <Typography>{note.date}</Typography>
          <Button variant="outlined" onClick={() => deleteNote(note.id)}>
            Delete
          </Button>
        </Wrapper>
      </CardContent>
    </StyledCard>
  );
};

export default SingleNote;
