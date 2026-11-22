// App - keeps all the state (useState) and builds the page from the components.
import { initialMembers, initialTasks } from './data.js'
import styles from './App.module.css'
import Header  from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import MembersList from './components/MembersList/MembersList.jsx'
import TasksPanel from './components/TasksPanel/TasksPanel.jsx';
import Notice from './components/Notice/Notice.jsx'
import { useState } from 'react';
import FilterBar from './components/FilterBar/FilterBar.jsx';
export default function App() {
  // TODO: state (useState):
  const  [members  ,setMembers] = useState(initialMembers)
    //   tasks            - start with initialTasks
  const  [tasks  ,setTasks] = useState(initialTasks)
  //   selectedMemberId - start with null
const [selectedMemberId, setSelectedMemberId] = useState(null);
  //   showOnlyActive   - start with false
    const  [showOnlyActive  ,setShowOnlyActive] = useState(false)
  //   layout           - start with "list"
  
    const  [layout  ,setlayout] = useState("list")

  // TODO: compute the members to show, the selected member and their tasks
 const filteredMembers = members.filter((member) => {
    return !showOnlyActive || member.isActive;
  });
  const selectedMember = members.find(
  (member) => member.id === selectedMemberId
);
const isInactiveSelected =
  selectedMember && !selectedMember.isActive;

const selectedTasks = tasks.filter(
  (task) => task.assignedTo === selectedMemberId
);
const handleToggleTask = (taskId) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === taskId
        ? { ...task, done: !task.done }
        : task
    )
  );
};

  // TODO: render: Header, FilterBar, Notice (only when needed), MembersList, TasksPanel, Footer
  return (
  <div className={styles.app}>
    
  <Header/>
  <FilterBar
  showOnlyActive={showOnlyActive}
  onToggleActive={(e) => setShowOnlyActive(e.target.checked)}
  layout={layout}
  onLayoutChange={setlayout}
/>

{isInactiveSelected && (
  <Notice type="warning">
    {selectedMember.name} is inactive
  </Notice>
)}
  <MembersList
        members={filteredMembers}
        layout={layout}
        selectedMemberId={selectedMemberId}
        onSelect={setSelectedMemberId}
      />
<TasksPanel
  member={selectedMember || null}
  tasks={selectedTasks}
  onToggleTask={handleToggleTask}
/>
   <Footer/>
    </div>
  )
 
}
