// MemberCard - avatar (initials), name, role badge and a small role-colored action button.
import styles from './MemberCard.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: "Leader" | "Member" | "Guest", isActive: boolean}} props.member
 * @param {boolean} props.isSelected - true when this is the selected member (the card gets styles.selected)
 * @param {(memberId: number) => void} props.onSelect - call it with member.id when the card is clicked
 */
// export default function MemberCard({ member, isSelected, onSelect }) {
//   // TODO: avatar with the initials ("Noa Levi" -> "NL")
  
//   // TODO: name + role badge
//   // TODO: button colored by role (Leader=blue, Member=green, Guest=purple), disabled if inactive
//   // TODO: inactive member -> the card also gets styles.inactive (faded)
//   return null
// }



export default function MemberCard({ member, isSelected, onSelect }) {

  // Create initials from the member's name
  const initials = member.name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  return (
    <div
      className={`
        ${styles.card}
        ${isSelected ? styles.selected : ''}
        ${!member.isActive ? styles.inactive : ''}
      `}
      onClick={() => onSelect(member.id)}
    >

      {/* Avatar */}
      <div className={styles.avatar}>
        {initials}
      </div>

      {/* Member name */}
      <h3 className={styles.name}>
        {member.name}
      </h3>

      {/* Role badge */}
      <span className={styles.badge}>
        {member.role}
      </span>

      {/* Role button */}
      <button
        type="button"
        className={`
          ${styles.roleButton}
          ${styles[member.role.toLowerCase()]}
        `}
        disabled={!member.isActive}
        onClick={(e) => e.stopPropagation()}
      >
        {member.role}
      </button>

    </div>
  );
}

