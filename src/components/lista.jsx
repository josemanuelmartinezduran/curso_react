export default function Lista({texto}) {
    return texto.map((i) => {
        <p>{{i}}</p>
    })
  }