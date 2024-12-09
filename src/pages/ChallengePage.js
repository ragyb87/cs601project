import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Footer from "../components/FooterInclude";

function ChallengePage() {
  const [questions, setQuestions] = useState([]);
  const [trueBox, setTrueBox] = useState([]);
  const [falseBox, setFalseBox] = useState([]);
  const [feedback, setFeedback] = useState(""); // Feedback message

  // Fetch questions from JSON
  useEffect(() => {
    fetch("/data/questions.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setQuestions(data);
        } else {
          console.error("Invalid data format: expected an array", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching questions:", error);
      });
  }, []);

  // Handle drag-and-drop logic
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If dropped outside a droppable area
    if (!destination) return;

    // Clear feedback before new action
    setFeedback("");

    // Determine the source and destination
    const sourceList = source.droppableId === "questions" ? questions : source.droppableId === "trueBox" ? trueBox : falseBox;
    const setSourceList = source.droppableId === "questions" ? setQuestions : source.droppableId === "trueBox" ? setTrueBox : setFalseBox;

    const destinationList =
      destination.droppableId === "questions" ? questions : destination.droppableId === "trueBox" ? trueBox : falseBox;
    const setDestinationList =
      destination.droppableId === "questions" ? setQuestions : destination.droppableId === "trueBox" ? setTrueBox : setFalseBox;

    // Move the item
    const [movedItem] = sourceList.splice(source.index, 1);

    // Validation: Check if the answer is correct
    if (
      (destination.droppableId === "trueBox" && movedItem.isTrue) ||
      (destination.droppableId === "falseBox" && !movedItem.isTrue)
    ) {
      setFeedback("Correct! You got it");
      destinationList.splice(destination.index, 0, movedItem);
      setDestinationList([...destinationList]);
    } else {
      // Incorrect answer, move back to questions
      setFeedback("Incorrect! Please try again");
      sourceList.splice(source.index, 0, movedItem);
    }

    // Update source list to reset its state
    setSourceList([...sourceList]);
  };

  return (
    <>
    <div className="inner-pages">
      <h2>Know Me Challenge</h2>
      <p className="description">
        After exploring my website profile, it's time for the "Know Me Challenge"! Drag each question into the boxes on
        the right, sorting them into "True" or "False."
      </p>

      {/* Feedback Message */}
      <div className="feedback-container">
        {feedback && <p className="feedback">{feedback}</p>}
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="challenge-container">
          {/* Questions List */}
          <Droppable droppableId="questions">
            {(provided) => (
              <div className="questions-list" ref={provided.innerRef} {...provided.droppableProps}>
                <h3>Questions</h3>
                {questions.map((question, index) => (
                  <Draggable key={question.id} draggableId={question.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        className="question-item"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {question.text}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* True and False Boxes */}
          <div className="answers-container">
            <Droppable droppableId="trueBox">
              {(provided) => (
                <div className="drop-box true-box fixed" ref={provided.innerRef} {...provided.droppableProps}>
                  <h3>True</h3>
                  {trueBox.map((item, index) => (
                    <div key={item.id} className="dropped-item">
                      {item.text}
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>

            <Droppable droppableId="falseBox">
              {(provided) => (
                <div className="drop-box false-box fixed" ref={provided.innerRef} {...provided.droppableProps}>
                  <h3>False</h3>
                  {falseBox.map((item, index) => (
                    <div key={item.id} className="dropped-item">
                      {item.text}
                    </div>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>
    </div>

    <Footer />
    </>
  );
}

export default ChallengePage;
