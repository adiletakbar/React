import styles from './Card.module.css';

function Card(){
    return(
        <div className={styles.card}>
        <h2>Card Title</h2>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
        alt="mountains" />
        <p>Card for example</p>
        </div>

    );

}

export default Card