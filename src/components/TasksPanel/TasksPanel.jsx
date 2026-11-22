// TasksPanel - the tasks of the selected member, with messages for the empty states.
// import styles from './TasksPanel.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: string, isActive: boolean} | null} props.member - the selected member, or null
 * @param {Array<{id: number, title: string, done: boolean, assignedTo: number}>} props.tasks - the tasks of the selected member
 * @param {(taskId: number) => void} props.onToggleTask - call it with task.id when a task checkbox is clicked
 */
// export default function TasksPanel({ member, tasks, onToggleTask }) {
//   // TODO: no member selected -> "Select a member to see their tasks"
//   // TODO: the member has no tasks -> "No tasks yet"
//   // TODO: otherwise, a loop over tasks: a checkbox (checked = done) + the title, inside a <label>
//   return null
// }



import styles from './TasksPanel.module.css';

export default function TasksPanel({ member, tasks, onToggleTask }) {

  // 1. No member selected
  if (!member) {
    return (
      <div className={styles.tasksPanel}>
        <p className={styles.empty}>
          Select a member to see their tasks
        </p>
      </div>
    );
  }

  // 2. No tasks
  if (tasks.length === 0) {
    return (
      <div className={styles.tasksPanel}>
        <h2 className={styles.title}>
          {member.name}
        </h2>

        <p className={styles.empty}>
          No tasks yet
        </p>
      </div>
    );
  }

  // 3. Display tasks
  return (
    <div className={styles.tasksPanel}>

      <h2 className={styles.title}>
        {member.name}'s Tasks
      </h2>

      <div className={styles.tasks}>
        {tasks.map((task) => (
          <label
            key={task.id}
            className={`${styles.task} ${task.done ? styles.done : ''}`}
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => onToggleTask(task.id)}
            />

            {task.title}
          </label>
        ))}
      </div>

    </div>
  );
}
