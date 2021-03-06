import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../context/ChallengesContext';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeOut: NodeJS.Timeout;

export default function Countdown() {

    const { startNewChallenge } = useContext(ChallengesContext);
 
    const [time, setTime] = useState(3);
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown(){
        setIsActive(true);
    }

    function resetCountdown() {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setTime(25 *  60);
    }

    useEffect(() => {
        if(isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if( isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button 
                disabled
                className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                >
                    Ciclo Encerrado
                </button> 
            ) : (
                <>
                    { isActive ? (
                    <button 
                    type="button" 
                    className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
                    onClick={resetCountdown}
                    >
                        Abandonar ciclo
                    </button>
                ) : (
                    <button 
                    type="button" 
                    className={styles.countdownButton}
                    onClick={startCountdown}
                    >
                        Iniciar um ciclo
                    </button>
                )}
                </>
            )}


        </div>
    )
}
