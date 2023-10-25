import React from 'react'
import styles from '../styles/note.module.css'
import { Note as NoteModel } from '../models/note';
import { Card } from 'react-bootstrap';

interface NoteProps {
    note: NoteModel;
}

const Note = ({ note }: NoteProps) => {
    const {title, text, createdAt, updatedAt} = note;
    return (
        <Card className={styles.noteCard}>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text className={styles.cardText}>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Note