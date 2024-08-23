const styles = {
  container: {
    width: '800px',
    textAlign: 'left',
    // border: 'gray 1px solid',
    borderRadius: '8px',
    paddingLeft: '10px',
    boxShadow: '0 0.5px 0 0 #ffffff inset, 0 1px 2px 0 #B3B3B3',
    marginBottom: '25px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#F1F1F1',
  },
  a: {
    fontSize: '14px',
    textDecoration: 'none',
    color: 'black',
  },
  p: {
    fontWeight: 'bold',
  },
  button: {
    marginRight: '10px',
    backgroundColor: '#F1F1F1',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default function Card(props) {
  const { title, link } = props.article;
  return (
    <div style={styles.container}>
      <p style={styles.p}>
        <a style={styles.a} href={link}>
          {title}
        </a>
      </p>
      <a style={styles.a} href={link}>
        <button style={styles.button}></button>
      </a>
    </div>
  );
}
