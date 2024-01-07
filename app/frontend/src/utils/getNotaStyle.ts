export default function getNotaStyle(nota: number): React.CSSProperties {
  if (nota < 5) {
    return { color: '#FF5964' };
  } else if (nota > 7) {
    return { color: '#05FF00' };
  } else {
    return { color: '#FFFF99' };
  }
}
