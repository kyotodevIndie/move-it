import styles from '../styles/components/Profile.module.css'

export default function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://forums.sufficientvelocity.com/data/avatar/1585959159/o/29/29624.jpg" alt="profile" />
            <div>
                <strong>Kyoto Dev</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1</p>
            </div>
        </div>
    )
}
