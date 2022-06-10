
const FormatNumber = ({number}) => {
    return <span>{new Intl.NumberFormat('es-AR', ).format(number)}</span>
}
export default FormatNumber;