import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import CancelIcon from '@mui/icons-material/Cancel'

const List = ({ todoList, handleToggle, handleDelete }) => {
  return (
    <ul className="list">
      {todoList.map((listItem) => (
        <li
          key={listItem.id}
          className={listItem.done ? 'done' : ''}
        >
          <span className="text">{listItem.item}</span>

          <span className="actions">
            {listItem.done ? (
              <CancelIcon
                className="icon undo"
                onClick={() => handleToggle(listItem.id)}
              />
            ) : (
              <CheckCircleIcon
                className="icon check"
                onClick={() => handleToggle(listItem.id)}
              />
            )}

            <DeleteForeverIcon
              className="icon delete"
              onClick={() => handleDelete(listItem.id)}
            />
          </span>
        </li>
      ))}
    </ul>
  )
}

export default List
