import React, { FC } from 'react';
import { CloseButton } from './CloseButton';
import { StyledNotification, UndoButton } from './Notification.styles';
import { AnimatePresence } from 'framer-motion';
import { Todo } from '../../../store/todos/types';

interface NotificationProps {
  prevTodo: Todo | undefined;
  notification: boolean;
  closeNotification: () => void;
  onUndo: (text: string, scheduled: string | null) => void;
}

const Notification: FC<NotificationProps> = props => {
  const { notification, closeNotification, onUndo, prevTodo } = props;

  const handleUndo = (text: string, scheduled: string | null) => {
    onUndo(text, scheduled);
    closeNotification();
  };

  return (
    <>
      <AnimatePresence>
        {notification && (
          <StyledNotification
            layout
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: 50,
              transition: { duration: 0.2 },
            }}
          >
            <div>1 Todo completed</div>
            <div
              style={{
                display: 'flex',
              }}
            >
              <UndoButton
                onClick={() =>
                  handleUndo(prevTodo!.content, prevTodo!.scheduled)
                }
              >
                Undo
              </UndoButton>
              <CloseButton close={closeNotification} />
            </div>
          </StyledNotification>
        )}
      </AnimatePresence>
    </>
  );
};

export default Notification;
