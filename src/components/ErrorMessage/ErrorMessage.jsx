import styles from './ErrorMessage.module.css';
const ErrorMessage = () => { 
  return (
      <>
          <p className={ styles.text}>
              something get wrong <br />
              should something to do
          </p>
      </>
  )
}
export default ErrorMessage;