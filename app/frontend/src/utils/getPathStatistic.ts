import statistcRed from '../assets/statisticsRed.svg'
import statistcGreen from '../assets/statisticsGreen.svg'
import statistcWhite from '../assets/statisticWhite.svg'


interface Path {
  path: string;
}

export default function getStatistic(nota: number): Path  {
  if (nota < 5) {
    return { path: statistcRed };
  } else if (nota > 7) {
    return { path: statistcGreen };
  } else {
    return { path: statistcWhite };
  }
}

